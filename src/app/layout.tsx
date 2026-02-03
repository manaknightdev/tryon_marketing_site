import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Traion Studio | Virtual Try-On, Recolor & Background Swap API",
  description: "The complete AI studio for e-commerce and automotive retail. Virtual try-on, instant product coloring, and professional background generation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="glow-background">
          <div className="glow-blue" />
          <div className="glow-purple" />
        </div>
        {children}
      </body>
    </html>
  );
}
