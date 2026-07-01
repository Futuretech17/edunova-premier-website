import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function CampusSection() {
  return (
    <section id="campus" className="py-24 bg-primary text-white overflow-hidden" data-testid="section-campus">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Our Campus</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            World-Class Facilities
          </h3>
          <p className="text-lg text-white/80">
            Our purpose-built campus in Kilimani provides a secure, inspiring, and fully-equipped environment where students can explore their passions.
          </p>
        </div>

        <div className="space-y-24">
          {/* Feature 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-video shadow-2xl">
                <img 
                  src="/images/classroom.png" 
                  alt="Modern classroom" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 space-y-6"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 text-secondary mb-2">
                <span className="font-serif text-xl font-bold">01</span>
              </div>
              <h4 className="font-serif text-3xl font-bold">Smart Classrooms & Innovation Labs</h4>
              <p className="text-white/70 text-lg leading-relaxed">
                Spacious, naturally lit classrooms equipped with interactive displays and modern educational technology. Our dedicated computer and innovation labs provide hands-on experience in coding, robotics, and digital design.
              </p>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Interactive Smart Boards in every room</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> High-speed campus-wide connectivity</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Specialized STEM and Robotics equipment</li>
              </ul>
            </motion.div>
          </div>

          {/* Feature 2 (Reversed) */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-video shadow-2xl">
                <img 
                  src="/images/sports-field.png" 
                  alt="Sports field" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 space-y-6"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 text-secondary mb-2">
                <span className="font-serif text-xl font-bold">02</span>
              </div>
              <h4 className="font-serif text-3xl font-bold">Extensive Sports Facilities</h4>
              <p className="text-white/70 text-lg leading-relaxed">
                Physical wellbeing is core to our holistic approach. Our expansive sports facilities support a wide range of athletic pursuits, encouraging teamwork, discipline, and healthy competition.
              </p>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Multi-purpose athletics field</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Basketball and tennis courts</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Indoor gymnasium and fitness center</li>
              </ul>
            </motion.div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-video shadow-2xl">
                <img 
                  src="/images/library.png" 
                  alt="Modern library" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 space-y-6"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 text-secondary mb-2">
                <span className="font-serif text-xl font-bold">03</span>
              </div>
              <h4 className="font-serif text-3xl font-bold">Library & Creative Studios</h4>
              <p className="text-white/70 text-lg leading-relaxed">
                Quiet spaces for focused research and vibrant studios for artistic expression. We provide environments that cater to both analytical study and creative exploration.
              </p>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Comprehensive print and digital library</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Fully-equipped science laboratories</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Dedicated visual arts and music studios</li>
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Button size="lg" variant="outline" className="border-white text-primary bg-white hover:bg-white/90 hover:text-primary font-semibold px-8" asChild>
            <a href="#contact">Schedule a Campus Visit</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
