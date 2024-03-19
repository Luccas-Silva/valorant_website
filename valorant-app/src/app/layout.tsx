import React from "react";
import type { Metadata } from "next";

import Header from "./Components/Header/page";
import Footer from "./Components/Footer/page";

import "./globals.css";

import {register} from 'swiper/element/bundle'
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const metadata: Metadata = {
  title: "Valorant",
  description: "Valorant web site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
