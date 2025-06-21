"use client";

import { motion } from "framer-motion";
import { Code, Users, Lightbulb, Target, Heart, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AboutPage() {
  const values = [
    {
      icon: Code,
      title: "חדשנות טכנולוגית",
      description: "אנו מובילים בפיתוח פתרונות טכנולוגיים מתקדמים ויצירתיים שמקדמים את התעשייה."
    },
    {
      icon: Users,
      title: "עבודת צוות",
      description: "אנו מאמינים בכוח של עבודה משותפת ושיתוף פעולה כדי להשיג תוצאות מצוינות."
    },
    {
      icon: Lightbulb,
      title: "למידה מתמדת",
      description: "אנו מתחייבים ללמידה מתמדת ולהתפתחות מקצועית כדי להישאר בחזית הטכנולוgia."
    },
    {
      icon: Target,
      title: "מיקוד ביעדים",
      description: "אנו מתמקדים בהשגת יעדים ברורים ומדידים עם דגש על איכות ומצוינות."
    },
    {
      icon: Heart,
      title: "שירות לקהילה",
      description: "אנו פועלים מתוך רצון לתרום לקהילה הטכנולוגית והחברה בכלל."
    },
    {
      icon: Zap,
      title: "ביצועים מעולים",
      description: "אנו שואפים לביצועים מעולים בכל פרויקט ומתחייבים לאיכות גבוהה."
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "השקת הפלטפורמה",
      description: "השקנו את הפלטפורמה המתקדמת שלנו עם תמיכה מלאה בעברית ועיצוב RTL."
    },
    {
      year: "2023",
      title: "הקמת החברה",
      description: "הקמנו את החברה עם חזון ברור לפיתוח פתרונות טכנולוגיים חדשניים."
    },
    {
      year: "2022",
      title: "מחקר ופיתוח",
      description: "התחלנו במחקר מעמיק על הצרכים הטכנولוגיים בשוק הישראלי."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              אודות אפליקצית קלוד
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              אנו חברה טכנולוגית ישראלית המתמחה בפיתוח פתרונות תוכנה מתקדמים.
              המטרה שלנו היא ליצור כלים דיגיטליים שמקלים על החיים ומשפרים את הפרודוקטיביות
              של המשתמשים שלנו.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="secondary" className="text-base px-4 py-2">טכנולוגיה מתקדמת</Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">עיצוב ישראלי</Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">חדשנות</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">הטכנולוגיות שלנו</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              אנו משתמשים במגוון טכנולוגיות מתקדמות ומודרניות ליצירת פתרונות איכותיים ומהימנים
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Frontend Framework</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="secondary">Next.js 15</Badge>
                  <Badge variant="secondary">React 18</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    מסגרת עבודה מתקדמת לבניית אפליקציות web מהירות ואמינות
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">UI & Styling</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Radix UI</Badge>
                  <Badge variant="secondary">Framer Motion</Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    כלים מתקדמים לעיצוב ממשק משתמש נגיש ואטרקטיבי
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">State Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="secondary">Zustand</Badge>
                  <Badge variant="secondary">React Query</Badge>
                  <Badge variant="secondary">React Hook Form</Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    ניהול מצב יעיל וטיפול בנתונים באפליקציה
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Backend & Database</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="secondary">Supabase</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Real-time APIs</Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    פלטפורמת backend מתקדמת עם בסיס נתונים מהיר ואמין
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.5 }}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Development Tools</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="secondary">Vitest</Badge>
                  <Badge variant="secondary">ESLint</Badge>
                  <Badge variant="secondary">Prettier</Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    כלי פיתוח לבדיקת איכות קוד ותחזוקת סטנדרטים גבוהים
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.6 }}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Validation & Utils</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="secondary">Zod</Badge>
                  <Badge variant="secondary">Class Variance Authority</Badge>
                  <Badge variant="secondary">Lucide Icons</Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    כלי עזר לוולידציה, ניהול קלאסים וסט אייקונים מקצועי
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">המשימה שלנו</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              אנו מאמינים שטכנולוגיה צריכה להיות נגישה, אינטואיטיבית ומועילה לכולם.
              המשימה שלנו היא לפתח פתרונות שמקרבים בין טכנולוגיה מתקדמת לבין
              הצרכים האמיתיים של המשתמשים, תוך דגש על חוויית משתמש מעולה ועיצוב
              המותאם לתרבות הישראלית.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">פיתוח מתקדם</h3>
              <p className="text-muted-foreground">
                אנו משתמשים בטכנולוגיות החדישות ביותר כדי ליצור פתרונות מהימנים ויעילים.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">קהילה ושיתוף</h3>
              <p className="text-muted-foreground">
                אנו בונים קהילה של מפתחים וחדשנים שפועלים יחד להשגת מטרות משותפות.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">חדשנות מתמדת</h3>
              <p className="text-muted-foreground">
                אנו תמיד מחפשים דרכים חדשות ויצירתיות לפתור בעיות ולשפר את השירות שלנו.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">הערכים שלנו</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              הערכים שלנו מנחים אותנו בכל החלטה ופעולה שאנו מבצעים
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">המסע שלנו</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              מבט על הדרך שעברנו ועל האבני הדרך החשובות בפיתוח החברה
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 w-16 md:w-20 text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mx-auto mb-2">
                    {milestone.year.slice(-2)}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-grow rtl:mr-4 rtl:ml-0 mr-0 ml-4 md:rtl:mr-8 md:ml-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{milestone.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container">
          <motion.div
            {...fadeInUp}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              בואו נבנה יחד את העתיד הטכנולוגי
            </h2>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              אנו מחפשים אנשים בעלי תשוקה לטכנולוגיה ורצון לחדש.
              הצטרפו אלינו למסע מרגש של יצירה ופיתוח.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                צרו קשר
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}