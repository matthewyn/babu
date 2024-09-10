"use client";

import Flag from "/public/flag.png";
import { getBaseUrl } from "@/utils/utils";
import axios from "axios";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Button, Card, CardBody, Input, Link } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ phoneNumber: "", password: "" });
  const router = useRouter();

  const handleSubmit: FormEventHandler = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      setErrors({ phoneNumber: "", password: "" });
      const formattedPhoneNumber = "+62" + phoneNumber;

      if (!isPasswordVisible) {
        await axios.post(`${getBaseUrl()}/api/actions/login`, {
          phoneNumber: formattedPhoneNumber,
          password,
        });
        setIsPasswordVisible(true);
      } else {
        if (!password) {
          return setErrors((currentState) => ({ ...currentState, password: "Password wajib diisi" }));
        }
        const res = await signIn("credentials", {
          phoneNumber: formattedPhoneNumber,
          password,
          redirect: false,
        });
        if (res?.error === "CredentialsSignin") {
          return setErrors((currentState) => ({ ...currentState, password: "Demi keamanan, ubah kata sandi dengan klik 'Lupa Password?'" }));
        }
        router.push("/");
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.status === 401 && !err.response?.data.isExist) {
          setErrors({ phoneNumber: err.response?.data.errors.phoneNumber[0], password: "" });
        }
      } else {
        console.error(err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const toggleVisibility = () => setHiddenPassword(!hiddenPassword);

  return (
    <>
      <main className="pt-16">
        <section className="py-20">
          <div className="max-w-3xl mx-auto relative bg-login-banner bg-contain bg-no-repeat bg-center">
            <form onSubmit={handleSubmit}>
              <Card className="max-w-sm mx-auto">
                <CardBody className="px-8 py-14">
                  <h1 className="text-2xl font-bold text-center">Log in ke iClean</h1>
                  <Button color="secondary" className="font-bold mt-8" startContent={<FcGoogle />} size="lg" isDisabled aria-label="Masuk lewat Google">
                    Google
                  </Button>
                  <Button color="secondary" className="font-bold mt-3" startContent={<FaApple />} size="lg" isDisabled aria-label="Masuk lewat Apple">
                    Apple
                  </Button>
                  <small className="text-center relative mt-6">
                    <div className="h-[1px] w-2/5 absolute top-1/2 left-0 bg-gray-shade"></div>
                    <div className="h-[1px] w-2/5 absolute top-1/2 right-0 bg-gray-shade"></div>
                    atau
                  </small>
                  <Input
                    type="tel"
                    label="Nomor Telfon"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="mt-6"
                    size="sm"
                    style={{ color: "black" }}
                    placeholder="87753919561"
                    startContent={
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <Image src={Flag} alt="Bendera Indonesia" />
                        <span className="text-sm text-default-400">+62</span>
                      </div>
                    }
                    isInvalid={!!errors.phoneNumber!!}
                    errorMessage={errors.phoneNumber}
                    autoFocus={!isPasswordVisible}
                  />
                  {isPasswordVisible ? (
                    <Input
                      type={hiddenPassword ? "password" : "text"}
                      label="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-4"
                      size="sm"
                      isInvalid={!!errors.password!!}
                      errorMessage={errors.password}
                      endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                          {hiddenPassword ? <HiOutlineEye className="text-2xl text-default-400 pointer-events-none" /> : <HiOutlineEyeOff className="text-2xl text-default-400 pointer-events-none" />}
                        </button>
                      }
                      style={{ color: "black" }}
                      autoFocus={isPasswordVisible}
                    />
                  ) : null}
                  <Button color="success" size="lg" className="mt-4 font-medium" type="submit" aria-label="Masuk ke iClean" isLoading={isLoading}>
                    Log in
                  </Button>
                  <Link underline="hover" href="/lupa-password" className="mx-auto mt-10">
                    Lupa Password?
                  </Link>
                  <Link underline="hover" href="/register" className="mx-auto mt-2">
                    Daftar
                  </Link>
                </CardBody>
              </Card>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
