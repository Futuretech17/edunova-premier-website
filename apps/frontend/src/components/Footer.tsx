import { Link } from 'wouter';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8" data-testid="footer">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="inline-block bg-white rounded-xl p-2 shadow-md">
              <img src="/logo.png" alt="Edunova Premier International Academy" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-primary-foreground/80 text-sm max-w-xs">
              Education Redefined. A personalized learning academy committed to unlocking every child's potential through individual attention and tailored instruction.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors" data-testid="link-social-facebook"><Facebook size={20} /></a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors" data-testid="link-social-twitter"><Twitter size={20} /></a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors" data-testid="link-social-instagram"><Instagram size={20} /></a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors" data-testid="link-social-youtube"><Youtube size={20} /></a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors" data-testid="link-social-linkedin"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm" data-testid="link-footer-home">Home</Link></li>
              <li><Link href="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm" data-testid="link-footer-about">About Us</Link></li>
              <li><Link href="/services" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm" data-testid="link-footer-services">Our Services</Link></li>
              <li><Link href="/blog" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm" data-testid="link-footer-blog">Blog</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm" data-testid="link-footer-contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-white">Admissions</h3>
            <ul className="space-y-3">
              <li><Link href="/admissions" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm" data-testid="link-footer-apply">Apply Now</Link></li>
              <li><Link href="/admissions" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm" data-testid="link-footer-process">Admission Process</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm" data-testid="link-footer-consultation">Book a Consultation</Link></li>
              <li><Link href="/services" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm" data-testid="link-footer-programmes">Our Programmes</Link></li>
              <li><Link href="/blog" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm" data-testid="link-footer-resources">Learning Resources</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-primary-foreground/80 text-sm">
                <MapPin size={16} className="mt-0.5 text-secondary flex-shrink-0" />
                <span>Githunguri Close, Nairobi</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                <Phone size={16} className="text-secondary flex-shrink-0" />
                <a href="tel:+254792305643" className="hover:text-secondary transition-colors">0792 305643</a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                <Mail size={16} className="text-secondary flex-shrink-0" />
                <a href="mailto:info@edunovaacademy.ac.ke" className="hover:text-secondary transition-colors">info@edunovaacademy.ac.ke</a>
              </li>
            </ul>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()} data-testid="form-newsletter">
              <p className="text-primary-foreground/70 text-xs mb-2">Subscribe to our newsletter</p>
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-white placeholder:text-primary-foreground/50 focus-visible:ring-secondary h-9"
                data-testid="input-newsletter-email"
              />
              <Button
                type="submit"
                className="w-full bg-secondary text-primary hover:bg-secondary/90 font-semibold h-9"
                data-testid="button-newsletter-submit"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            &copy; 2026 Edunova Premier International Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-secondary transition-colors" data-testid="link-privacy">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors" data-testid="link-terms">Terms of Service</a>
            <span className="text-primary-foreground/30">|</span>
            <span>
              Powered by{" "}
              <a
                href="https://frostfieldtech.co.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary/80 transition-colors font-medium"
              >
                Frostfield Tech
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
