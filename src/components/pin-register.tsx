"use client";

import { firebaseAuth } from "@/firebase";
import { ConfirmationResult, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { HiArrowLeft, HiOutlineEnvelope } from "react-icons/hi2";
import toast from "react-hot-toast";
import { Button, Input, Link } from "@nextui-org/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface PinRegisterProps {
  pin: string;
  setPin: Dispatch<SetStateAction<string>>;
  phoneNumber: string;
  setConfirmationResult: Dispatch<SetStateAction<ConfirmationResult | null>>;
  recaptchaVerifier: RecaptchaVerifier;
}

export default function PinRegister({ pin, setPin, phoneNumber, setConfirmationResult, recaptchaVerifier }: PinRegisterProps) {
  const [waitingTime, setWaitingTime] = useState(30);

  useEffect(
    function () {
      let tick: NodeJS.Timeout;
      if (waitingTime > 0) {
        tick = setTimeout(() => setWaitingTime(waitingTime - 1), 1000);
      }
      return () => clearTimeout(tick);
    },
    [waitingTime]
  );

  return (
    <>
      <Button
        isIconOnly
        aria-label="Kembali"
        color="secondary"
        type="button"
        onClick={() => {
          setPin("");
          setConfirmationResult(null);
        }}
      >
        <HiArrowLeft />
      </Button>
      <div className="text-center">
        <HiOutlineEnvelope color="var(--green-special)" size={40} className="mx-auto mt-8" />
        <h2 className="font-bold text-lg mt-4">Masukkan Kode Verifikasi</h2>
        <p className="text-sm mt-2">Kode verifikasi telah dikirim melalui e-mail ke +62{phoneNumber}.</p>
        <Input
          type="number"
          style={{ color: "black" }}
          variant="underlined"
          color="success"
          size="lg"
          classNames={{ input: ["text-3xl", "font-bold", "text-center", "tracking-[0.375em]"] }}
          className="mt-8"
          onChange={(e) => setPin(e.target.value)}
          value={pin}
        />
        {waitingTime > 0 ? (
          <p className="text-sm mt-6">
            Mohon tunggu dalam <strong>{waitingTime} detik</strong> untuk kirim ulang
          </p>
        ) : (
          <p className="text-sm mt-6">
            Tidak menerima kode?{" "}
            <Link
              className="text-sm cursor-pointer"
              aria-label="Kirim ulang kode OTP"
              onClick={async () => {
                try {
                  const formattedPhoneNumber = "+62" + phoneNumber;
                  const confirmationResult = await signInWithPhoneNumber(firebaseAuth, formattedPhoneNumber, recaptchaVerifier);
                  setConfirmationResult(confirmationResult);
                  setWaitingTime(30);
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
              Kirim ulang
            </Link>
          </p>
        )}
      </div>
    </>
  );
}
