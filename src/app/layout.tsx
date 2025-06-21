import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "אפליקצית קלוד - תבנית Next.js מודרנית",
  description: "אפליקציית Next.js מודרנית עם TypeScript, Tailwind CSS ואינטגרציה עם Supabase.",
  keywords: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Supabase", "עברית", "RTL"],
  authors: [{ name: "Claude App" }],
  creator: "Claude App",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://claude-app.vercel.app",
    title: "אפליקצית קלוד - תבנית Next.js מודרנית",
    description: "אפליקציית Next.js מודרנית עם TypeScript, Tailwind CSS ואינטגרציה עם Supabase.",
    siteName: "Claude App",
  },
  twitter: {
    card: "summary_large_image",
    title: "אפליקצית קלוד - תבנית Next.js מודרנית",
    description: "אפליקציית Next.js מודרנית עם TypeScript, Tailwind CSS ואינטגרציה עם Supabase.",
    creator: "@claude-app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
