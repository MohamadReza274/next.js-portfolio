"use client"
import { ThemeProvider } from "next-themes"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <div>
      <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>{children}</ThemeProvider>
  </div> 
}

export default Providers