import NavBar from "./components/NavBar";
import "./globals.css";
import Footer from "./components/Footer";
import Head from "next/head";
import type { Metadata } from "next";
import ToastProvider from "./_lib/ToastContainer";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
  },
};
export const revalidate = 20;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="canonical"
          href="https://anishsherchan.com.np"
          key="canonical"
        />
      </Head>
      <body className={` bg-dark_primary_background `}>
        <div className="flex">
          <NavBar />
          <div className=" w-full">
            <div className=" lg:px-[110px] py-10 pb-28 px-6 lg:py-[100px] w-full max-w-[1920px] mx-auto">
              <ToastProvider>{children}</ToastProvider>
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
