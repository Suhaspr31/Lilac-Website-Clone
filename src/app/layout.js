import { Merriweather, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const merriweather = Merriweather({ 
  weight: ['300', '400', '700', '900'],
  subsets: ["latin"],
  variable: '--font-merriweather',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: "Dr. Maya Reynolds | Psychologist in Santa Monica",
  description: "Licensed Clinical Psychologist specializing in anxiety, trauma, and burnout for high-achievers in Santa Monica, CA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} ${inter.variable} font-sans antialiased bg-[#F5F5F0] text-[#2D3748]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}