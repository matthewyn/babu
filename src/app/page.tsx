"use client";

import Image from "next/image";
import HeroBannerCloseUp from "/public/hero-banner-closeup.jpg";
import HeroBannerDesk from "/public/hero-banner-desk.jpg";
import HeroBannerRefrigerator from "/public/hero-banner-refrigerator.jpg";
import HeroBannerToilet from "/public/hero-banner-toilet.jpg";
import Sparkles from "/public/sparkles.png";
import Droplet from "/public/droplet.png";
import ShieldCheck from "/public/shield-check.png";
import Leaf from "/public/leaf.webp";
import LeafSingle from "/public/leaf-single.webp";
import RcpZen07 from "/public/rcp-zen-07.png";
import RcpZen11 from "/public/rcp-zen-11.png";
import RcpZen17 from "/public/rcp-zen-17.png";
import Glassdoor from "/public/glassdoor.png";
import Firefox from "/public/firefox.png";
import { BsCheck, BsExclamationCircle } from "react-icons/bs";
import { HiHandThumbUp } from "react-icons/hi2";
import { Button } from "@nextui-org/button";
import { Tabs, Tab, Card, CardHeader, Divider, CardBody, Chip, Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";
import Ratings from "@/components/ratings";
import Advertise from "@/components/advertise";
import { globalVariants } from "@/animate/variants";
import { MotionCard, MotionImage } from "@/animate/components";
import React, { useState } from "react";

const imageSize = 400;

export default function Home() {
  const [selected, setSelected] = useState("zen-07");
  const selectedRcp = selected === "zen-07" ? RcpZen07 : selected === "zen-11" ? RcpZen11 : RcpZen17;

  return (
    <>
      <main className="pt-16">
        <section className="relative py-20">
          <Image src={Leaf} alt="Tanaman" quality={80} className="absolute left-0 rotate-180 -translate-x-3" priority />
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" animate="visible">
            <motion.div variants={globalVariants}>
              <Ratings rating={5} color="orange" size={20} />
            </motion.div>
            <motion.h1 className="text-5xl font-semibold mt-4" variants={globalVariants}>
              General cleaning solution
              <br />
              for you
            </motion.h1>
            <motion.p className="mt-4 max-w-lg mx-auto" variants={globalVariants}>
              Penyedia jasa cleaning service, jasa bersih-bersih kost, rumah, villa, restoran, apartemen dan kantor.
            </motion.p>
            <motion.div className="mt-8" variants={globalVariants}>
              <Button variant="bordered" size="lg">
                Tonton Demo
              </Button>
              <Button color="success" className="ml-4" size="lg">
                Telusuri Produk
              </Button>
            </motion.div>
            <div className={`flex w-full flex-col items-center mt-12 bg-beige-shade pt-6 px-10 rounded-xl tabs-main`} style={{ minHeight: 92 + imageSize }}>
              <Tabs aria-label="Options" className="mb-4" classNames={{ tabContent: "group-data-[selected=true]:text-white" }}>
                <Tab key="kost" title="Kost" className="pb-0">
                  <Card className="rounded-b-none bg-inherit shadow-none">
                    <MotionImage src={HeroBannerCloseUp} alt="Kost" quality={80} height={imageSize} className="rounded-large rounded-b-none" variants={globalVariants} />
                  </Card>
                </Tab>
                <Tab key="rumah" title="Rumah" className="pb-0">
                  <Card className="rounded-b-none bg-inherit shadow-none">
                    <Image src={HeroBannerRefrigerator} alt="Rumah" quality={80} height={imageSize} className="rounded-large rounded-b-none" />
                  </Card>
                </Tab>
                <Tab key="kantor" title="Kantor" className="pb-0">
                  <Card className="rounded-b-none bg-inherit shadow-none">
                    <Image src={HeroBannerDesk} alt="Kantor" quality={80} height={imageSize} className="rounded-large rounded-b-none" />
                  </Card>
                </Tab>
                <Tab key="restoran" title="Restoran" className="pb-0">
                  <Card className="rounded-b-none bg-inherit shadow-none">
                    <Image src={HeroBannerToilet} alt="Restoran" quality={80} height={imageSize} className="rounded-large rounded-b-none" />
                  </Card>
                </Tab>
              </Tabs>
            </div>
          </motion.div>
        </section>
        <section className="py-20">
          <motion.div className="max-w-3xl mx-auto" initial="hidden" whileInView="visible">
            <motion.h2 className="text-center text-4xl" variants={globalVariants} viewport={{ once: true, margin: "-80px" }}>
              Dipercaya oleh ribuan agensi dan perusahaan konsultan
            </motion.h2>
            <motion.div className="grid grid-cols-2 mt-8" variants={globalVariants} viewport={{ once: true, margin: "-80px" }}>
              <div className="flex gap-12 border-r items-center">
                <div className="flex flex-col items-center gap-2">
                  <div>
                    <Ratings rating={5} color="green" size={24} />
                  </div>
                  <p className="text-sm flex items-center gap-2">
                    <Image src={Glassdoor} alt="Logo glassdoor" quality={80} height={16} />
                    4.8/5 di Glassdoor
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div>
                    <Ratings rating={5} color="green" size={24} />
                  </div>
                  <p className="text-sm flex items-center gap-2">
                    <Image src={Firefox} alt="Logo firefox" quality={80} height={16} />
                    5/5 di Firefox
                  </p>
                </div>
              </div>
              <p className="pl-16">Perusahaan jasa profesional yang sukses memakai jasa kami untuk merawat fasilitas mereka.</p>
            </motion.div>
          </motion.div>
        </section>
        <motion.section className="bg-beige-shade py-20 relative" initial="hidden" whileInView="visible">
          <Image src={LeafSingle} alt="Daun jatuh" quality={80} height={200} className="absolute -top-8 right-10 rotate-90" />
          <motion.div className="max-w-5xl mx-auto bg-white rounded-3xl p-10" variants={globalVariants} viewport={{ once: true }}>
            <h2 className="rounded-full border border-gray-300 inline-block uppercase px-4 py-2 text-sm font-semibold">Kenapa Memilih Kami</h2>
            <article className="grid grid-cols-3 mt-14 gap-10">
              <div>
                <Image src={Sparkles} alt="Pembersihan mendetail" quality={80} />
                <h3 className="font-semibold text-lg mt-6">Pembersihan mendetail & menyeluruh</h3>
                <p className="mt-6 text-sm">Pembersihan tidak hanya terbatas pada permukaan yang terlihat, tetapi juga bagian yang sering terlupakan seperti di belakang perabot, sudut-sudut ruangan, dan area tersembunyi lainnya.</p>
              </div>
              <div>
                <Image src={ShieldCheck} alt="Menghilangkan kerak membandel" quality={80} />
                <h3 className="font-semibold text-lg mt-6">Bisa menghilangkan kerak membandel</h3>
                <p className="text-sm mt-6">Kami menyediakan jasa pembersihan ruangan profesional yang dapat mengatasi kerak membandel di berbagai permukaan.</p>
              </div>
              <div>
                <Image src={Droplet} alt="Alat kebersihan organik" quality={80} />
                <h3 className="font-semibold text-lg mt-6">Menggunakan alat kebersihan organik</h3>
                <p className="mt-6 text-sm">Kami menawarkan jasa pembersihan ruangan untuk rumah, hotel, restoran, dan kantor dengan menggunakan produk pembersih organik yang ramah lingkungan.</p>
              </div>
            </article>
          </motion.div>
          <motion.div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 mt-20 relative" variants={globalVariants} viewport={{ once: true }}>
            <Image src={LeafSingle} alt="Daun jatuh" quality={80} height={200} className="absolute -left-16 -top-16 rotate-180" />
            <h2 className="rounded-full border border-gray-300 inline-block uppercase px-4 py-2 text-sm font-semibold">Produk Terbaik Kami</h2>
            <div className="flex mt-6 justify-between">
              <div>
                <h2 className="text-4xl">Dapatkan produk kebersihan premium</h2>
                <p className="mt-5">Semua yang kamu butuhkan untuk solusi kebersihan dengan bahan organik dan ramah lingkungan.</p>
              </div>
              <Button size="lg">Telusuri</Button>
            </div>
            <article className="flex w-full flex-col mt-8">
              <Tabs
                aria-label="Options"
                color="primary"
                variant="underlined"
                classNames={{
                  tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                  cursor: "w-full bg-green-shade",
                  tab: "max-w-fit px-0 h-12",
                  tabContent: "group-data-[selected=true]:text-green-shade",
                }}
                selectedKey={selected}
                onSelectionChange={(key) => setSelected(key as string)}
              >
                <Tab
                  key="zen-07"
                  title={
                    <div className="flex items-center space-x-2">
                      <span className="text-medium">RCP Zen 07</span>
                    </div>
                  }
                  onMouseOver={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setSelected("zen-07")}
                />
                <Tab
                  key="zen-11"
                  title={
                    <div className="flex items-center space-x-2">
                      <span className="text-medium">RCP Zen 11</span>
                    </div>
                  }
                  onMouseOver={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setSelected("zen-11")}
                />
                <Tab
                  key="zen-17"
                  title={
                    <div className="flex items-center space-x-2">
                      <span className="text-medium">RCP Zen 17</span>
                    </div>
                  }
                  onMouseOver={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setSelected("zen-17")}
                />
              </Tabs>
              <div className="bg-building-architecture rounded-2xl mt-8 bg-cover flex justify-center items-end pt-20">
                <Image src={selectedRcp} alt={`Rcp ${selected.replace("-", " ")}`} quality={80} height={300} />
              </div>
            </article>
          </motion.div>
        </motion.section>
        <section className="py-20">
          <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="visible">
            <motion.h2 className="text-4xl text-center" variants={globalVariants} viewport={{ once: true, margin: "-80px" }}>
              Pilih layanan yang sesuai
            </motion.h2>
            <div className="flex w-full flex-col items-center tabs-main mt-6">
              <Tabs aria-label="Options" className="mb-4" size="lg" classNames={{ tabContent: "group-data-[selected=true]:text-white" }}>
                <Tab key="general-cleaning" title="General cleaning">
                  <article className="grid grid-cols-4 gap-5">
                    <Card className="hover:scale-105 cursor-pointer">
                      <CardHeader className="flex flex-col gap-4 pb-8 text-center">
                        <Tooltip showArrow={true} content="Dikenakan biaya penambahan waktu sebanyak Rp 95.000 /jam">
                          <div className="self-end">
                            <BsExclamationCircle size={20} />
                          </div>
                        </Tooltip>
                        <p className="text-xl">Kost</p>
                        <div>
                          <p>
                            Rp <span className="text-2xl font-semibold">165.000</span>
                            <span className="text-zinc-500"> /cleaner</span>
                          </p>
                          <p>
                            + Rp <span className="font-semibold">155.000</span>
                            <span className="text-zinc-500"> /extra cleaners</span>
                          </p>
                        </div>
                        <Button color="success">Pesan sekarang</Button>
                      </CardHeader>
                      <Divider />
                      <CardBody className="pt-8">
                        <ul className="flex flex-col gap-3">
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />1 Ruangan
                          </li>
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            Termasuk Taman
                          </li>
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            Dapur
                          </li>
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            Mencuci Perabot
                          </li>
                        </ul>
                      </CardBody>
                    </Card>
                    <Card className="hover:scale-105 cursor-pointer">
                      <CardHeader className="flex flex-col gap-4 pb-8 text-center">
                        <Tooltip showArrow={true} content="Dikenakan biaya penambahan waktu sebanyak Rp 110.000 /jam">
                          <div className="self-end">
                            <BsExclamationCircle size={20} />
                          </div>
                        </Tooltip>
                        <p className="text-xl">Kost</p>
                        <div>
                          <p>
                            Rp <span className="text-2xl font-semibold">195.000</span>
                            <span className="text-zinc-500"> /cleaner</span>
                          </p>
                          <p>
                            + Rp <span className="font-semibold">155.000</span>
                            <span className="text-zinc-500"> /extra cleaners</span>
                          </p>
                        </div>
                        <Button color="success">Pesan sekarang</Button>
                      </CardHeader>
                      <Divider />
                      <CardBody className="pt-8">
                        <ul className="flex flex-col gap-3">
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />1 Ruangan
                          </li>
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            Termasuk Taman
                          </li>
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            Dapur
                          </li>
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            Mencuci Perabot
                          </li>
                        </ul>
                      </CardBody>
                    </Card>
                    <Card className="hover:scale-105 cursor-pointer">
                      <CardHeader className="flex flex-col gap-4 pb-8 text-center">
                        <Tooltip showArrow={true} content="Dikenakan biaya penambahan waktu sebanyak Rp 140.000 /jam">
                          <div className="self-end">
                            <BsExclamationCircle size={20} />
                          </div>
                        </Tooltip>
                        <p className="text-xl">Kost</p>
                        <div>
                          <p>
                            Rp <span className="text-2xl font-semibold">225.000</span>
                            <span className="text-zinc-500"> /cleaner</span>
                          </p>
                          <p>
                            + Rp <span className="font-semibold">155.000</span>
                            <span className="text-zinc-500"> /extra cleaners</span>
                          </p>
                        </div>
                        <Button color="success">Pesan sekarang</Button>
                      </CardHeader>
                      <Divider />
                      <CardBody className="pt-8">
                        <ul className="flex flex-col gap-3">
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            <span className="bg-green-extra-tint">1 Ruangan</span>
                          </li>
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            Termasuk Taman
                          </li>
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            Dapur
                          </li>
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            Mencuci Perabot
                          </li>
                        </ul>
                      </CardBody>
                    </Card>
                    <Card className="hover:scale-105 cursor-pointer">
                      <CardHeader className="flex flex-col gap-4 pb-8 text-center">
                        <Tooltip showArrow={true} content="Dikenakan biaya penambahan waktu sebanyak Rp 140.000 /jam">
                          <div className="self-end">
                            <BsExclamationCircle size={20} />
                          </div>
                        </Tooltip>
                        <p className="text-xl">Kost</p>
                        <div>
                          <p>
                            Rp <span className="text-2xl font-semibold">225.000</span>
                            <span className="text-zinc-500"> /cleaner</span>
                          </p>
                          <p>
                            + Rp <span className="font-semibold">155.000</span>
                            <span className="text-zinc-500"> /extra cleaners</span>
                          </p>
                        </div>
                        <Button color="success">Pesan sekarang</Button>
                      </CardHeader>
                      <Divider />
                      <CardBody className="pt-8">
                        <ul className="flex flex-col gap-3">
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            <span className="bg-green-extra-tint">1 Ruangan</span>
                          </li>
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            Termasuk Taman
                          </li>
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            Dapur
                          </li>
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            Mencuci Perabot
                          </li>
                        </ul>
                      </CardBody>
                    </Card>
                  </article>
                </Tab>
                <Tab
                  key="deep-cleaning"
                  title={
                    <div className="flex gap-2">
                      <span>Deep cleaning</span>
                      <Chip color="success" size="sm">
                        <HiHandThumbUp />
                      </Chip>
                    </div>
                  }
                >
                  <article className="grid grid-cols-4 gap-5">
                    <Card className="hover:scale-105 cursor-pointer">
                      <CardHeader className="flex flex-col gap-4 pb-8 text-center">
                        <Tooltip showArrow={true} content="Dikenakan biaya penambahan waktu sebanyak Rp 125.000 /jam">
                          <div className="self-end">
                            <BsExclamationCircle size={20} />
                          </div>
                        </Tooltip>
                        <p className="text-xl">Kost</p>
                        <div>
                          <p>
                            Rp <span className="text-2xl font-semibold">245.000</span>
                            <span className="text-zinc-500"> /cleaner</span>
                          </p>
                          <p>
                            + Rp <span className="font-semibold">155.000</span>
                            <span className="text-zinc-500"> /extra cleaners</span>
                          </p>
                        </div>
                        <Button color="success">Pesan sekarang</Button>
                      </CardHeader>
                      <Divider />
                      <CardBody className="pt-8">
                        <ul className="flex flex-col gap-3">
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />1 Ruangan
                          </li>
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            Termasuk Taman
                          </li>
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            Dapur
                          </li>
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            Mencuci Perabot
                          </li>
                        </ul>
                      </CardBody>
                    </Card>
                    <Card className="hover:scale-105 cursor-pointer">
                      <CardHeader className="flex flex-col gap-4 pb-8 text-center">
                        <Tooltip showArrow={true} content="Dikenakan biaya penambahan waktu sebanyak Rp 140.000 /jam">
                          <div className="self-end">
                            <BsExclamationCircle size={20} />
                          </div>
                        </Tooltip>
                        <p className="text-xl">Kost</p>
                        <div>
                          <p>
                            Rp <span className="text-2xl font-semibold">275.000</span>
                            <span className="text-zinc-500"> /cleaner</span>
                          </p>
                          <p>
                            + Rp <span className="font-semibold">155.000</span>
                            <span className="text-zinc-500"> /extra cleaners</span>
                          </p>
                        </div>
                        <Button color="success">Pesan sekarang</Button>
                      </CardHeader>
                      <Divider />
                      <CardBody className="pt-8">
                        <ul className="flex flex-col gap-3">
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />1 Ruangan
                          </li>
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            Termasuk Taman
                          </li>
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            Dapur
                          </li>
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            Mencuci Perabot
                          </li>
                        </ul>
                      </CardBody>
                    </Card>
                    <Card className="hover:scale-105 cursor-pointer">
                      <CardHeader className="flex flex-col gap-4 pb-8 text-center">
                        <Tooltip showArrow={true} content="Dikenakan biaya penambahan waktu sebanyak Rp 175.000 /jam">
                          <div className="self-end">
                            <BsExclamationCircle size={20} />
                          </div>
                        </Tooltip>
                        <p className="text-xl">Kost</p>
                        <div>
                          <p>
                            Rp <span className="text-2xl font-semibold">305.000</span>
                            <span className="text-zinc-500"> /cleaner</span>
                          </p>
                          <p>
                            + Rp <span className="font-semibold">155.000</span>
                            <span className="text-zinc-500"> /extra cleaners</span>
                          </p>
                        </div>
                        <Button color="success">Pesan sekarang</Button>
                      </CardHeader>
                      <Divider />
                      <CardBody className="pt-8">
                        <ul className="flex flex-col gap-3">
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            <span className="bg-green-extra-tint">1 Ruangan</span>
                          </li>
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            Termasuk Taman
                          </li>
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            Dapur
                          </li>
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            Mencuci Perabot
                          </li>
                        </ul>
                      </CardBody>
                    </Card>
                    <Card className="hover:scale-105 cursor-pointer">
                      <CardHeader className="flex flex-col gap-4 pb-8 text-center">
                        <Tooltip showArrow={true} content="Dikenakan biaya penambahan waktu sebanyak Rp 175.000 /jam">
                          <div className="self-end">
                            <BsExclamationCircle size={20} />
                          </div>
                        </Tooltip>
                        <p className="text-xl">Kost</p>
                        <div>
                          <p>
                            Rp <span className="text-2xl font-semibold">305.000</span>
                            <span className="text-zinc-500"> /cleaner</span>
                          </p>
                          <p>
                            + Rp <span className="font-semibold">155.000</span>
                            <span className="text-zinc-500"> /extra cleaners</span>
                          </p>
                        </div>
                        <Button color="success">Pesan sekarang</Button>
                      </CardHeader>
                      <Divider />
                      <CardBody className="pt-8">
                        <ul className="flex flex-col gap-3">
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            <span className="bg-green-extra-tint">1 Ruangan</span>
                          </li>
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            Termasuk Taman
                          </li>
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            Dapur
                          </li>
                          <li className="flex gap-4">
                            <BsCheck size={25} color="green" />
                            Mencuci Perabot
                          </li>
                        </ul>
                      </CardBody>
                    </Card>
                  </article>
                </Tab>
              </Tabs>
            </div>
          </motion.div>
        </section>
      </main>
      <Advertise />
    </>
  );
}
