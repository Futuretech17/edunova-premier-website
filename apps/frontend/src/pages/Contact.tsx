import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, MessageCircle, Clock, Calendar } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name is required' }),
  email: z.string().email({ message: 'Valid email required' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Please write at least a brief message' }),
});

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  function onSubmit(_values: z.infer<typeof contactSchema>) {
    toast({
      title: 'Message Sent',
      description: 'We will get back to you within 24 hours. Thank you!',
    });
    form.reset();
  }

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="py-20 bg-primary text-white" data-testid="section-contact-hero">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/15 text-secondary border border-secondary/25 text-xs font-bold tracking-[0.15em] uppercase mb-5">
                Talk to Us
              </span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Contact Us
              </h1>
              <p className="text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
                We are happy to answer questions, discuss your child's needs, or arrange a free consultation. Reach out — we respond within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white" data-testid="section-contact-main">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-primary mb-2">Get in Touch</h2>
                  <p className="text-foreground/65">
                    Use any of the channels below, or fill in the form and we will reach out to you.
                  </p>
                </div>

                <Card className="border border-border/50 shadow-sm" data-testid="contact-info-card">
                  <CardContent className="p-6 space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center flex-shrink-0">
                        <MapPin size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-primary text-sm mb-0.5">Location</p>
                        <p className="text-foreground/65 text-sm">Githunguri Close, Nairobi</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center flex-shrink-0">
                        <Phone size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-primary text-sm mb-0.5">Phone</p>
                        <a href="tel:+254792305643" className="text-foreground/65 text-sm hover:text-primary transition-colors" data-testid="link-phone">
                          0792 305643
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center flex-shrink-0">
                        <Mail size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-primary text-sm mb-0.5">Email</p>
                        <a href="mailto:info@edunovaacademy.ac.ke" className="text-foreground/65 text-sm hover:text-primary transition-colors" data-testid="link-email">
                          info@edunovaacademy.ac.ke
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center flex-shrink-0">
                        <Clock size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-primary text-sm mb-0.5">Hours</p>
                        <p className="text-foreground/65 text-sm">Mon–Fri: 7:30am – 6:00pm</p>
                        <p className="text-foreground/65 text-sm">Saturday: 8:00am – 2:00pm</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex flex-col gap-3">
                  <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold w-full" asChild data-testid="button-whatsapp">
                    <a href="https://wa.me/254792305643" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2" size={18} /> Chat on WhatsApp
                    </a>
                  </Button>
                  <Button className="bg-secondary text-primary hover:bg-secondary/90 font-bold w-full" asChild data-testid="button-book-consultation">
                    <Link href="/admissions">
                      <Calendar className="mr-2" size={18} /> Book a Consultation
                    </Link>
                  </Button>
                </div>

                <div className="rounded-xl overflow-hidden border border-border/50 h-48 bg-primary flex items-center justify-center relative">
                  <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
                  <div className="relative z-10 text-center text-white">
                    <MapPin size={36} className="mx-auto mb-2 text-secondary" />
                    <p className="font-semibold text-sm">Githunguri Close, Nairobi</p>
                    <a
                      href="https://maps.google.com/?q=Githunguri+Close+Nairobi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary text-xs underline underline-offset-2 mt-1 block hover:text-white transition-colors"
                      data-testid="link-map"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <Card className="border border-border/50 shadow-sm">
                  <CardContent className="p-8">
                    <h2 className="font-serif text-2xl font-bold text-primary mb-1">Send Us a Message</h2>
                    <p className="text-foreground/60 text-sm mb-7">We read every message and respond within 24 hours.</p>

                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" data-testid="form-contact">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Jane Mwangi" {...field} data-testid="input-name" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="you@example.com" {...field} data-testid="input-email" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone (optional)</FormLabel>
                                <FormControl>
                                  <Input placeholder="0712 345 678" {...field} data-testid="input-phone" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about your child or ask any questions..."
                                  className="min-h-[140px]"
                                  {...field}
                                  data-testid="input-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button type="submit" size="lg" className="w-full bg-secondary text-primary hover:bg-secondary/90 font-bold" data-testid="button-send-message">
                          <Send className="mr-2 h-4 w-4" /> Send Message
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
