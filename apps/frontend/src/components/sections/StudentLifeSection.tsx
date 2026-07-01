import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Music, Palette, Trophy, Cpu, Mic, HeartHandshake } from 'lucide-react';

const activities = [
  {
    title: 'Sports & Athletics',
    description: 'Competitive and recreational sports promoting physical fitness, teamwork, and sportsmanship.',
    icon: Trophy
  },
  {
    title: 'Music Programme',
    description: 'Vocal and instrumental instruction, school choir, and ensemble performances.',
    icon: Music
  },
  {
    title: 'Performing Arts',
    description: 'Drama, theater productions, and dance to build confidence and expressive communication.',
    icon: Palette
  },
  {
    title: 'Robotics & STEM',
    description: 'Hands-on clubs focusing on coding, engineering challenges, and technological innovation.',
    icon: Cpu
  },
  {
    title: 'Leadership Programmes',
    description: 'Student council, debate club, and mentorship opportunities to develop future leaders.',
    icon: Mic
  },
  {
    title: 'Community Service',
    description: 'Local outreach initiatives that instill empathy, social responsibility, and civic duty.',
    icon: HeartHandshake
  }
];

export function StudentLifeSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <section id="student-life" className="py-24 bg-muted/30" data-testid="section-student-life">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Beyond the Classroom</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Vibrant Student Life
          </h3>
          <p className="text-lg text-foreground/70">
            Education at Edunova extends far beyond academics. Our diverse extracurricular programmes ensure students develop varied interests and well-rounded character.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {activities.map((activity, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden bg-white">
                <CardContent className="p-8 flex flex-col items-center text-center relative z-10">
                  {/* Decorative background shape */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                  
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <activity.icon className="text-primary group-hover:text-white transition-colors duration-300" size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3 font-serif">{activity.title}</h4>
                  <p className="text-foreground/70">{activity.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
