import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gray-50" data-testid="section-contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Reach Us</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              Get in Touch
            </h3>
            <p className="text-lg text-foreground/70 mb-10">
              We are happy to answer questions, arrange a consultation, or discuss your child's learning needs. No question is too small.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-base mb-0.5">Location</h4>
                  <p className="text-foreground/70">Githunguri Close, Nairobi</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-base mb-0.5">Phone</h4>
                  <a href="tel:+254792305643" className="text-foreground/70 hover:text-primary transition-colors" data-testid="link-phone">
                    0792 305643
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-base mb-0.5">Email</h4>
                  <a href="mailto:info@edunovaacademy.ac.ke" className="text-foreground/70 hover:text-primary transition-colors" data-testid="link-email">
                    info@edunovaacademy.ac.ke
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold" asChild data-testid="button-whatsapp">
                <a href="https://wa.me/254792305643" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" size={20} /> Chat on WhatsApp
                </a>
              </Button>
              <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold" asChild data-testid="button-schedule">
                <Link href="/admissions">Book a Consultation</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[480px]"
          >
            <Card className="w-full h-full border-none overflow-hidden bg-primary relative group">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/20">
                  <MapPin size={40} className="text-secondary" />
                </div>
                <h4 className="font-serif text-2xl font-bold mb-2">Edunova Premier International Academy</h4>
                <p className="text-white/80 max-w-xs mb-1">Githunguri Close, Nairobi</p>
                <p className="text-secondary font-semibold">0792 305643</p>

                <a
                  href="https://maps.google.com/?q=Githunguri+Close+Nairobi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 text-secondary underline underline-offset-4 text-sm hover:text-white transition-colors"
                  data-testid="link-directions"
                >
                  Get Directions on Google Maps
                </a>
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
