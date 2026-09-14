"use client"
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from './Icons';

export default function ThemeToggle({ className = '' }) {
  const { setTheme,theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`w-10 h-10 rounded-full border border-ink-border/14 flex items-center justify-center text-paper-300 hover:text-mint-400 transition-all duration-300 icon-hover-glow ${className}`}
    >
      {isLight ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}