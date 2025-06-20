"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Code, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Code className="h-6 w-6" />
            </motion.div>
            <span className="font-bold text-lg">אפליקצית קלוד</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            בית
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            אודות
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            צור קשר
          </Link>
        </nav>

        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Button variant="ghost" size="icon" asChild className="hidden md:flex">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          
          <Button variant="outline" className="hidden md:flex">
            <Star className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
            כוכב
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t bg-background"
        >
          <nav className="container py-4 space-y-2">
            <Link
              href="/"
              className="block py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              בית
            </Link>
            <Link
              href="/about"
              className="block py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              אודות
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              צור קשר
            </Link>
            <div className="pt-2 border-t">
              <Button variant="outline" className="w-full justify-start rtl:justify-end">
                <Github className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
                GitHub
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}