import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iHelper - Создание бренд-витрин Яндекс Маркета | Увеличение продаж в 3-5 раз",
  description: "Сертифицированный партнёр Яндекс Маркета. Создаём бренд-витрины с фиксированной комиссией 5% вместо 15-30%. Прямая коммуникация с подписчиками и полная аналитика.",
  keywords: "бренд-витрина, Яндекс Маркет, создание витрины, комиссия 5%, увеличение продаж, маркетплейс",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
