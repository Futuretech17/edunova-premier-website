import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Users, UserCheck, Monitor, Shield, TrendingUp, Target } from 'lucide-react';

const features = [
  {
    title: 'One-on-One Attention',
    description: 'Every student works directly with their educator — no divided attention, no competing with thirty other children for help.',
    icon: Users,
  },
  {
    title: 'Qualified Educators',
    description: 'Our team brings real teaching experience and a genuine commitment to each learner\'s progress — not just qualifications on paper.',
    icon: UserCheck,
  },
  {
    title: 'Flexible Scheduling',
    description: 'Sessions are arranged around your family\'s schedule. Morning, afternoon, or after school — we work with your rhythm.',
    icon: Monitor,
  },
  {
    title: 'Safe, Positive Environment',
    description: 'Students make mistakes without fear. Questions are welcomed. Every step forward is acknowledged. Learning happens here.',
    icon: Shield,
  },
  {
    title: 'Measurable Progress',
    description: 'We track and report on every student\'s growth. Parents always know exactly how their child is advancing — no guessing.',
    icon: TrendingUp,
  },
  {
    title: 'Goal-Oriented Teaching',
    description: 'We begin with the end in mind — whether that\'s passing an exam, catching up, or accelerating beyond grade level.',
    icon: Target,
  },
];

export function WhyChooseUsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 bg-white" data-testid="section-why-choose-us">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">The Edunova Difference</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight">
              Why Families Choose Us
            </h3>
          </div>
          <p className="text-lg text-foreground/70 max-w-md">
            We are not a tutoring centre that treats every student the same. We are a learning partner that takes your child's specific situation seriously.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border border-border/50 hover:border-secondary/50 bg-gray-50/50 hover:bg-white transition-all duration-300 h-full group shadow-sm hover:shadow-md">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-primary/5 group-hover:bg-secondary/10 flex items-center justify-center mb-6 transition-colors duration-300">
                    <feature.icon className="text-primary group-hover:text-secondary transition-colors duration-300" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3 font-serif">{feature.title}</h4>
                  <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
