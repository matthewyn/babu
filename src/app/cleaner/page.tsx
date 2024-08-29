import IHome from "/public/iHome.svg";
import IFlat from "/public/iFlat.svg";
import IOffice from "/public/iOffice.svg";
import IRestaurant from "/public/iRestaurant.svg";
import CleanerIllustration from "/public/cleaner-illustration.png";
import MoneyIllustration from "/public/money-illustration.png";
import HealthInsurance from "/public/health-insurance.png";
import MentorshipIllustration from "/public/mentorship-illustration.png";
import Image from "next/image";
import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";

export default function Cleaner() {
  return (
    <>
      <main className="pt-16">
        <section className="bg-cleaner-single bg-cover">
          <div className="max-w-5xl mx-auto py-48 text-white">
            <h1 className="text-5xl font-bold max-w-3xl">Bantu Ribuan Rumah Bersinar Lebih Terang dengan Keahlian Anda!</h1>
            <p className="max-w-3xl text-xl mt-8">Ratusan petugas kebersihan telah mengubah hidup mereka dengan bergabung bersama kami.</p>
          </div>
          <article className="bg-beige-shade py-16">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold">Ingin tahu lebih lanjut?</h2>
              <div className="grid grid-cols-4 pt-20 pl-6 gap-10">
                <div className="flex flex-col gap-4">
                  <Image src={IHome} alt="Layanan iHome" />
                  <p className="text-lg">Jaga rumah tetap bersih dan nyaman.</p>
                  <div className="mt-auto">
                    <Button href="#" color="success" radius="full" className="font-semibold">
                      Lihat
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Image src={IFlat} alt="Layanan iFlat" />
                  <p className="text-lg">Bersihkan kost untuk hunian yang segar dan nyaman.</p>
                  <div className="mt-auto">
                    <Button href="#" color="success" radius="full" className="font-semibold">
                      Lihat
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Image src={IOffice} alt="Layanan iOffice" />
                  <p className="text-lg">Rawat kantor agar tetap rapi.</p>
                  <div className="mt-auto">
                    <Button href="#" color="success" radius="full" className="font-semibold">
                      Lihat
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Image src={IRestaurant} alt="Layanan iRestaurant" />
                  <p className="text-lg">Pastikan restoran tetap bersih berkilau.</p>
                  <div className="mt-auto">
                    <Button href="#" color="success" radius="full" className="font-semibold">
                      Lihat
                    </Button>
                  </div>
                </div>
              </div>
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
                  <h3 className="font-semibold text-2xl leading-normal">Ratusan partner</h3>
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
