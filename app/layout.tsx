import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  JetBrains_Mono,
  Instrument_Serif,
  Instrument_Sans,
  Urbanist,
  Bricolage_Grotesque,
} from "next/font/google";
import "./globals.css";
import "./fonts.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Invoicely",
  description: "Create beautiful invoices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          jetBrainsMono.variable,
          instrumentSerif.variable,
          instrumentSans.variable,
          urbanist.variable,
          bricolageGrotesque.variable,
          "antialiased",
        )}>
        <ThemeProvider defaultTheme="system" attribute="class" scriptProps={{"data-cfasync": "false"}}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
