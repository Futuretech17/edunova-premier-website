import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { UserCheck, BookOpen, TrendingUp } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-primary"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B2B5E] via-[#0E1A3A] to-[#0A1128] z-0"></div>

      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay z-0 pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        }}
      ></div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent z-0 pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src="/logo.png"
              alt="Edunova Premier International Academy"
              className="h-28 md:h-36 w-auto object-contain mx-auto mb-8 drop-shadow-2xl"
            />
          </motion.div>

          <span
            className="inline-block py-1.5 px-4 rounded-full bg-secondary/15 text-secondary border border-secondary/25 text-xs font-bold tracking-[0.2em] uppercase mb-6"
            data-testid="badge-hero-tagline"
          >
            Education Redefined
          </span>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Every Learner Is Different.{' '}
            <span className="text-secondary italic font-medium block mt-2">
              Their Education Should Be Too.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Personalized learning, homeschooling support, and academic excellence tailored to each student — right here in Nairobi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-secondary text-primary hover:bg-secondary/90 font-bold px-8 h-14 text-base shadow-lg shadow-secondary/20"
              asChild
              data-testid="button-hero-apply"
            >
              <Link href="/admissions">Apply Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold px-8 h-14 text-base bg-transparent"
              asChild
              data-testid="button-hero-consultation"
            >
              <Link href="/contact">Book a Free Consultation</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl border-t border-white/10 pt-8"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 text-white/90" data-testid="badge-trust-1">
            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary flex-shrink-0">
              <UserCheck size={20} />
            </div>
            <span className="font-medium text-sm">One-on-One Teaching</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-white/90" data-testid="badge-trust-2">
            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary flex-shrink-0">
              <BookOpen size={20} />
            </div>
            <span className="font-medium text-sm">Personalized Learning</span>
          </div>
          <div className="flex items-center justify-center md:justify-end gap-3 text-white/90" data-testid="badge-trust-3">
            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary flex-shrink-0">
              <TrendingUp size={20} />
            </div>
            <span className="font-medium text-sm">Academic Support Programs</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
