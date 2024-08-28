import Flag from "/public/flag.png";
import Cleaner from "/public/cleaner.jpg";
import { AcmeLogo } from "./logo";
import Ribbons from "./ribbons";
import { barlow } from "@/app/fonts/fonts";
import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import Image from "next/image";

export default function Advertise() {
  return (
    <Modal defaultOpen className={`${barlow.className}`} size="3xl" isDismissable={false} isKeyboardDismissDisabled={true} aria-label="Daftarkan dirimu agar mendapatkan diskon untuk pembelian pertama">
      <ModalContent>
        {(onClose) => (
          <section className="grid grid-cols-[auto_1fr]">
            <div className="relative">
              <Image src={Cleaner} alt="Cleaner" quality={80} height={500} />
              <Ribbons width={500} />
            </div>
            <article>
              <ModalHeader className="flex flex-col items-center">
                <AcmeLogo />
              </ModalHeader>
              <ModalBody className="text-center">
                <h2 className="uppercase text-3xl text-green-extra-shade font-black">Diskon 30% Untuk Pembelian Pertama</h2>
                <Input type="email" label="Email (wajib)" className="mt-4" />
                <Input type="text" label="Nomor Telfon" startContent={<Image src={Flag} alt="Bendera Indonesia" quality={80} />} />
                <Button color="success" size="lg" className="uppercase font-semibold">
                  Tukarkan
                </Button>
                <small className="mt-3">Dengan berlangganan, Anda setuju untuk menerima pesan pemasaran otomatis berulang di email ini. </small>
              </ModalBody>
            </article>
          </section>
        )}
      </ModalContent>
    </Modal>
  );
}
