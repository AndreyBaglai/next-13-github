// types
import type { Metadata } from "next";

// components
import Header from "./components/Header";

// fonts
import { Poppins } from "next/font/google";

// styles
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next 13 Github",
  description: "web development",
  keywords: "web development, web design, javascript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
