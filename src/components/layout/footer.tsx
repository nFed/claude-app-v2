"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Github, Twitter, Linkedin, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="border-t bg-background"
    >
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Code className="h-6 w-6" />
              <span className="font-bold text-lg">אפליקצית קלוד</span>
            </div>
            <p className="text-sm text-muted-foreground">
              אפליקציית Next.js מודרנית שנבנתה עם TypeScript, Tailwind CSS ו-Supabase.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">מוצר</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                בית
              </Link>
              <Link
                href="/features"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                תכונות
              </Link>
              <Link
                href="/pricing"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                תמחור
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">חברה</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/about"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                אודות
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                צור קשר
              </Link>
              <Link
                href="/blog"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                בלוג
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">התחבר</h3>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} אפליקצית קלוד. כל הזכויות שמורות.
          </p>
          <p className="text-sm text-muted-foreground flex items-center">
            נוצר עם <Heart className="h-4 w-4 mx-1 text-red-500" /> בעזרת Next.js
          </p>
        </div>
      </div>
    </motion.footer>
  );
}