import { Card, CardBody, CardFooter, CardHeader, Divider, Link } from "@nextui-org/react";

export default function Kontak() {
  return (
    <>
      <main className="pt-16">
        <section className="py-20">
          <div className="max-w-5xl mx-auto text-lg">
            <h1 className="text-6xl font-semibold text-center">Menghubungi iClean</h1>
            <h2 className="text-4xl font-semibold mt-20">Dukungan Produk dan Layanan</h2>
            <article className="grid grid-cols-2 mt-14 gap-10">
              <div>
                <h3 className="text-2xl font-semibold">Hubungi Dukungan iClean</h3>
                <p className="mt-3">
                  Perlu layanan atau dukungan?{" "}
                  <Link className="inline text-lg" underline="hover" href="mailto:ceo@anugerahabadibersama.com">
                    Ajukan permohonan secara online
                  </Link>{" "}
                  dan kami akan mencari solusi untuk Anda.
                </p>
                <p className="mt-5">Cara lain untuk mendapatkan bantuan:</p>
                <ul className="list-disc ml-5">
                  <li>
                    <Link underline="hover" href="https://www.instagram.com/anugerah_abadi_bersama" showAnchorIcon className="text-lg">
                      Hubungi dukungan Instagram
                    </Link>
                  </li>
                  <li>
                    <Link underline="hover" href="tel:6281804974651" showAnchorIcon className="text-lg">
                      Hubungi operator seluler
                    </Link>
                  </li>
                  <li>
                    <Link underline="hover" href="https://www.facebook.com/profile.php?id=61559123167357&mibextid=ZbWKwL" showAnchorIcon className="text-lg">
                      Hubungi dukungan Instagram
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Tidak Puas dengan Layanan Kami?</h3>
                <p className="mt-3">
                  Jika Anda mengalami kendala atau memiliki keluhan terkait layanan yang diberikan, jangan ragu untuk{" "}
                  <Link className="inline text-lg" underline="hover" href="/get-support">
                    menghubungi call center support kami
                  </Link>
                  . Tim dukungan pelanggan kami siap membantu menyelesaikan permasalahan Anda dengan cepat dan profesional. Hubungi kami melalui nomor call center yang tersedia di aplikasi atau situs resmi, dan pastikan untuk menyampaikan
                  informasi detail mengenai keluhan Anda agar kami dapat memberikan solusi yang tepat.
                </p>
              </div>
            </article>
            <Card className="shadow-none bg-gray-tint border-gray-shade border rounded-md mt-16">
              <CardHeader className="block py-10">
                <h3 className="font-semibold text-2xl text-center">Alamat Perusahaan</h3>
                <p className="text-center mt-8">
                  CV. Anugerah Abadi Bersama
                  <br />
                  Jl. Tibung Sari No. 49B, Bali, Indonesia
                </p>
              </CardHeader>
              <Divider />
              <CardBody className="px-8 py-8">
                <h3 className="font-semibold text-2xl">Topik yang Disediakan</h3>
                <article className="grid grid-cols-3 gap-6 mt-8">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-semibold">iHome</h4>
                    <p className="text-base">Selengkapnya tentang layanan iHome</p>
                    <Link underline="hover" href="/help/ihome" showAnchorIcon>
                      Jelajahi
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-semibold">iFlat</h4>
                    <p className="text-base">Selengkapnya tentang layanan iFlat</p>
                    <Link underline="hover" href="/help/iflat" showAnchorIcon>
                      Jelajahi
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-semibold">iOffice</h4>
                    <p className="text-base">Selengkapnya tentang layanan iOffice</p>
                    <Link underline="hover" href="/help/ioffice" showAnchorIcon>
                      Jelajahi
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-semibold">iRestaurant</h4>
                    <p className="text-base">Selengkapnya tentang layanan iRestaurant</p>
                    <Link underline="hover" href="/help/irestaurant" showAnchorIcon>
                      Jelajahi
                    </Link>
                  </div>
                </article>
              </CardBody>
              <Divider />
              <CardFooter className="px-8 py-8 block">
                <h3 className="font-semibold text-2xl">Feedback</h3>
                <p className="text-base mt-3">Silakan sampaikan masukan Anda. Pilih opsi kritik dan saran yang sesuai (kami membaca semuanya, tapi tidak selalu dapat membalasnya):</p>
                <div className="flex mt-4 justify-between">
                  <Link underline="hover" href="/feedback" showAnchorIcon>
                    Kritik dan Saran Layanan
                  </Link>
                  <Link underline="hover" href="/feedback/product" showAnchorIcon>
                    Kritik dan Saran Produk
                  </Link>
                  <Link underline="hover" href="/feedback/developer" showAnchorIcon>
                    Kritik dan Saran Web
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}
