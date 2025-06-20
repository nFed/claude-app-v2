import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Claude App - Modern Next.js Template",
  description: "A modern, full-stack Next.js application with TypeScript, Tailwind CSS, and Supabase integration.",
  keywords: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Supabase"],
  authors: [{ name: "Claude App" }],
  creator: "Claude App",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://claude-app.vercel.app",
    title: "Claude App - Modern Next.js Template",
    description: "A modern, full-stack Next.js application with TypeScript, Tailwind CSS, and Supabase integration.",
    siteName: "Claude App",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude App - Modern Next.js Template",
    description: "A modern, full-stack Next.js application with TypeScript, Tailwind CSS, and Supabase integration.",
    creator: "@claude-app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
