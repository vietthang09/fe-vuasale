import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Vua Sale | Phần mềm Quét Facebook UID và Chuyển đổi sang SĐT Miễn Phí",
  description:
    "Vua Sale | Phần mềm Quét Facebook UID và Chuyển đổi sang SĐT Miễn Phí",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className="min-h-screen font-sans bg-gray-100">
        <Header />
        {children}
        <Footer />
        <a href="https://www.facebook.com/messages/t/368758302990518">
          <img
            className=" w-16 fixed bottom-8 right-8"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/640px-Facebook_Messenger_logo_2020.svg.png"
          />
        </a>

        <a href="https://t.me/toolquet">
          <img
            className=" w-16 fixed bottom-32 right-8"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
          />
        </a>
      </body>
    </html>
  );
}
