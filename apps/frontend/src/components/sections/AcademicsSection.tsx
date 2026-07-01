import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, GraduationCap, Compass, Lightbulb, ArrowRight } from 'lucide-react';

const programmes = [
  {
    title: 'Early Years',
    age: 'Ages 2–6',
    description: 'Foundation years of play-based discovery, social development, and early literacy in a nurturing environment.',
    icon: Compass,
    color: 'bg-blue-50 text-blue-600 border-blue-200'
  },
  {
    title: 'Primary School',
    age: 'Ages 6–12',
    description: 'Building strong academic foundations with curiosity-led learning, fostering independence and critical thinking.',
    icon: BookOpen,
    color: 'bg-emerald-50 text-emerald-600 border-emerald-200'
  },
  {
    title: 'Junior Secondary',
    age: 'Ages 12–15',
    description: 'Deepening critical thinking, creativity, and academic breadth as students discover their unique passions.',
    icon: Lightbulb,
    color: 'bg-amber-50 text-amber-600 border-amber-200'
  },
  {
    title: 'Senior School',
    age: 'Ages 15–18',
    description: 'Preparing learners for university and global opportunities with rigorous academics and leadership development.',
    icon: GraduationCap,
    color: 'bg-indigo-50 text-indigo-600 border-indigo-200'
  }
];

export function AcademicsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="academics" className="py-24 bg-muted/50" data-testid="section-academics">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">The Academic Journey</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Pathways to Excellence
          </h3>
          <p className="text-lg text-foreground/70">
            Our progressive curriculum is designed to challenge and inspire at every stage of development, ensuring a seamless transition from early childhood to young adulthood.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {programmes.map((prog) => (
            <motion.div key={prog.title} variants={itemVariants}>
              <Card className="h-full border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white group">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${prog.color}`}>
                    <prog.icon size={28} />
                  </div>
                  <div className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-xs font-bold mb-4 w-fit">
                    {prog.age}
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-3 font-serif group-hover:text-secondary transition-colors">{prog.title}</h4>
                  <p className="text-foreground/70 flex-grow mb-6">{prog.description}</p>
                  <a href="#" className="flex items-center text-primary font-semibold text-sm hover:text-secondary transition-colors group/link mt-auto w-fit">
                    Learn More <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Pull Quote Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-2xl p-8 md:p-12 relative overflow-hidden text-center max-w-5xl mx-auto shadow-xl"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary/20 via-secondary to-secondary/20"></div>
          <p className="font-serif text-2xl md:text-3xl text-white italic leading-relaxed">
            "Preparing learners for lifelong success through academic excellence and character development."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
