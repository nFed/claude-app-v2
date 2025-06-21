"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, User, Building } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "דואר אלקטרוני",
      value: "info@claude-app.co.il",
      description: "שלחו לנו מייל ונחזור אליכם תוך 24 שעות"
    },
    {
      icon: Phone,
      title: "טלפון",
      value: "03-1234567",
      description: "זמינים בימי ראשון-חמישי, 9:00-17:00"
    },
    {
      icon: MapPin,
      title: "כתובת",
      value: "רחוב הטכנולוגיה 123, תל אביב",
      description: "בלב מרכז הטכנולוגיה של תל אביב"
    },
    {
      icon: Clock,
      title: "שעות פעילות",
      value: "ראשון-חמישי, 9:00-17:00",
      description: "זמן תגובה ממוצע: 2-4 שעות"
    }
  ];

  const faqItems = [
    {
      question: "איך אני יכול להתחיל להשתמש בפלטפורמה?",
      answer: "פשוט צרו קשר איתנו דרך הטופס או בטלפון, ונעזור לכם להתחיל בתהליך ההטמעה."
    },
    {
      question: "האם יש תמיכה טכנית בעברית?",
      answer: "כן, אנו מספקים תמיכה טכנית מלאה בעברית עם צוות מקצועי ורב-ניסיון."
    },
    {
      question: "כמה זמן לוקח לקבל תשובה לפנייה?",
      answer: "אנו מתחייבים לחזור אליכם תוך 24 שעות, ברוב המקרים תוך מספר שעות."
    },
    {
      question: "האם אפשר לקבל הדגמה אישית?",
      answer: "בהחלט! אנו מציעים הדגמות אישיות והתאמה לצרכים הספציפיים שלכם."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              צרו קשר
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              אנו כאן כדי לעזור לכם. שלחו לנו פנייה ונחזור אליכם בהקדם האפשרי
              עם הפתרון המתאים ביותר לצרכים שלכם.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="secondary" className="text-base px-4 py-2">תמיכה 24/7</Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">שירות בעברית</Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">תגובה מהירה</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              {...fadeInUp}
              className="order-2 lg:order-1"
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <MessageSquare className="w-6 h-6" />
                    שלחו לנו הודעה
                  </CardTitle>
                  <CardDescription className="text-base">
                    מלאו את הטופס והודעתכם תגיע אלינו ישירות
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-green-600">ההודעה נשלחה בהצלחה!</h3>
                      <p className="text-muted-foreground">
                        תודה על פנייתכם. נחזור אליכם בהקדם האפשרי.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            שם מלא *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="הכניסו את שמכם המלא"
                            className="text-right"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            דואר אלקטרוני *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            dir="ltr"
                            placeholder="your@email.com"
                            className="text-left"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="company" className="flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          חברה/ארגון
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="שם החברה או הארגון (אופציונלי)"
                          className="text-right"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">נושא ההודעה *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="במה אנו יכולים לעזור לכם?"
                          className="text-right"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">הודעה *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          placeholder="כתבו כאן את ההודעה שלכם..."
                          className="text-right resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full text-lg py-6"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2 rtl:ml-2 rtl:mr-0"
                            />
                            שולח הודעה...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
                            שלח הודעה
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">בואו נתחיל לדבר</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    אנו מחכים לשמוע מכם! לא משנה אם יש לכם שאלה, רעיון לשיתוף פעולה,
                    או אם אתם רוצים ללמוד עוד על השירותים שלנו - אנו כאן בשבילכם.
                  </p>
                </div>

                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {contactInfo.map((info, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                      <Card className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <info.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-grow">
                              <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                              <p className="text-primary font-medium mb-1 text-lg">{info.value}</p>
                              <p className="text-muted-foreground text-sm">{info.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">שאלות נפוצות</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              מצאו תשובות לשאלות הנפוצות ביותר שמקבלים
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-4"
          >
            {faqItems.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-muted-foreground mb-4">
              לא מצאתם את התשובה שחיפשתם?
            </p>
            <Button variant="outline" size="lg">
              <Mail className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
              שלחו לנו שאלה
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">בואו לבקר אותנו</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              משרדינו ממוקמים בלב תל אביב, נשמח לקבל אתכם לפגישה אישית
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-900/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">רחוב הטכנולוגיה 123</h3>
                  <p className="text-muted-foreground">תל אביב, ישראל</p>
                  <Button variant="outline" className="mt-4">
                    פתח ב-Google Maps
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}