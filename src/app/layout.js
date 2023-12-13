import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "码上起飞",
  description: "Sean technology blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="w-screen bg-[#F4E9d7] box-border min-h-screen">
          <div className="w-screen mx-auto  ">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
