"use client";

import Image from "next/image";
import ProductBannerDesk from "/public/product-banner-desk.jpg";
import ProductBannerFloor from "/public/product-banner-floor.jpg";
import ProductBannerToilet from "/public/product-banner-toilet.jpg";
import RcpZen05 from "/public/rcp-zen-05.png";
import RcpZen15 from "/public/rcp-zen-15.png";
import RcpZen12 from "/public/rcp-zen-12.png";
import RcpZen01 from "/public/rcp-zen-01.png";
import RcpZen02 from "/public/rcp-zen-02.png";
import RcpZen03 from "/public/rcp-zen-03.png";
import RcpZen04 from "/public/rcp-zen-04.png";
import RcpZen06 from "/public/rcp-zen-06.png";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { HiArrowRight, HiGlobeAsiaAustralia } from "react-icons/hi2";
import { BsCheckCircle } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import { globalVariants } from "../page";
import { Button, Card, CardBody, Link } from "@nextui-org/react";
import { FooterContextType, useFooterContext } from "@/context/is-footer";

const opacityVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: [0.47, 0.01, 0.4, 0.99],
    },
  },
};

const textColorVariants = {
  hidden: {
    backgroundImage: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)",
    backgroundPositionX: "50%",
  },
  visible: {
    backgroundImage: "linear-gradient(90deg, rgba(0,128,0,1) 0%, rgba(0,128,0,1) 100%)",
    backgroundPositionX: "225%",
    transition: {
      duration: 2,
      ease: "linear",
    },
  },
};

