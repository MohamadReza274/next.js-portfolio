"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./Icons";
import { Button } from "./ui/button";

export default function ThemeToggle({ className = "" }) {
  const { setTheme, theme } = useTheme();
  const isLight = theme === "light";

  return (
    <Button
      type="button"
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      variant="ghost"
      size="icon-lg"
      className={`h-10 w-10 rounded-full border border-ink-border/14 text-paper-300 hover:text-mint-400 icon-hover-glow ${className}`}
    >
      {isLight ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}
