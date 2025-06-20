"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  Palette, 
  Zap, 
  Shield, 
  Globe,
  Smartphone,
  TestTube
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Code,
    title: "TypeScript Ready",
    description: "Built with TypeScript for better developer experience and type safety.",
    color: "text-blue-500",
  },
  {
    icon: Database,
    title: "Supabase Integration",
    description: "Powerful backend-as-a-service with real-time subscriptions and auth.",
    color: "text-green-500",
  },
  {
    icon: Palette,
    title: "Beautiful UI",
    description: "Crafted with Tailwind CSS and Radix UI components for stunning interfaces.",
    color: "text-purple-500",
  },
  {
    icon: Zap,
    title: "Performance First",
    description: "Optimized for speed with Next.js 15 and modern best practices.",
    color: "text-yellow-500",
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description: "Security headers, authentication, and data protection built-in.",
    color: "text-red-500",
  },
  {
    icon: Globe,
    title: "SEO Optimized",
    description: "Server-side rendering and meta tags for better search visibility.",
    color: "text-indigo-500",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Responsive design that works perfectly on all devices.",
    color: "text-pink-500",
  },
  {
    icon: TestTube,
    title: "Testing Ready",
    description: "Comprehensive testing setup with Vitest and Testing Library.",
    color: "text-cyan-500",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ship Fast
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground"
          >
            A complete full-stack solution with modern tools and best practices
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-background border">
                      <feature.icon className={`h-5 w-5 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}