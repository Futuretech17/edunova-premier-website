import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { User, BookOpen, Home, Clock, Brain, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: User,
    title: 'Personalized Learning',
    description:
      'A fully customized education plan built around your child\'s strengths, learning style, and goals. No templates — just teaching that fits.',
    color: 'bg-blue-50 text-primary',
  },
  {
    icon: BookOpen,
    title: 'One-on-One Tutoring',
    description:
      'Focused, individual sessions where your child gets 100% of the educator\'s attention. Fast progress, real results, and growing confidence.',
    color: 'bg-amber-50 text-secondary',
  },
  {
    icon: Home,
    title: 'Homeschooling Support',
    description:
      'Expert guidance for parents educating at home. We provide structure, curriculum planning, and a qualified educator to support your journey.',
    color: 'bg-blue-50 text-primary',
  },
  {
    icon: Clock,
    title: 'After-School Tuition',
    description:
      'Extra academic support after school hours for students who need reinforcement, exam preparation, or subject-specific help.',
    color: 'bg-amber-50 text-secondary',
  },
  {
    icon: Brain,
    title: 'Academic Coaching',
    description:
      'Targeted coaching to address weak areas, build study habits, and develop the confidence that drives long-term academic success.',
    color: 'bg-blue-50 text-primary',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gray-50" data-testid="section-services">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">What We Offer</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Learning Programs
          </h3>
          <p className="text-lg text-foreground/70">
            Whether your child needs one-on-one support, a homeschooling framework, or after-school enrichment — we have a program designed around their needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <Card className="h-full border border-border/50 hover:border-secondary/40 hover:shadow-lg transition-all duration-300 group bg-white">
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={26} />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-primary mb-3">{service.title}</h4>
                  <p className="text-foreground/70 leading-relaxed text-sm">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-block bg-primary rounded-2xl px-10 py-8 text-white max-w-2xl">
            <p className="font-serif text-2xl font-bold mb-3">
              "Start your child's personalized learning journey today."
            </p>
            <p className="text-white/75 mb-6 text-sm">Talk to us about what your child needs — consultation is free.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="bg-secondary text-primary hover:bg-secondary/90 font-bold" asChild data-testid="button-services-apply">
                <Link href="/admissions">Apply Now <ArrowRight size={16} className="ml-1" /></Link>
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold bg-transparent" asChild data-testid="button-services-learn">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