const slidingButtonVariants = {
  hidden: {
    translateX: "-13rem",
  },
  visible: {
    translateX: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const slidingBackgroundVariants = {
  hidden: {
    width: "100%",
  },
  visible: {
    width: 0,
    transition: {
      ease: [0.37, 0, 0.29, 1],
      duration: 1.6,
    },
  },
};

const slidingTextVariants = {
  hidden: {
    opacity: 0,
  },
  visible: (time: number) => ({
    opacity: 1,
    transition: {
      ease: [0.47, 0.01, 0.4, 0.99],
      opacity: {
        duration: 2,
        delay: time,
      },
    },
  }),
};

const MotionImage = motion(Image);
const MotionCard = motion(Card);

export default function Produk() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end center"],
  });
  const paddingImage = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const paddingText = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const [product, setProduct] = useState(false);
  const { setIsFooter } = useFooterContext() as FooterContextType;
  const { scrollXProgress } = useScroll();
  const progressScrollbar = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

  function shiftLayout() {
    setProduct(true);
    setIsFooter(false);
  }

  return (
    <>
      <main>
        <AnimatePresence>
          {!product ? (
            <motion.div exit={{ x: "-100vw" }} transition={{ duration: 0.8, ease: "easeOut" }} key="overview">
              <section className="py-20 bg-[#f4f2f0]" ref={targetRef}>
                <div className="max-w-5xl mx-auto text-center">
                  <h1 className="text-6xl leading-snug font-semibold">
                    Produk organik.
                    <br />
                    <motion.span className="bg-clip-text text-transparent" variants={textColorVariants} initial="hidden" animate="visible">
                      Layanan berkualitas.
                    </motion.span>
                  </h1>
                  <motion.div className="pt-20" style={{ paddingTop: paddingImage, paddingBottom: paddingText }}>
                    <div className="grid grid-cols-2 gap-8 justify-items-end items-center">
                      <MotionImage src={ProductBannerDesk} alt="Cleaner membersihkan meja" quality={80} className="rounded-3xl w-4/5" variants={globalVariants} initial="hidden" animate="visible" />
                      <MotionImage src={ProductBannerFloor} alt="Cleaner membersihkan lantai" quality={80} className="rounded-3xl row-span-2" priority variants={globalVariants} initial="hidden" animate="visible" custom={0.15} />
                      <MotionImage src={ProductBannerToilet} alt="Cleaner membersihkan toilet" quality={80} className="rounded-3xl" variants={globalVariants} initial="hidden" animate="visible" custom={0.3} />
                    </div>
                  </motion.div>
                  <motion.p className="text-3xl font-semibold max-w-2xl mx-auto leading-tight" variants={opacityVariants} initial="hidden" whileInView="visible" viewport={{ margin: "-160px" }}>
                    Produk kami menangani bidang kebersihan perbekalan kesehatan medis dan industri dengan karakter produk yang telah dilengkapi fitur food contact, food grade, phosphat free dan bebas dari bahan B3 yang berbahaya.
                  </motion.p>
                </div>
              </section>
              <section className="mt-20">
                <div className="max-w-5xl mx-auto">
                  <div className="grid grid-cols-[2fr_1fr] gap-8">
                    <article>
                      <h2 className="text-5xl font-semibold leading-tight">
                        <span className="text-green-shade">Detergen. Pencuci Tangan. Dan Penghilang Noda.</span>
                        <br /> Bersihkan dengan Tenang, Nikmati dengan Aman.
                      </h2>
                      <Image src={RcpZen05} alt="Rcp zen 05" quality={80} height={530} className="-rotate-90 ml-10 -mt-4" />
                      <p className="text-3xl font-semibold leading-tight">
                        Kami hadir dengan berbagai keunggulan yang membuatnya menjadi pilihan terbaik untuk kebersihan rumah tangga Anda. Dirancang dengan standar food contact dan food grade, produk ini aman digunakan di sekitar makanan
                        tanpa khawatir akan kontaminasi.
                      </p>
                    </article>
                    <article className="pt-44">
                      <Image src={RcpZen12} alt="Rcp zen 12" quality={80} className="w-full" />
                      <Image src={RcpZen15} alt="Rcp zen 15" quality={80} height={300} className="mt-20 ml-6" />
                    </article>
                  </div>
                  <button className="text-2xl text-right ml-auto items-center flex gap-4 font-semibold mt-16" onClick={shiftLayout}>
                    <div className="relative">
                      <motion.span variants={slidingTextVariants} initial="hidden" whileInView="visible" custom={0.75} viewport={{ once: true }}>
                        Selengkapnya tentang
                        <br /> produk Kami
                      </motion.span>
                      <motion.div className="top-0 right-0 h-full bg-white absolute" variants={slidingBackgroundVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        &nbsp;
                      </motion.div>
                    </div>
                    <motion.div className="flex items-center justify-center bg-green-shade p-4 rounded-full" variants={slidingButtonVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                      <HiArrowRight size={30} color="white" />
                    </motion.div>
                  </button>
                </div>
              </section>
              <section className="bg-[#f4f2f0] py-20 mt-20">
                <div className="max-w-5xl mx-auto">
                  <h2 className="text-5xl font-semibold leading-tight">
                    <motion.span className="text-green-shade bg-clip-text text-transparent" variants={textColorVariants} initial="hidden" animate="visible">
                      Ada solusi
                    </motion.span>
                    <br /> untuk setiap masalah.
                  </h2>
                  <ul className="text-3xl mt-8 flex flex-col gap-8">
                    <li className="flex gap-4">
                      <BsCheckCircle color="green" size={40} className="shrink-0" />
                      Rcp Zen 08 bisa digunakan untuk penghilang noda.
                    </li>
                    <li className="flex gap-4">
                      <BsCheckCircle color="green" size={40} className="shrink-0" />
                      Premium Zen Fabric Freshsoft sebagai pelembut kain yang handal.
                    </li>
                    <li className="flex gap-4">
                      <BsCheckCircle color="green" size={40} className="shrink-0" />
                      Dapat mendukung proses pembersihan media, instrumen, atau boiler dari kerak kalsium.
                    </li>
                  </ul>
                  <button className="text-2xl text-right ml-auto items-center flex gap-4 font-semibold mt-16">
                    <div className="relative">
                      <motion.span variants={slidingTextVariants} initial="hidden" whileInView="visible" custom={0.75} viewport={{ once: true }}>
                        Selengkapnya tentang
                        <br /> produk Kami
                      </motion.span>
                      <motion.div className="top-0 right-0 h-full bg-[#f4f2f0] absolute" variants={slidingBackgroundVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        &nbsp;
                      </motion.div>
                    </div>
                    <motion.div className="flex items-center justify-center bg-green-shade p-4 rounded-full" variants={slidingButtonVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                      <HiArrowRight size={30} color="white" />
                    </motion.div>
                  </button>
                </div>
              </section>
              <section className="mt-20">
                <div className="max-w-5xl mx-auto">
                  <h2 className="text-5xl font-semibold leading-tight text-center">Penilaian customer</h2>
                  <article className="grid grid-cols-3 gap-4 mt-12">
                    <MotionCard className="shadow-none bg-[#f4f2f0] p-4" variants={globalVariants} initial="hidden" whileInView="visible" custom={0.15} viewport={{ once: true }}>
                      <CardBody>
                        <p className="text-xl">
                          William, <span className="text-green-tint">Gajah Printing</span>
                        </p>
                        <p className="text-zinc-500 mt-6">
                          &quot;Saya sangat puas dengan layanan kebersihan ini! Mereka menggunakan produk pembersih organik yang tidak hanya efektif tetapi juga aman untuk keluarga dan hewan peliharaan saya.&quot;
                        </p>
                      </CardBody>
                    </MotionCard>
                    <MotionCard className="shadow-none bg-[#f4f2f0] p-4" variants={globalVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                      <CardBody>
                        <p className="text-xl">
                          Abdi, <span className="text-green-tint">CV. Digital Media</span>
                        </p>
                        <p className="text-zinc-500 mt-6">&quot;Layanan yang hebat! Saya sangat senang mengetahui bahwa rumah saya dibersihkan dengan produk yang ramah lingkungan.&quot;</p>
                      </CardBody>
                    </MotionCard>
                    <MotionCard className="shadow-none bg-[#f4f2f0] p-4" variants={globalVariants} initial="hidden" whileInView="visible" custom={0.3} viewport={{ once: true }}>
                      <CardBody>
                        <p className="text-xl">
                          Najwa, <span className="text-green-tint">Ibu Rumah Tangga</span>
                        </p>
                        <p className="text-zinc-500 mt-6">
                          &quot;Layanan kebersihan yang menenangkan! Sebagai seseorang yang peduli dengan kesehatan dan lingkungan, saya sangat menghargai penggunaan produk pembersih alami oleh tim ini.&quot;
                        </p>
                      </CardBody>
                    </MotionCard>
                  </article>
                </div>
              </section>
            </motion.div>
          ) : (
            <>
              <motion.div initial={{ x: "50vw" }} animate={{ x: 0 }} exit={{ x: 100 }} transition={{ duration: 1.5, ease: [0.47, 0.01, 0.4, 0.99], delay: 0.1, when: "beforeChildren" }} key="product">
                <section className="grid grid-cols-[repeat(6,50vw)_35vw_25vw] min-h-[calc(100vh_-_81px)]">
                  <article className="py-10 pl-12">
                    <div className="grid grid-cols-2">
                      <div>
                        <h3 className="text-2xl font-semibold mt-14 text-zinc-500">Rcp Zen 01</h3>
                        <h4 className="text-4xl font-semibold leading-tight text-green-shade mt-3">Premium Zenmatic Detergent.</h4>
                        <p className="max-w-64 text-lg font-semibold mt-5">
                          Kombinasi unik deterjen, formulasi bersih ringan namun kuat untuk penggunaan cucian sehari-hari. Efektif di semua jenis air dan suhu, menghilangkan noda membandel dengan hasil cucian yang baik untuk segala jenis
                          kain.
                        </p>
                      </div>
                      <Image src={RcpZen01} alt="Rcp zen 01" quality={80} height={350} className="mt-44" />
                    </div>
                  </article>
                  <article className="py-10 pl-12 bg-[#f5f5f7]">
                    <div className="grid grid-cols-2">
                      <div>
                        <h3 className="text-2xl font-semibold mt-14 text-zinc-500">Rcp Zen 02</h3>
                        <h4 className="text-4xl font-semibold leading-tight text-green-shade mt-3">Premium Zen Mild Washing Soap.</h4>
                        <p className="max-w-64 text-lg mt-5 font-semibold">Sabun cuci tangan untuk keperluan rumah tangga dan industri.</p>
                      </div>
                      <Image src={RcpZen02} alt="Rcp zen 02" quality={80} height={350} className="mt-44" />
                    </div>
                  </article>
                  <article>
                    <div className="grid grid-cols-2 h-full">
                      <div className="bg-[#f4f2f0] py-10 pl-12">
                        <h4 className="text-4xl font-semibold leading-tight mt-14">Bisa membersihkan dengan cepat.</h4>
                        <ul className="ml-10 mt-5 text-lg font-semibold max-w-60 flex flex-col gap-4">
                          <li>
                            Hanya <strong className="font-extrabold">2 jam</strong> <br />
                            dengan Rcp Zen 01<sup>1</sup>
                          </li>
                          <li>
                            Hanya <strong className="font-extrabold">3 jam</strong> <br />
                            dengan Rcp Zen 06<sup>2</sup>
                          </li>
                          <li>
                            Hanya <strong className="font-extrabold">5 jam</strong> <br />
                            dengan Rcp Zen 08<sup>3</sup>
                          </li>
                          <li>
                            Hanya <strong className="font-extrabold">6 jam</strong> <br />
                            dengan Rcp Zen 07<sup>4</sup>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-product-detail-clean bg-cover">&nbsp;</div>
                    </div>
                  </article>
                  <article className="py-10 pl-12 bg-[#f5f5f7]">
                    <div className="grid grid-cols-2">
                      <div>
                        <h3 className="text-2xl font-semibold mt-14 text-zinc-500">Rcp Zen 03</h3>
                        <h4 className="text-4xl font-semibold leading-tight text-green-shade max-w-sm mt-3">Premium Zen Serum Sanitizer.</h4>
                        <p className="max-w-64 font-semibold text-lg mt-5">Pembersih Serum Premium untuk membuat proses pembersihan akhir untuk berbagai media dan alat produksi, keluaran residu tidak mengganggu biota air.</p>
                      </div>
                      <Image src={RcpZen03} alt="Rcp zen 03" quality={80} height={350} className="mt-44" />
                    </div>
                  </article>
                  <article className="py-10 pl-12">
                    <div className="grid grid-cols-2">
                      <div>
                        <h3 className="text-2xl font-semibold mt-14 text-zinc-500">Rcp Zen 04</h3>
                        <h4 className="text-4xl font-semibold leading-tight text-green-shade mt-3">Premium Zen Floorface Cleaner.</h4>
                        <p className="max-w-64 text-lg font-semibold mt-5">
                          Cairan konsentrat untuk mendukung pembersihan dan perawatan penutup lantai, epoxy, vinyl, screed plaster dan penutup lantai lainnya serta bahan aktif permukaan dengan hasil pembersihan yang maksimal.
                        </p>
                      </div>
                      <Image src={RcpZen04} alt="Rcp zen 04" quality={80} height={350} className="mt-44" />
                    </div>
                  </article>
                  <article className="py-10 pl-12 bg-[#f5f5f7]">
                    <div className="grid grid-cols-2">
                      <div>
                        <h3 className="text-2xl font-semibold mt-14 text-zinc-500">Rcp Zen 06</h3>
                        <h4 className="text-4xl font-semibold leading-tight text-green-shade mt-3">Premium Zen Fabric Freshsoft.</h4>
                        <p className="max-w-64 text-lg mt-5 font-semibold">Pelembut kain dengan sistem granula untuk membantu merawat kelembutan serat kain secara intensif.</p>
                      </div>
                      <Image src={RcpZen06} alt="Rcp zen 06" quality={80} height={350} className="mt-44" />
                    </div>
                  </article>
                  <article className="flex justify-center items-center bg-product-detail-safe bg-top bg-[length:150%_150%]">
                    <div>
                      <p className="font-semibold text-lg max-w-72">Dengan kualitas tinggi yang tahan lama dan harga yang kompetitif, produk kami tidak hanya memberikan keamanan tetapi juga mendukung kelestarian lingkungan.</p>
                      <h4 className="text-4xl max-w-72 font-semibold leading-tight text-green-shade mt-6">Pada intinya, Anda lebih aman.</h4>
                    </div>
                  </article>
                  <article className="bg-[#f4f2f0] px-12 flex items-center">
                    <div>
                      <HiGlobeAsiaAustralia color="green" size={60} />
                      <h4 className="text-4xl font-semibold leading-tight mt-4">
                        Baik untuk perusahaan.
                        <br />
                        <span className="text-green-shade">Baik untuk Bumi.</span>
                      </h4>
                      <Link href="/keberlanjutan" className="mt-4 text-lg" showAnchorIcon isExternal>
                        Jelajahi keberlanjutan Kami
                      </Link>
                    </div>
                  </article>
                </section>
              </motion.div>
              <div className="fixed bottom-6 left-16 flex w-72 max-w-72 items-center gap-6">
                <Button isIconOnly radius="full" size="lg">
                  <BsXLg />
                </Button>
                <div className="w-full h-[2px] bg-[#d2d2d7] relative">
                  <motion.div className="absolute top-0 left-0 right-0 bottom-0 bg-black" style={{ width: progressScrollbar }}>
                    &nbsp;
                  </motion.div>
                </div>
              </div>
            </>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
