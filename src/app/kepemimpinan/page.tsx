"use client";

import Willy from "/public/willy.png";
import Irene from "/public/irene.png";
import Kenneth from "/public/kenneth.png";
import { BreadcrumbItem, Breadcrumbs, Card, CardBody, CardFooter, Link } from "@nextui-org/react";
import Image from "next/image";

export default function Kepemimpinan() {
  return (
    <>
      <main className="pt-16">
        <section className="pt-6">
          <div className="max-w-5xl mx-auto">
            <Breadcrumbs>
              <BreadcrumbItem href="/">Home</BreadcrumbItem>
              <BreadcrumbItem href="/kepemimpinan">Kepemimpinan iClean</BreadcrumbItem>
            </Breadcrumbs>
            <article className="border-b py-12">
              <h1 className="text-3xl font-medium">Profil Eksekutif</h1>
              <div className="grid grid-cols-4 gap-5 mt-8">
                <Card className="shadow-none">
                  <CardBody className="p-0 rounded-xl">
                    <Image src={Irene} alt="Irene as President Director of iClean" quality={80} className="w-full h-full" />
                  </CardBody>
                  <CardFooter className="px-0 block">
                    <Link>Irene Satiawati</Link>
                    <p>President Director</p>
                  </CardFooter>
                </Card>
                <Card className="shadow-none">
                  <CardBody className="p-0 rounded-xl">
                    <Image src={Willy} alt="Willy as Director of iClean" quality={80} className="w-full h-full" />
                  </CardBody>
                  <CardFooter className="px-0 block">
                    <Link>Willy Yonathan</Link>
                    <p>Director</p>
                  </CardFooter>
                </Card>
                <Card className="shadow-none">
                  <CardBody className="p-0 rounded-xl">
                    <Image src={Kenneth} alt="Kenneth as Head of Tech" quality={80} className="w-full h-full" />
                  </CardBody>
                  <CardFooter className="px-0 block">
                    <Link>Kenneth Matthew</Link>
                    <p>Head of Tech</p>
                  </CardFooter>
                </Card>
              </div>
            </article>
            <article className="py-12">
              <h2 className="text-3xl font-medium">Dewan Direksi</h2>
              <div className="grid grid-cols-4 gap-8 mt-8">
                <div className="flex flex-col gap-1">
                  <Link>Irene Satiawati</Link>
                  <p className="text-sm">President Director</p>
                  <p className="text-sm">iClean</p>
                </div>
              </div>
              <Card className="shadow-none bg-gray-tint border-gray-shade border rounded-md py-6 px-14 mt-10">
                <CardBody>
                  <h3 className="font-medium text-2xl">Saluran Bantuan iClean</h3>
                  <Link href="mailto:ceo@anugerahabadibersama.com" underline="hover">
                    ceo@anugerahabadibersama.com
                  </Link>
                </CardBody>
              </Card>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
