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
    title: "מוכן ל-TypeScript",
    description: "נבנה עם TypeScript לחוויית מפתח טובה יותר ובטיחות טיפוסים.",
    color: "text-blue-500",
  },
  {
    icon: Database,
    title: "אינטגרציה עם Supabase",
    description: "שירות backend חזק עם מנויים בזמן אמת ואימות.",
    color: "text-green-500",
  },
  {
    icon: Palette,
    title: "ממשק יפהפה",
    description: "נוצר עם Tailwind CSS וקומפוננטים של Radix UI לממשקים מדהימים.",
    color: "text-purple-500",
  },
  {
    icon: Zap,
    title: "ביצועים במקום הראשון",
    description: "מותאם למהירות עם Next.js 15 וטכניקות מודרניות.",
    color: "text-yellow-500",
  },
  {
    icon: Shield,
    title: "מאובטח מעצם העיצוב",
    description: "כותרות אבטחה, אימות והגנת מידע מובנים.",
    color: "text-red-500",
  },
  {
    icon: Globe,
    title: "מותאם ל-SEO",
    description: "רינדור בצד השרת ותגי מטא לנראות טובה יותר בחיפוש.",
    color: "text-indigo-500",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "עיצוב רספונסיבי שעובד בצורה מושלמת על כל המכשירים.",
    color: "text-pink-500",
  },
  {
    icon: TestTube,
    title: "מוכן לבדיקות",
    description: "הגדרת בדיקות מקיפה עם Vitest ו-Testing Library.",
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
            כל מה שאתה צריך כדי{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              לשלוח מהר
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground"
          >
            פתרון מלא ומקיף עם כלים מודרניים וטכניקות עבודה מיטביות
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
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
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