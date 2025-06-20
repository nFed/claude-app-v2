"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CTASection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-0 shadow-2xl">
            <CardContent className="p-12 md:p-16 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
              >
                מוכן להתחיל לבנות?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
              >
                התחל עם אפליקצית קלוד היום ושלח את הפרויקט הבא שלך מהר מתמיד.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button size="lg" className="text-lg px-8">
                  <Download className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
                  הורד תבנית
                  <ArrowRight className="ml-2 h-5 w-5 rtl:mr-2 rtl:ml-0 rtl:rotate-180" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Github className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
                  צפה ב-GitHub
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-12 text-sm text-muted-foreground"
              >
                <p>חינמי וקוד פתוח • רישיון MIT • ללא נעילה לספק</p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}