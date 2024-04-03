import NavBar from "./components/NavBar";
import "./globals.css";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` bg-dark_primary_background `}>
        <div className="flex">
          <NavBar />
          <div className=" w-full">
            <div className=" lg:px-[110px] py-8 pb-28 px-6 lg:py-[100px] w-full max-w-[1920px] mx-auto">
              {children}
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
