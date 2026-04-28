import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zach Angha | Software Engineer & AI Researcher",
  description: "Software engineer and AI researcher specializing in intelligent systems, machine learning, and high-performance web applications. Explore my portfolio and projects.",
  keywords: ["Zach Angha", "Software Engineer", "AI Researcher", "Machine Learning", "Portfolio", "Next.js", "TypeScript"],
  authors: [{ name: "Zach Angha" }],
  openGraph: {
    title: "Zach Angha | Software Engineer & AI Researcher",
    description: "Software engineer and AI researcher specializing in intelligent systems, machine learning, and high-performance web applications.",
    url: "https://zachangha.com", // NOTE: Update this with your actual domain
    siteName: "Zach Angha Portfolio",
    images: [
      {
        url: "/og-image.png", // NOTE: Create an og-image.png in the public folder for best results
        width: 1200,
        height: 630,
        alt: "Zach Angha Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zach Angha | Software Engineer & AI Researcher",
    description: "Software engineer and AI researcher specializing in intelligent systems.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
