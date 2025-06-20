"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20" />
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-6" variant="secondary">
              <Sparkles className="mr-2 h-3 w-3 rtl:ml-2 rtl:mr-0" />
              תכונות חדשות זמינות
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            בנה אפליקציות מדהימות עם{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              אפליקצית קלוד
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            אפליקציה מודרנית מלאה שנבנתה עם Next.js, TypeScript, Tailwind CSS ו-Supabase. 
            כל מה שאתה צריך כדי לשלוח מהר.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button size="lg" className="text-lg px-8">
              התחל עכשיו
              <ArrowRight className="ml-2 h-5 w-5 rtl:mr-2 rtl:ml-0 rtl:rotate-180" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              צפה בדמו
            </Button>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse p-4 rounded-lg bg-background/50 backdrop-blur-sm border">
              <Zap className="h-5 w-5 text-yellow-500" />
              <span className="font-medium">מהיר כברק</span>
            </div>
            <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse p-4 rounded-lg bg-background/50 backdrop-blur-sm border">
              <Shield className="h-5 w-5 text-green-500" />
              <span className="font-medium">מאובטח כברירת מחדל</span>
            </div>
            <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse p-4 rounded-lg bg-background/50 backdrop-blur-sm border">
              <Sparkles className="h-5 w-5 text-purple-500" />
              <span className="font-medium">טכנולוגיה מודרנית</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-1/2 right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
    </section>
  );
}