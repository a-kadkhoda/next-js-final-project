import NavigationMenu from "@/components/navigationMenu/NavigationMenu";
import "./globals.css";
import { Providers } from "./Provider";
import Footer from "@/components/footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark ">
      <body>
        <NavigationMenu />
        <div className="min-h-[calc(100vh-230px)]">
          <Providers>{children}</Providers>
        </div>

        <Footer />
      </body>
    </html>
  );
}
