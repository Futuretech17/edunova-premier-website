import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AdmissionsSection } from '@/components/sections/AdmissionsSection';
import { motion } from 'framer-motion';

const faqs = [
  {
    q: 'What age groups do you teach?',
    a: 'We work with learners from primary school age through secondary school — typically ages 6 to 18. Some of our homeschooling programs also accommodate younger children with parent involvement.',
  },
  {
    q: 'How quickly can my child start?',
    a: "Most students begin within one to two weeks of their initial assessment. We move quickly because we know your child's learning cannot wait.",
  },
  {
    q: 'Do sessions happen at your centre or at home?',
    a: 'We offer sessions at our Githunguri Close centre. Home visits may be arranged for homeschooling support programs on a case-by-case basis.',
  },
  {
    q: 'What subjects do you cover?',
    a: "We cover the core academic subjects — Mathematics, English, Science, and Humanities — across all levels. Specific subject availability depends on the program. Contact us to discuss your child's needs.",
  },
  {
    q: 'How do you track progress?',
    a: 'Every student receives regular progress updates. For enrolled programs, parents receive a written summary after each assessment cycle — typically monthly. We believe parents should always know exactly how their child is developing.',
  },
];

export default function Admissions() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="py-20 bg-primary text-white" data-testid="section-admissions-hero">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/15 text-secondary border border-secondary/25 text-xs font-bold tracking-[0.15em] uppercase mb-5">
                Enroll Today
              </span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Admissions
              </h1>
              <p className="text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
                Enrollment is simple and supportive. We will guide you through every step — from your first message to your child's first session.
              </p>
            </motion.div>
          </div>
        </section>

        <AdmissionsSection />

        <section className="py-20 bg-gray-50" data-testid="section-admissions-faq">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
                <p className="text-foreground/65">Everything you need to know before getting started.</p>
              </div>

              <div className="space-y-5">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="bg-white border border-border/50 rounded-xl p-6 shadow-sm"
                    data-testid={`faq-item-${i}`}
                  >
                    <h3 className="font-bold text-primary mb-2">{faq.q}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
