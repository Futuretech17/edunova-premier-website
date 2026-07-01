import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const coreValues = [
  { name: 'Excellence', description: 'We hold ourselves and our learners to the highest standard.' },
  { name: 'Individuality', description: 'Every child\'s unique learning style is respected and nurtured.' },
  { name: 'Integrity', description: 'Honest, transparent relationships with every family we serve.' },
  { name: 'Growth', description: 'Progress — academic and personal — is always the goal.' },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white" data-testid="section-about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Who We Are</h2>
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">
                Learning That Fits Your Child
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                At Edunova Premier International Academy, we believe no two learners are the same — so why should their education be?
                We are a personalized learning academy offering one-on-one instruction, homeschooling support, and targeted academic programs designed around each student's needs, pace, and goals.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Based in Githunguri Close, Nairobi, we partner with families who want something better than a one-size-fits-all approach. Our educators are mentors who know your child by name, understand their challenges, and celebrate every step of their progress.
              </p>
            </div>

            <div className="space-y-6">
              <div className="pl-6 border-l-2 border-secondary relative">
                <div className="absolute w-3 h-3 rounded-full bg-secondary -left-[7px] top-1.5"></div>
                <h4 className="text-xl font-bold text-primary mb-2 font-serif">Our Mission</h4>
                <p className="text-foreground/70">Personalized, learner-centered education that unlocks potential, builds confidence, and prepares every student to thrive — academically and in life.</p>
              </div>
              <div className="pl-6 border-l-2 border-secondary relative">
                <div className="absolute w-3 h-3 rounded-full bg-secondary -left-[7px] top-1.5"></div>
                <h4 className="text-xl font-bold text-primary mb-2 font-serif">Our Vision</h4>
                <p className="text-foreground/70">To redefine how students learn in Kenya through tailored instruction, compassionate teaching, and a relentless focus on every individual child.</p>
              </div>
            </div>

            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-semibold" asChild data-testid="button-about-more">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <Card className="bg-muted border-none shadow-xl relative z-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -z-10"></div>
              <CardContent className="p-8 md:p-10">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0 flex items-center justify-center text-white text-2xl font-serif italic shadow-md">
                    EP
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xl">Principal's Message</h4>
                    <p className="text-sm text-foreground/60">Head of Academy, Edunova Premier</p>
                  </div>
                </div>
                <blockquote className="text-lg italic text-foreground/80 leading-relaxed relative">
                  <span className="text-5xl text-secondary/30 absolute -top-4 -left-4 font-serif">"</span>
                  Every child who walks through our doors carries unique gifts. Our role is to see those gifts clearly, nurture them patiently, and give each learner the focused attention they deserve. At Edunova, your child is never just a face in a classroom — they are the reason we teach.
                </blockquote>
              </CardContent>
            </Card>

            <div className="mt-10">
              <h4 className="text-lg font-bold text-primary mb-4 text-center lg:text-left">Our Core Values</h4>
              <div className="grid grid-cols-2 gap-3">
                {coreValues.map((value, i) => (
                  <motion.div
                    key={value.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="p-4 bg-white border border-border shadow-sm rounded-xl hover:border-secondary hover:shadow-md transition-all cursor-default"
                    title={value.description}
                  >
                    <p className="font-bold text-primary text-sm mb-1">{value.name}</p>
                    <p className="text-xs text-foreground/60">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
