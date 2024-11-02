import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";

export const font = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Vimal Paan Masala - Vimal",
  description: "UI/UX Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-gradient-to-b from-yellow-500 to-orange-500 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
