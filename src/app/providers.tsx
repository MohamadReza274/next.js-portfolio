"use client";
import { ThemeProvider } from "next-themes";
import { DirectionProvider } from "@/components/ui/direction";
import { ReactNode } from "react";
import { Locale } from "next-intl";
import { getDirection } from "@/lib/utils";

interface Props {
  children: ReactNode;
  locale: Locale;
}

const Providers = ({ children, locale }: Props) => {
  const direction = getDirection(locale);
  return (
    <DirectionProvider direction={direction}>
      <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </DirectionProvider>
  );
};

export default Providers;
