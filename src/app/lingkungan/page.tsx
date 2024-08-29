"use client";

import Safety from "/public/safety.svg";
import CustomArrow from "@/components/custom-arrow";
import { playpen } from "../fonts/fonts";
import { RiFlowerFill } from "react-icons/ri";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { FaRecycle } from "react-icons/fa";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { globalVariants, opacityVariants } from "@/animate/variants";
import TextUnderlined from "@/animate/text-underlined";
import TextBrush from "@/animate/text-brush";
import TextBurst from "@/animate/text-burst";
import TextWavy from "@/animate/text-wavy";
import { motion } from "framer-motion";
import { Card, CardBody, Link } from "@nextui-org/react";
import Image from "next/image";

export default function Lingkungan() {
  return (
    <>
      <main className="pt-16">
        <section className="bg-beige-shade h-[calc(100vh_-_64px)] relative overflow-y-scroll scrollbar-hide">
          <motion.div className="text-center mx-auto max-w-3xl" initial="hidden" whileInView="visible">
            <div className="h-[calc(100vh_-_64px)] flex items-center">
              <motion.h1 className="text-6xl" variants={opacityVariants}>
                <span className="text-3xl font-medium">Babu 2030</span>
                <br />
                <span className="mt-10 inline-block font-semibold">
                  Rencana yang
                  <TextUnderlined text="sehijau" />
                  layanan kami.
                </span>
              </motion.h1>
            </div>
            <article className="px-32 mt-52 pb-52 font-medium text-2xl">
              <motion.p variants={globalVariants} viewport={{ margin: "-120px" }}>
                Kami menetapkan target ambisius untuk mencapai nol
                <TextUnderlined text="emisi karbon" />
                dalam operasi kami pada tahun 2030.
              </motion.p>
              <motion.p className="mt-6" variants={globalVariants} viewport={{ margin: "-120px" }}>
                Dengan berkomitmen melindungi Bumi. Perusahaan kami memprioritaskan perlindungan terhadap
                <TextUnderlined text="lingkungan" />
                dalam setiap aspek operasional.
              </motion.p>
              <motion.p className="mt-6" variants={globalVariants} viewport={{ margin: "-120px" }}>
                Sebagai bagian dari komitmen kami terhadap keberlanjutan, kami berjanji untuk selalu
                <TextUnderlined text="transparan" />
                tentang upaya kami dalam melindungi lingkungan.
              </motion.p>
            </article>
          </motion.div>
        </section>
        <section className="py-36">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-semibold text-center leading-tight">
              Dirancang untuk mengurangi konsumsi energi. Tanpa mengorbankan <TextUnderlined text="kualitas" />
              layanan.
            </h2>
            <article className="mt-20 grid grid-cols-2 gap-16">
              <div>
                <small className={`flex items-center ${playpen.className} uppercase font-extrabold gap-2`}>
                  <CustomArrow />
                  Pendekatan Kami
                </small>
                <p className="mt-4 font-medium">
                  Kami mengurangi penggunaan air dan sumber daya lainnya dalam proses pembersihan, tanpa mengurangi efektivitas pembersihan itu sendiri. Kami juga berfokus pada efisiensi energi dalam setiap operasi kami.
                </p>
              </div>
              <div>
                <small className={`flex items-center ${playpen.className} uppercase font-extrabold gap-2`}>
                  <CustomArrow />
                  Kemajuan Kami
                </small>
                <p className="mt-4 font-medium">Kami mencatat penurunan penggunaan energi hingga 20% dan pengurangan penggunaan air hingga 25% di seluruh operasi kami.</p>
              </div>
            </article>
          </div>
        </section>
        <section>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-semibold">
              Angka
              <TextBrush text="kemajuan kami" />.
            </h2>
            <article className="grid grid-cols-3 mt-12 gap-4">
              <Card className="shadow-none bg-beige-shade p-4">
                <CardBody>
                  <RiFlowerFill size={32} color={`var(--green-special)`} />
                  <p className="text-xl font-medium mt-4">
                    Kami memperkenalkan jajaran 18 <TextUnderlined text="produk pilihan organik" />
                    kami.<sup className="underline">1</sup>
                  </p>
                </CardBody>
              </Card>
              <Card className="shadow-none bg-beige-shade p-4">
                <CardBody>
                  <MdEnergySavingsLeaf size={32} color={`var(--green-special)`} />
                  <p className="text-xl font-medium mt-4">
                    <TextUnderlined text="Pengurangan konsumsi energi hingga 20%" />
                    melalui penggunaan teknologi pembersihan yang lebih efisien kami.<sup className="underline">2</sup>
                  </p>
                </CardBody>
              </Card>
              <Card className="shadow-none bg-beige-shade p-4">
                <CardBody>
                  <FaRecycle size={32} color={`var(--green-special)`} />
                  <p className="text-xl font-medium mt-4">
                    <TextUnderlined text="Menghemat lebih dari 15.000 liter air" />
                    setiap bulan melalui sistem daur ulang air.<sup className="underline">3</sup>
                  </p>
                </CardBody>
              </Card>
            </article>
          </div>
        </section>
        <section className="py-36">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-semibold">
              <TextBurst text="Buktinya" />
              ada di produk kami.
            </h2>
            <p className="font-medium text-xl mt-6 max-w-2xl">
              Semua produk yang kami gunakan telah dilengkapi dengan fitur food contact, food grade, dan phosphat free. Kami juga memastikan bahwa tidak ada bahan berbahaya (B3) yang digunakan dalam produk kami, sehingga aman bagi kesehatan
              dan lingkungan.
            </p>
            <Image src={Safety} alt="Berbagai sertifikasi dari berbagai lini produk Kami" className="mt-6" />
          </div>
        </section>
        <section className="bg-beige-shade py-36">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-semibold">
              Lakukan sesuatu yang membanggakan bagi
              <TextWavy text="Lingkungan" />.
            </h2>
            <p className="font-medium text-xl mt-6 max-w-2xl">Ada banyak tindakan kecil yang bisa Anda lakukan untuk menjaga kebersihan dan kesehatan lingkungan kita.</p>
            <Card className="shadow-none p-14 mt-16">
              <CardBody className="text-center max-w-lg mx-auto">
                <BsGlobeAsiaAustralia className="mx-auto" color={`var(--green-special)`} size={52} />
                <h3 className="text-4xl font-semibold mt-6">
                  <TextUnderlined text="Dapatkan" />
                  tips pembersihan organik secara gratis.
                </h3>
                <p className="text-xl mt-4">Baik untuk Anda dan Perusahaan.</p>
                <Link href="/tips" className="mt-4 text-lg mx-auto" showAnchorIcon isExternal>
                  Selengkapnya tentang tips dari Babu
                </Link>
              </CardBody>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}
