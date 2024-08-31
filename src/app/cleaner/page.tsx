"use client";

import IHome from "/public/iHome.svg";
import IFlat from "/public/iFlat.svg";
import IOffice from "/public/iOffice.svg";
import IRestaurant from "/public/iRestaurant.svg";
import CleanerIllustration from "/public/cleaner-illustration.svg";
import MoneyIllustration from "/public/money-illustration.svg";
import HealthInsurance from "/public/health-insurance.svg";
import MentorshipIllustration from "/public/mentorship-illustration.svg";
import { motion } from "framer-motion";
import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { globalVariants } from "@/animate/variants";
import TextReveal from "@/animate/text-reveal";

export default function Cleaner() {
  return (
    <>
      <main className="pt-16">
        <section className="bg-cleaner-single bg-cover">
          <motion.div className="max-w-5xl mx-auto py-48 text-white" initial="hidden" whileInView="visible" transition={{ staggerChildren: 0.25 }} viewport={{ once: true }}>
            <motion.h1 variants={globalVariants} className="text-5xl font-bold max-w-3xl">
              Bantu Ribuan Rumah Bersinar Lebih Terang dengan Keahlian Anda!
            </motion.h1>
            <motion.p variants={globalVariants} className="max-w-3xl text-xl mt-8">
              Ratusan petugas kebersihan telah mengubah hidup mereka dengan bergabung bersama kami.
            </motion.p>
          </motion.div>
          <article className="bg-beige-shade py-16 rounded-t-[3.5rem]">
            <div className="max-w-5xl mx-auto">
              <TextReveal text="Ingin tahu lebih lanjut?" classes="text-4xl font-bold" />
              <motion.div className="grid grid-cols-4 pt-20 pl-6 gap-10" initial="hidden" whileInView="visible" transition={{ staggerChildren: 0.25 }} viewport={{ once: true }}>
                <motion.div className="flex flex-col gap-4" variants={globalVariants}>
                  <Image src={IHome} alt="Layanan iHome" />
                  <p className="text-lg">Jaga rumah tetap bersih dan nyaman.</p>
                  <div className="mt-auto">
                    <Button color="success" radius="full" className="font-semibold" as={Link} href="/cleaner/cara-daftar-cleaner" aria-label="Lihat lebih lanjut mengenai layanan iHome">
                      Lihat
                    </Button>
                  </div>
                </motion.div>
                <motion.div className="flex flex-col gap-4" variants={globalVariants}>
                  <Image src={IFlat} alt="Layanan iFlat" />
                  <p className="text-lg">Bersihkan kost untuk hunian yang segar dan nyaman.</p>
                  <div className="mt-auto">
                    <Button color="success" radius="full" className="font-semibold" aria-label="Lihat lebih lanjut mengenai layanan iFlat" as={Link} href="/cleaner/cara-daftar-cleaner">
                      Lihat
                    </Button>
                  </div>
                </motion.div>
                <motion.div className="flex flex-col gap-4" variants={globalVariants}>
                  <Image src={IOffice} alt="Layanan iOffice" />
                  <p className="text-lg">Rawat kantor agar tetap rapi.</p>
                  <div className="mt-auto">
                    <Button color="success" radius="full" className="font-semibold" aria-label="Lihat lebih lanjut mengenai layanan iOffice" as={Link} href="/cleaner/cara-daftar-cleaner">
                      Lihat
                    </Button>
                  </div>
                </motion.div>
                <motion.div className="flex flex-col gap-4" variants={globalVariants}>
                  <Image src={IRestaurant} alt="Layanan iRestaurant" />
                  <p className="text-lg">Pastikan restoran tetap bersih berkilau.</p>
                  <div className="mt-auto">
                    <Button color="success" radius="full" className="font-semibold" aria-label="Lihat lebih lanjut mengenai layanan iRestaurant" as={Link} href="/cleaner/cara-daftar-cleaner">
                      Lihat
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </article>
        </section>
        <section className="py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center">Kenapa iClean?</h2>
            <p className="text-lg text-center mt-10">Kami memberi Anda banyak manfaat!</p>
            <article className="grid grid-cols-4 gap-8 mt-24">
              <Card className="shadow-none bg-green-medium-tint p-0 rounded-3xl">
                <CardBody className="p-8">
                  <h3 className="font-semibold text-2xl leading-normal">Ratusan mitra</h3>
                  <p className="leading-relaxed">Kami adalah penyedia layanan kebersihan terdepan di Semarang, dengan ratusan mitra kebersihan.</p>
                </CardBody>
                <CardFooter className="p-0">
                  <Image src={CleanerIllustration} alt="Illustrasi cleaner" className="h-40 w-auto" />
                </CardFooter>
              </Card>
              <Card className="shadow-none bg-orange-tint p-0 rounded-3xl">
                <CardBody className="p-8">
                  <h3 className="font-semibold text-2xl leading-normal">Kebijakan pendapatan di muka</h3>
                  <p className="leading-relaxed">Antisipasi pengeluaran tak terduga Anda tanpa repot.</p>
                </CardBody>
                <CardFooter className="p-0">
                  <Image src={MoneyIllustration} alt="Illustrasi uang" className="h-40 w-auto" />
                </CardFooter>
              </Card>
              <Card className="shadow-none bg-pink-tint p-0 rounded-3xl">
                <CardBody className="p-8">
                  <h3 className="font-semibold text-2xl leading-normal">Asuransi kesehatan</h3>
                  <p className="leading-relaxed">Anda berkesempatan mendapatkan perlindungan asuransi kesehatan dengan premi yang terjangkau.</p>
                </CardBody>
                <CardFooter className="p-0 flex justify-center translate-y-8">
                  <Image src={HealthInsurance} alt="Illustrasi asuransi kesehatan" className="h-52 w-auto" />
                </CardFooter>
              </Card>
              <Card className="shadow-none bg-purple-tint p-0 rounded-3xl">
                <CardBody className="p-8">
                  <h3 className="font-semibold text-2xl leading-normal">Pelatihan gratis</h3>
                  <p className="leading-relaxed">Dapatkan akses ke pelatihan gratis eksklusif yang akan membantu Anda meraih kesuksesan.</p>
                </CardBody>
                <CardFooter className="p-0 flex justify-end">
                  <Image src={MentorshipIllustration} alt="Illustrasi mentorship" className="h-52 w-auto" />
                </CardFooter>
              </Card>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
