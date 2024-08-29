"use client";

import { BsCursorFill, BsFillGeoAltFill } from "react-icons/bs";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import Logo from "./logo";
import { FooterContextType, useFooterContext } from "@/context/is-footer";
import { Button, Link } from "@nextui-org/react";

export default function Footer() {
  const { isFooter, setIsFooter } = useFooterContext() as FooterContextType;

  let content = isFooter ? (
    <footer className="py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-5">
        <div className="flex flex-col">
          <Logo />
          <p className="flex items-center gap-2 mt-3">
            <BsFillGeoAltFill />
            <span>Semarang</span>
          </p>
          <p className="flex items-center gap-2">
            <BsCursorFill />
            <span>Indonesia</span>
          </p>
          <div className="flex gap-2 mt-3">
            <Button href="https://www.linkedin.com/in/kennethmatthew/" as={Link} size="sm" isIconOnly={true} color="secondary" aria-label="Kunjungi laman ini untuk mengetahui lebih lanjut">
              <FaLinkedinIn />
            </Button>
            <Button href="https://www.linkedin.com/in/kennethmatthew/" as={Link} size="sm" isIconOnly={true} color="secondary" aria-label="Kunjungi laman ini untuk mengetahui lebih lanjut">
              <FaInstagram />
            </Button>
          </div>
          <small className="mt-auto">&copy; iClean</small>
        </div>
        <div>
          <h4>Produk</h4>
          <ul className="flex flex-col gap-1 mt-3 text-zinc-500">
            <li>
              <a href="#">Rcp Zen 01</a>
            </li>
            <li>
              <a href="#">Rcp Zen 02</a>
            </li>
            <li>
              <a href="#">Rcp Zen 03</a>
            </li>
            <li>
              <a href="#">Rcp Zen 04</a>
            </li>
            <li>
              <a href="#">Rcp Zen 05</a>
            </li>
            <li>
              <a href="#">Rcp Zen 06</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Layanan</h4>
          <ul className="flex flex-col gap-1 mt-3 text-zinc-500">
            <li>
              <a href="#">Kost</a>
            </li>
            <li>
              <a href="#">Rumah</a>
            </li>
            <li>
              <a href="#">Kantor</a>
            </li>
            <li>
              <a href="#">Restoran</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Perusahaan</h4>
          <ul className="flex flex-col gap-1 mt-3 text-zinc-500">
            <li>
              <a href="/kepemimpinan">Tentang Kami</a>
            </li>
            <li>
              <a href="#">Pelanggan</a>
            </li>
            <li>
              <a href="#">Cleaners</a>
            </li>
            <li>
              <a href="#">Kerja Sama</a>
            </li>
            <li>
              <a href="/lingkungan">Lingkungan</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Sumber Daya</h4>
          <ul className="flex flex-col gap-1 mt-3 text-zinc-500">
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Live Support</a>
            </li>
            <li>
              <a href="#">Kontak Kami</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Kebijakan Privasi</a>
            </li>
          </ul>
        </div>
        <small className="col-span-5 border-t mt-8 pt-8">
          Hak cipta © 2024 iClean. Semua hak cipta atas konten di situs ini dilindungi oleh undang-undang. Dilarang menyalin, menyebarkan, atau menggunakan materi apa pun tanpa izin tertulis dari pemilik hak cipta.
        </small>
      </div>
    </footer>
  ) : null;

  return content;
}
