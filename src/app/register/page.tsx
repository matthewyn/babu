"use client";

import Flag from "/public/flag.png";
import RegisterBanner from "/public/register-banner.svg";
import AuthLeft from "/public/auth-leaves-left.png";
import AuthRight from "/public/auth-leaves-right.png";
import { getBaseUrl } from "@/utils/utils";
import { FooterContextType, useFooterContext } from "@/context/is-footer";
import PinRegister from "@/components/pin-register";
import { FcGoogle } from "react-icons/fc";
import { HiArrowLeft, HiOutlineEye } from "react-icons/hi2";
import { HiOutlineEyeOff } from "react-icons/hi";
import { firebaseAuth } from "@/firebase";
import axios from "axios";
import toast from "react-hot-toast";
import { ConfirmationResult, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Button, Card, CardBody, Input, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FormEventHandler, useEffect, useState } from "react";

export default function Register() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pin, setPin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({ phoneNumber: "", name: "", password: "" });
  const [isVerified, setIsVerified] = useState(false);
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaVerifier, setRecaptchaVerifier] = useState<RecaptchaVerifier | null>(null);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const { setIsFooter } = useFooterContext() as FooterContextType;

  const handleSubmit: FormEventHandler = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      setErrors({ phoneNumber: "", name: "", password: "" });
      const formattedPhoneNumber = "+62" + phoneNumber;
      if (!confirmationResult && !isVerified) {
        const res = await axios.post(`${getBaseUrl()}/api/auth/register/phone-number`, {
          phoneNumber: formattedPhoneNumber,
        });
        if (res.status === 200 && res.data.isExist) {
          return router.push("/login");
        }
        onOpen();
      } else {
        const res = await axios.post(`${getBaseUrl()}/api/auth/register/verification`, {
          phoneNumber: formattedPhoneNumber,
          name,
          password,
        });
        await signIn("credentials", {
          phoneNumber: formattedPhoneNumber,
          password,
          redirect: false,
        });
        router.push("/");
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.status === 401 && err.response?.data.errors) {
          setErrors({ phoneNumber: err.response?.data.errors?.phoneNumber?.[0], name: err.response.data.errors?.name?.[0], password: err.response.data.errors?.password?.[0] });
        }
      } else {
        console.error(err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const toggleVisibility = () => setHiddenPassword(!hiddenPassword);

  useEffect(
    function () {
      setIsFooter(false);
    },
    [setIsFooter]
  );

  useEffect(
    function () {
      if (phoneNumber.length === 1 && phoneNumber[0] !== "8") {
        setPhoneNumber("");
      }
    },
    [phoneNumber]
  );

  useEffect(() => {
    const recaptchaVerifier = new RecaptchaVerifier(firebaseAuth, "recaptcha-container", { size: "invisible" });
    setRecaptchaVerifier(recaptchaVerifier);
    return () => {
      recaptchaVerifier.clear();
    };
  }, [firebaseAuth]);

  useEffect(() => {
    const checkPin = async () => {
      if (pin.length === 6) {
        try {
          await confirmationResult?.confirm(pin);
          setIsVerified(true);
          toast.success("Kode OTP benar");
        } catch (err) {
          setPin("");
          toast.error("Kode OTP salah");
        }
      }
    };
    checkPin();
  }, [pin]);

  return (
    <>
      <main className="pt-16">
        <section className="py-20">
          <Image src={AuthLeft} alt="Dekorasi daun pada sisi sebelah kiri" className="fixed bottom-0 left-0" />
          <Image src={AuthRight} alt="Dekorasi daun pada sisi sebelah kanan" className="fixed bottom-0 right-0" />
          <div className="max-w-4xl mx-auto grid grid-cols-2 gap-20">
            <div className="text-center">
              <Image src={RegisterBanner} priority alt="Bergabung dengan Kami sebagai agen perubahan" className="mx-auto" />
              <h2 className="text-xl font-semibold mt-8">Pesan Cleaner Mudah Hanya di iClean</h2>
              <small className="mt-2">Gabung dan rasakan kemudahan layanan di iClean</small>
            </div>
            <form onSubmit={handleSubmit}>
              <Card>
                <CardBody className="py-8 px-8">
                  {!confirmationResult && !isVerified ? (
                    <>
                      <h1 className="text-2xl font-bold text-center">Daftar Sekarang</h1>
                      <p className="text-center">
                        Sudah punya akun iClean?{" "}
                        <Link href="/login" underline="hover">
                          Masuk
                        </Link>
                      </p>
                      <Button color="secondary" className="font-bold mt-6" startContent={<FcGoogle />} size="lg" isDisabled aria-label="Masuk lewat Google">
                        Google
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
                        className="mt-4"
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
                      />
                      <Button color="success" size="lg" className="mt-4 font-medium" type="submit" aria-label="Daftar ke iClean" isLoading={isLoading}>
                        Lanjut
                      </Button>
                      <small className="text-center mt-4">
                        Dengan mendaftar, saya menyetujui{" "}
                        <Link underline="hover" className="text-[0.8rem]">
                          Syarat & Ketentuan
                        </Link>{" "}
                        serta{" "}
                        <Link underline="hover" className="text-[0.8rem]">
                          Kebijakan Privasi iClean.
                        </Link>
                      </small>
                    </>
                  ) : confirmationResult && !isVerified ? (
                    <PinRegister pin={pin} setPin={setPin} phoneNumber={phoneNumber} setConfirmationResult={setConfirmationResult} recaptchaVerifier={recaptchaVerifier as RecaptchaVerifier} />
                  ) : (
                    <>
                      <div className="flex items-center gap-4">
                        <Button
                          isIconOnly
                          aria-label="Kembali"
                          color="secondary"
                          type="button"
                          onClick={() => {
                            setPin("");
                            setIsVerified(false);
                            setConfirmationResult(null);
                          }}
                        >
                          <HiArrowLeft />
                        </Button>
                        <h2 className="text-lg font-bold">Daftar dengan Nomor Telfon</h2>
                      </div>
                      <Input
                        type="tel"
                        label="Nomor Telfon"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="mt-8"
                        size="sm"
                        style={{ color: "black" }}
                        startContent={
                          <div className="flex items-center gap-1 flex-shrink-0">
                            <Image src={Flag} alt="Bendera Indonesia" />
                            <span className="text-sm text-default-400">+62</span>
                          </div>
                        }
                        isDisabled
                      />
                      <Input type="text" label="Nama Lengkap" size="sm" className="mt-4" value={name} onChange={(e) => setName(e.target.value)} style={{ color: "black" }} isInvalid={!!errors.name!!} errorMessage={errors.name} autoFocus />
                      <Input
                        type={hiddenPassword ? "password" : "text"}
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-4"
                        size="sm"
                        endContent={
                          <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                            {hiddenPassword ? <HiOutlineEye className="text-2xl text-default-400 pointer-events-none" /> : <HiOutlineEyeOff className="text-2xl text-default-400 pointer-events-none" />}
                          </button>
                        }
                        style={{ color: "black" }}
                        isInvalid={!!errors.password!!}
                        errorMessage={errors.password}
                      />
                      <Button color="success" size="lg" className="mt-4 font-medium" type="submit" aria-label="Daftar ke iClean" isLoading={isLoading}>
                        Daftar
                      </Button>
                      <small className="text-center mt-4">
                        Dengan mendaftar, saya menyetujui{" "}
                        <Link underline="hover" className="text-[0.8rem]">
                          Syarat & Ketentuan
                        </Link>{" "}
                        serta{" "}
                        <Link underline="hover" className="text-[0.8rem]">
                          Kebijakan Privasi iClean.
                        </Link>
                      </small>
                    </>
                  )}
                  <div id="recaptcha-container" />
                </CardBody>
              </Card>
            </form>
          </div>
        </section>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true} hideCloseButton>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 items-center">+62{phoneNumber}</ModalHeader>
                <ModalBody>
                  <p className="text-center">Pastikan nomor telfon yang kamu isi sudah benar untuk diverifikasi.</p>
                </ModalBody>
                <ModalFooter>
                  <Button color="success" variant="light" onPress={onClose}>
                    Ubah
                  </Button>
                  <Button
                    color="success"
                    aria-label="Lanjutkan daftar"
                    onPress={async () => {
                      onClose();
                      if (!recaptchaVerifier) {
                        return toast.error("Recaptcha belum diinisialisasi");
                      }
                      try {
                        const formattedPhoneNumber = "+62" + phoneNumber;
                        const confirmationResult = await signInWithPhoneNumber(firebaseAuth, formattedPhoneNumber, recaptchaVerifier);
                        setConfirmationResult(confirmationResult);
                        toast.success("OTP telah terkirim");
                      } catch (err: any) {
                        if (err.code === "auth/invalid-phone-number") {
                          toast.error("Format nomor telfon salah");
                        } else if (err.code === "auth/too-many-requests") {
                          toast.error("Terlalu banyak percobaan. Coba lagi nanti");
                        } else {
                          toast.error("Gagal mengirimkan kode OTP");
                        }
                      }
                    }}
                  >
                    Ya, Benar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </main>
    </>
  );
}
