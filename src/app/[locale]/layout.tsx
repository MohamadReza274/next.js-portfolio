import { cn, getDirection } from "@/lib/utils";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "../globals.css";
import Providers from "../providers";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MohamadReza",
  description: "This is my portfolio",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale();
  return (
    <html
      data-scroll-behavior="smooth"
      lang={locale}
      dir={getDirection(locale)}
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
      suppressHydrationWarning
    >
      <body className="">
        <Providers locale={locale}>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
