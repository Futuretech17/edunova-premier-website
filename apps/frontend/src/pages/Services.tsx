import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { User, BookOpen, Home, Clock, Brain, Check, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: User,
    title: 'Personalized Learning',
    tagline: 'Education built around your child — not the other way around.',
    description:
      "We assess each student's academic level, learning style, and goals, then design a custom learning plan that evolves as they grow. Sessions are structured yet flexible — always guided by what the student needs most in that moment.",
    features: [
      'Individual learning assessment',
      'Custom curriculum planning',
      'Regular progress reviews',
      'Adaptive pace — never rushed, never bored',
      'Parent progress updates',
    ],
    ideal: 'Students who feel lost in traditional classrooms or who want to accelerate beyond their current level.',
    color: 'from-blue-50 to-white',
    iconBg: 'bg-primary/10 text-primary',
  },
  {
    icon: BookOpen,
    title: 'One-on-One Tutoring',
    tagline: "Your child's educator. Fully focused. Just for them.",
    description:
      "Individual tutoring sessions where the educator's complete attention is on your child. We identify gaps in understanding, address misconceptions early, and build strong academic foundations — one concept at a time.",
    features: [
      'Subject-specific expertise',
      'Weekly or flexible session scheduling',
      'Homework support included',
      'Exam preparation and revision',
      'Confidence-building techniques',
    ],
    ideal: 'Students who are falling behind, preparing for exams, or wanting to strengthen specific subjects.',
    color: 'from-amber-50 to-white',
    iconBg: 'bg-secondary/15 text-secondary',
  },
  {
    icon: Home,
    title: 'Homeschooling Support',
    tagline: 'You choose to educate at home. We help you do it well.',
    description:
      'For families who have chosen the homeschooling path, we provide expert support — from curriculum selection and lesson planning to regular assessments and structured learning schedules. You stay in control; we give you the professional backbone.',
    features: [
      'Curriculum guidance and planning',
      'Structured weekly learning schedules',
      'Regular formative assessments',
      'Co-teaching sessions available',
      'Portfolio and progress documentation',
    ],
    ideal: 'Families committed to home education who want qualified educator support alongside their own teaching.',
    color: 'from-blue-50 to-white',
    iconBg: 'bg-primary/10 text-primary',
  },
  {
    icon: Clock,
    title: 'After-School Tuition',
    tagline: 'School is done. The real growth begins.',
    description:
      "Our after-school programs give students the extra academic time and attention they need to consolidate what they've learned during the school day, tackle challenging homework, and prepare thoroughly for upcoming tests.",
    features: [
      'Targeted subject reinforcement',
      'Homework guidance and support',
      'Test and exam preparation',
      'Flexible afternoon scheduling',
      'Weekly progress summaries for parents',
    ],
    ideal: 'Students who need extra support after school hours to keep up, catch up, or get ahead.',
    color: 'from-amber-50 to-white',
    iconBg: 'bg-secondary/15 text-secondary',
  },
  {
    icon: Brain,
    title: 'Academic Coaching',
    tagline: 'Stronger habits. Sharper focus. Better results.',
    description:
      'Academic coaching goes beyond subject content to address how a student learns — time management, study habits, organization, and mindset. We work alongside students to equip them with skills that serve them for life.',
    features: [
      'Study skills and habit formation',
      'Time management and planning',
      'Exam strategy and technique',
      'Focus and motivation coaching',
      'Goal-setting and accountability',
    ],
    ideal: 'Students who are bright but struggling with organization, focus, or exam anxiety.',
    color: 'from-blue-50 to-white',
    iconBg: 'bg-primary/10 text-primary',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="py-20 bg-primary text-white" data-testid="section-services-hero">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/15 text-secondary border border-secondary/25 text-xs font-bold tracking-[0.15em] uppercase mb-5">
                What We Offer
              </span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Our Learning Programs
              </h1>
              <p className="text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
                Five focused programs, each designed to meet students exactly where they are and take them exactly where they need to go.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white" data-testid="section-services-list">
          <div className="container mx-auto px-4 md:px-6 space-y-20">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                id={service.title.toLowerCase().replace(/\s+/g, '-')}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  <div>
                    <div className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6`}>
                      <service.icon size={28} />
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">{service.title}</h2>
                    <p className="text-secondary font-semibold italic mb-5">{service.tagline}</p>
                    <p className="text-foreground/75 leading-relaxed mb-6">{service.description}</p>
                    <div className="p-4 bg-gray-50 rounded-xl border border-border/50 text-sm text-foreground/65 italic">
                      <span className="font-semibold text-primary not-italic">Ideal for: </span>
                      {service.ideal}
                    </div>
                  </div>

                  <Card className={`border border-border/50 bg-gradient-to-br ${service.color}`}>
                    <CardContent className="p-8">
                      <h3 className="font-bold text-primary mb-5">What's Included</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check size={12} className="text-primary" />
                            </div>
                            <span className="text-foreground/75 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-8 bg-primary text-white hover:bg-primary/90 font-semibold" asChild data-testid={`button-service-enroll-${i}`}>
                        <Link href="/admissions">
                          Enroll in This Program <ArrowRight size={16} className="ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {i < services.length - 1 && (
                  <div className="border-b border-border/30 mt-6"></div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-primary text-white" data-testid="section-services-cta">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-serif text-4xl font-bold mb-4">Not Sure Which Program Fits?</h2>
            <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">
              That's exactly what our free consultation is for. We will listen, assess, and recommend the right path for your child.
            </p>
            <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold px-8" asChild data-testid="button-services-cta">
              <Link href="/contact">Book a Free Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
