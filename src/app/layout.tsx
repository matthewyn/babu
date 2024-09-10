import "./globals.css";
import { poppins } from "./fonts/fonts";
import Providers from "./providers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "iClean",
  description: "Provides cleaning services using organic and environmentally friendly products",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} light`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
