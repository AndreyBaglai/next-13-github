import { Poppins } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
