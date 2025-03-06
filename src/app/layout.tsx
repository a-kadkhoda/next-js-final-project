import Footer from "@/components/Footer";
import "./globals.css";
import { Providers } from "./Provider";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <Providers>
      <body>
        <Navbar />
        <div className="min-h-[calc(100svh-230px)]">
          {children}
        </div>
          <Footer />
      </body>
      </Providers>
    </html>
  );
}
