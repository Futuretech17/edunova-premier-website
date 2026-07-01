import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Parent of a Year 5 Student',
    text: 'Before Edunova, my daughter dreaded Maths. After just two months of one-on-one sessions, she started completing her homework on her own and asking to do extra practice. The change in her confidence was the most important thing for us as a family.',
    initials: 'SM',
  },
  {
    name: 'James K.',
    role: 'Parent of a Year 8 Student',
    text: 'We tried group tuition before and it never quite worked — our son would still come home confused. At Edunova, the educator works at his pace and explains things in ways that click for him specifically. His report card has improved consistently since we started.',
    initials: 'JK',
  },
  {
    name: 'Amina W.',
    role: 'Parent using Homeschooling Support',
    text: 'Edunova gave our homeschooling journey the structure we were missing. The coordinator helped us build a proper weekly schedule and provided materials that actually match where our daughter is — not just her age. It has made a genuine difference.',
    initials: 'AW',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-primary text-white" data-testid="section-testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Parent Voices</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            What Families Say
          </h3>
          <p className="text-white/65">
            Real accounts from parents whose children have gone through our programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="bg-white/5 border-white/10 text-white h-full relative overflow-hidden backdrop-blur-sm">
                <Quote className="absolute top-6 right-6 text-white/8" size={64} />
                <CardContent className="p-8 relative z-10 flex flex-col h-full">
                  <p className="text-white/80 italic leading-relaxed mb-8 flex-grow">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-secondary text-primary font-bold flex items-center justify-center text-sm flex-shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{t.name}</h4>
                      <p className="text-xs text-secondary">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
