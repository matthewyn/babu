"use client";

import Partner from "/public/partner.svg";
import Document from "/public/document.svg";
import Broom from "/public/broom.svg";
import Website from "/public/website.svg";
import CustomerServiceDocument from "/public/customer-service-document.svg";
import CustomerServiceApproved from "/public/customer-service-approved.svg";
import Checkmark from "/public/checkmark.svg";
import CleanerUniform from "/public/cleaner-uniform.svg";
import CleanerThumbs from "/public/cleaner-thumbs.svg";
import IFlat from "/public/iFlat.svg";
import IOffice from "/public/iOffice.svg";
import IRestaurant from "/public/iRestaurant.svg";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MotionButton } from "@/animate/components";
import { globalVariants } from "@/animate/variants";
import TextReveal from "@/animate/text-reveal";

export default function CaraDaftarIhome() {
  const [swiperOffset, setSwiperOffset] = useState(0);

  function swipeLeft() {
    if (swiperOffset === 0) {
      setSwiperOffset(-1);
      return;
    }
    setSwiperOffset((val) => val + 1);
  }

  function swipeRight() {
    if (swiperOffset === -1) {
      setSwiperOffset(0);
      return;
    }
    setSwiperOffset((val) => val - 1);
  }

  return (
    <>
      <main className="pt-16">
        <section className="bg-ihome bg-cover">
          <motion.div className="max-w-5xl mx-auto py-48 text-white" initial="hidden" whileInView="visible" transition={{ staggerChildren: 0.25 }} viewport={{ once: true }}>
            <motion.h1 variants={globalVariants} className="text-5xl font-bold max-w-3xl">
              Tertarik untuk bergabung menjadi Mitra iClean?
            </motion.h1>
            <motion.p variants={globalVariants} className="max-w-3xl text-xl mt-7">
              Cari tahu persyaratan dan cara mendaftarnya di sini.
            </motion.p>
            <MotionButton variants={globalVariants} color="success" radius="full" className="font-semibold mt-6" as={Link} href="/cleaner/cara-daftar-ihome" aria-label="Daftar menjadi mitra iHome">
              Daftar sekarang
            </MotionButton>
          </motion.div>
        </section>
        <section className="py-20">
          <div className="max-w-5xl mx-auto">
            <motion.h2 variants={globalVariants} className="text-5xl font-bold text-center" initial="hidden" whileInView="visible" viewport={{ once: true }}>
              Persyaratan Mitra iClean
            </motion.h2>
            <motion.article className="grid grid-cols-3 gap-9 mt-14" initial="hidden" whileInView="visible" transition={{ staggerChildren: 0.25 }} viewport={{ once: true }}>
              <motion.div variants={globalVariants}>
                <Image src={Partner} alt="Syarat umur" height={32} className="rounded-md" />
                <h3 className="text-2xl font-semibold mt-4">Mitra</h3>
                <p className="mt-3 text-zinc-500">Warga Negara Indonesia Usia minimal 18 tahun dan maksimal 54 tahun pada saat pendaftaran.</p>
              </motion.div>
              <motion.div variants={globalVariants}>
                <Image src={Document} alt="Syarat dokumen" height={32} className="rounded-md" />
                <h3 className="text-2xl font-semibold mt-4">Dokumen</h3>
                <p className="mt-3 text-zinc-500">Kartu Tanda Penduduk Elektronik Indonesia (e-KTP) sesuai peraturan di wilayah pendaftaran, Foto selfi dengan KTP, Surat berkelakuan baik, Ijazah dan Kartu Keluarga (KK).</p>
              </motion.div>
              <motion.div variants={globalVariants}>
                <Image src={Broom} alt="Syarat alat" height={32} className="rounded-md" />
                <h3 className="text-2xl font-semibold mt-4">Alat</h3>
                <p className="mt-3 text-zinc-500">
                  Setidaknya memiliki sapu dan pengki, pel dan ember, kain lap mikrofiber, sikat toilet, sarung tangan karet serta spons atau sikat kecil. Vacuum cleaner juga diperlukan untuk pekerjaan extra.
                </p>
              </motion.div>
            </motion.article>
            <h2 className="text-5xl font-bold text-center mt-36">Bagaimana langkahnya</h2>
            <article className="grid grid-cols-[repeat(5,14.5rem)] gap-8 mt-24 overflow-hidden relative">
              <Button isIconOnly aria-label="Geser ke kiri" radius="full" className="absolute z-10 top-1/2 -translate-y-1/2 swiper-btn" size="lg" onClick={swipeLeft}>
                <HiChevronLeft />
              </Button>
              <Button isIconOnly aria-label="Geser ke kanan" radius="full" className="absolute z-10 right-0 top-1/2 -translate-y-1/2 swiper-btn" size="lg" onClick={swipeRight}>
                <HiChevronRight />
              </Button>
              <Card className="shadow-none bg-green-medium-tint p-0 rounded-3xl" style={{ transform: `translateX(calc(${swiperOffset}*16.5rem))` }}>
                <CardBody className="p-8 pb-2">
                  <h3 className="font-semibold text-2xl leading-normal">1. Buka situs resmi iClean</h3>
                  <p className="leading-relaxed">Kandidat membuka situs resmi icleanservice.com/cleaner/cara-daftar-ihome.</p>
                </CardBody>
                <CardFooter className="p-0">
                  <Image src={Website} alt="Illustrasi website" className="h-44 w-auto translate-y-3" />
                </CardFooter>
              </Card>
              <Card className="shadow-none bg-pink-tint p-0 rounded-3xl" style={{ transform: `translateX(calc(${swiperOffset}*16.5rem))` }}>
                <CardBody className="p-8 pb-2">
                  <h3 className="font-semibold text-2xl leading-normal">2. Registrasi data lengkap</h3>
                  <p className="leading-relaxed">Kandidat mendaftar dengan memasukkan data diri beserta dokumen lengkap melalui formulir online.</p>
                </CardBody>
                <CardFooter className="p-0 flex justify-end">
                  <Image src={CustomerServiceDocument} alt="Customer service sedang melayani customer" className="h-44 w-auto translate-y-4" />
                </CardFooter>
              </Card>
              <Card className="shadow-none bg-blue-tint p-0 rounded-3xl" style={{ transform: `translateX(calc(${swiperOffset}*16.5rem))` }}>
                <CardBody className="p-8 pb-2">
                  <h3 className="font-semibold text-2xl leading-normal">3. Verifikasi Data</h3>
                  <p className="leading-relaxed">Apabila data lolos verifikasi, kandidat akan menerima pemberitahuan untuk langkah selanjutnya. Apabila terdapat data yang kurang tepat, kandidat akan menerima pemberitahuan melalui SMS.</p>
                </CardBody>
                <CardFooter className="p-0 flex justify-center">
                  <Image src={CustomerServiceApproved} alt="Customer service memverifikasi dokumen" className="h-52 w-auto translate-y-8" />
                </CardFooter>
              </Card>
              <Card className="shadow-none bg-purple-tint p-0 rounded-3xl" style={{ transform: `translateX(calc(${swiperOffset}*16.5rem))` }}>
                <CardBody className="p-8 pb-2">
                  <h3 className="font-semibold text-2xl leading-normal">4. Uji Kompetensi & Training</h3>
                  <p className="leading-relaxed">Pelaksanaan uji kompetensi, training, dan on boarding.</p>
                </CardBody>
                <CardFooter className="p-0 flex justify-center">
                  <Image src={Checkmark} alt="Training yang dilakukan untuk mitra iHome" className="h-48 w-auto translate-y-8" />
                </CardFooter>
              </Card>
              <Card className="shadow-none bg-orange-tint p-0 rounded-3xl" style={{ transform: `translateX(calc(${swiperOffset}*16.5rem))` }}>
                <CardBody className="p-8 pb-2">
                  <h3 className="font-semibold text-2xl leading-normal">5. Aktivasi Akun</h3>
                  <p className="leading-relaxed">Setelah lolos verifikasi, ikuti langkah aktivasi yang diberikan melalui SMS. Setelah itu, anda akan menjadi mitra resmi iHome.</p>
                </CardBody>
                <CardFooter className="p-0 flex justify-center">
                  <Image src={CleanerUniform} alt="Seragam dari cleaners" className="h-72 w-auto translate-y-24" />
                </CardFooter>
              </Card>
            </article>
            <div className="flex gap-28 items-center mt-28">
              <Image src={CleanerThumbs} alt="Ayo bergabung dengan Kami" className="-z-10" />
              <div>
                <h3 className="text-4xl font-bold">Jadi Mitra iClean?</h3>
                <Button color="success" radius="full" className="font-semibold mt-6" aria-label="Daftarkan diri menjadi mitra iClean">
                  Lanjutkan
                </Button>
              </div>
            </div>
          </div>
          <article className="bg-beige-shade py-16 rounded-t-[3.5rem] -mt-5">
            <div className="max-w-5xl mx-auto">
              <TextReveal text="Ingin bergabung di layanan lain?" classes="text-4xl font-bold" margin="-80px" />
              <motion.div className="grid grid-cols-3 pt-20 pl-6 gap-10" initial="hidden" whileInView="visible" transition={{ staggerChildren: 0.25 }} viewport={{ once: true, margin: "-80px" }}>
                <motion.div className="flex flex-col gap-4" variants={globalVariants}>
                  <Image src={IFlat} alt="Layanan iFlat" />
                  <p className="text-lg">Bersihkan kost untuk hunian yang segar dan nyaman.</p>
                  <div className="mt-auto">
                    <Button as={Link} href="/cleaner/cara-daftar-cleaner" color="success" radius="full" className="font-semibold" aria-label="Lihat lebih lanjut mengenai layanan iFlat">
                      Lihat
                    </Button>
                  </div>
                </motion.div>
                <motion.div className="flex flex-col gap-4" variants={globalVariants}>
                  <Image src={IOffice} alt="Layanan iOffice" />
                  <p className="text-lg">Rawat kantor agar tetap rapi.</p>
                  <div className="mt-auto">
                    <Button as={Link} href="/cleaner/cara-daftar-cleaner" color="success" radius="full" className="font-semibold" aria-label="Lihat lebih lanjut mengenai layanan iOffice">
                      Lihat
                    </Button>
                  </div>
                </motion.div>
                <motion.div className="flex flex-col gap-4" variants={globalVariants}>
                  <Image src={IRestaurant} alt="Layanan iRestaurant" />
                  <p className="text-lg">Pastikan restoran tetap bersih berkilau.</p>
                  <div className="mt-auto">
                    <Button as={Link} href="/cleaner/cara-daftar-cleaner" color="success" radius="full" className="font-semibold" aria-label="Lihat lebih lanjut mengenai layanan iRestaurant">
                      Lihat
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
