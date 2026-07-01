import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart, Users, Lightbulb, Shield, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Target,
    name: 'Excellence',
    description:
      'We hold ourselves and our learners to the highest standard in every session, every interaction, and every outcome.',
  },
  {
    icon: Users,
    name: 'Individuality',
    description:
      "Every child learns differently. We design our approach around each student's unique strengths, pace, and learning style.",
  },
  {
    icon: Shield,
    name: 'Integrity',
    description:
      'Honest, transparent relationships with every family we serve. We only make promises we can keep.',
  },
  {
    icon: TrendingUp,
    name: 'Growth',
    description:
      'Progress — academic, personal, and emotional — is always our measure of success.',
  },
  {
    icon: Lightbulb,
    name: 'Innovation',
    description:
      'We adapt our teaching methods to meet the needs of a changing world, keeping learners curious and capable.',
  },
  {
    icon: Heart,
    name: 'Compassion',
    description:
      'We see the whole child — not just the student. Patience, encouragement, and genuine care define how we teach.',
  },
];

const team = [
  {
    name: 'Principal & Head of Academy',
    description:
      'With over a decade of experience in learner-centered education, our principal leads every program with clarity and warmth.',
    initials: 'EP',
  },
  {
    name: 'Lead Academic Coach',
    description:
      'Specialist in personalized curriculum design, our lead coach tailors every learning plan to the individual student.',
    initials: 'AC',
  },
  {
    name: 'Homeschooling Coordinator',
    description:
      'Our coordinator partners closely with home-educating families to provide structure, resources, and ongoing support.',
    initials: 'HC',
  },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="py-20 bg-primary text-white" data-testid="section-about-hero">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/15 text-secondary border border-secondary/25 text-xs font-bold tracking-[0.15em] uppercase mb-5">
                Our Story
              </span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
                About Edunova Premier
              </h1>
              <p className="text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
                We are a personalized learning academy built on a simple belief: every learner deserves education designed specifically for them.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white" data-testid="section-about-story">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="font-serif text-4xl font-bold text-primary mb-6">Why Personalized Learning Matters</h2>
                <div className="space-y-4 text-foreground/75 leading-relaxed">
                  <p>
                    In a traditional classroom, one teacher must serve thirty different minds at once. That means some students rush through material they haven't mastered, while others wait — bored — for the class to catch up. Neither child gets what they truly need.
                  </p>
                  <p>
                    At Edunova, we took a different approach. We ask: what if every student could learn at the right pace, in the right way, with an educator who genuinely knows them? The results speak for themselves — not in certificates or rankings, but in the confidence, curiosity, and capability we see grow in every child we teach.
                  </p>
                  <p>
                    Based in Githunguri Close, Nairobi, we serve families across the city who want more than the standard offering. Whether your child attends a local school and needs targeted support, or you are educating at home and need expert guidance — Edunova is your partner in this journey.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
              >
                <Card className="border-none bg-gray-50 shadow-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <Eye className="text-secondary mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h3 className="font-serif text-xl font-bold text-primary mb-2">Our Vision</h3>
                        <p className="text-foreground/70">
                          To redefine how students learn in Kenya through tailored instruction, compassionate teaching, and a relentless focus on the individual child.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none bg-primary/5 shadow-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <Target className="text-secondary mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h3 className="font-serif text-xl font-bold text-primary mb-2">Our Mission</h3>
                        <p className="text-foreground/70">
                          Personalized, learner-centered education that unlocks potential, builds confidence, and prepares every student to thrive — academically and in life.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50" data-testid="section-about-values">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-serif text-4xl font-bold text-primary mb-4">Our Core Values</h2>
              <p className="text-foreground/70 text-lg">
                These principles guide every session, every relationship, and every decision we make.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <Card className="h-full border border-border/50 hover:border-secondary/40 hover:shadow-md transition-all bg-white">
                    <CardContent className="p-7">
                      <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5">
                        <value.icon className="text-primary" size={22} />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-primary mb-2">{value.name}</h3>
                      <p className="text-foreground/65 text-sm leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white" data-testid="section-about-team">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-serif text-4xl font-bold text-primary mb-4">The People Behind Edunova</h2>
              <p className="text-foreground/70">
                Our educators are qualified, experienced, and genuinely invested in every learner's success.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Card className="text-center border border-border/50 hover:shadow-md transition-all h-full">
                    <CardContent className="p-8">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-serif font-bold mx-auto mb-5 shadow-md">
                        {member.initials}
                      </div>
                      <h3 className="font-bold text-primary mb-3">{member.name}</h3>
                      <p className="text-sm text-foreground/65 leading-relaxed">{member.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-white" data-testid="section-about-cta">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-serif text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">
              Book a free consultation and let us show you exactly how we will support your child's learning journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold px-8" asChild data-testid="button-about-cta-apply">
                <Link href="/admissions">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold bg-transparent px-8" asChild data-testid="button-about-cta-contact">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
