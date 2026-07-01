import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Tag } from 'lucide-react';

const posts = [
  {
    title: 'Why One-on-One Teaching Produces Better Results Than Classroom Learning',
    excerpt:
      "When a student gets 100% of their educator's attention, the pace adjusts to them — not to the class. Here is what the research says, and what we observe every day at Edunova.",
    category: 'Personalized Learning',
    readTime: '4 min read',
    date: 'June 10, 2026',
    featured: true,
  },
  {
    title: 'How to Improve Your Child\'s Grades Without Overwhelming Them',
    excerpt:
      'Consistent small improvements, well-targeted support, and a positive approach to mistakes make more difference than marathon study sessions. Here\'s a practical guide for parents.',
    category: 'Study Tips',
    readTime: '5 min read',
    date: 'June 3, 2026',
    featured: false,
  },
  {
    title: 'The Benefits of Personalized Learning: What Nairobi Parents Should Know',
    excerpt:
      'More families in Nairobi are choosing personalized learning over traditional schooling alone. We explore why, and what to look for when evaluating a personalized learning provider.',
    category: 'Personalized Learning',
    readTime: '6 min read',
    date: 'May 28, 2026',
    featured: false,
  },
  {
    title: 'A Parent\'s Guide to Homeschooling in Kenya: Getting Started Right',
    excerpt:
      'Homeschooling is legal in Kenya and increasingly popular among families who want more control over their child\'s education. Here is what you need to know before you begin.',
    category: 'Homeschooling',
    readTime: '7 min read',
    date: 'May 20, 2026',
    featured: false,
  },
  {
    title: 'Exam Season Survival: Practical Strategies for Students and Parents',
    excerpt:
      'Exam anxiety is real, and it affects performance. Our educators share the techniques they use with students to stay calm, study smarter, and walk into the exam room prepared.',
    category: 'Study Tips',
    readTime: '5 min read',
    date: 'May 12, 2026',
    featured: false,
  },
  {
    title: 'Signs Your Child Might Benefit from Academic Coaching',
    excerpt:
      'There is a difference between a child who is struggling and a child who simply needs the right kind of support. These signs suggest academic coaching could make a real difference.',
    category: 'Academic Coaching',
    readTime: '4 min read',
    date: 'May 5, 2026',
    featured: false,
  },
];

const categories = ['All', 'Personalized Learning', 'Study Tips', 'Homeschooling', 'Academic Coaching'];

const categoryColors: Record<string, string> = {
  'Personalized Learning': 'bg-blue-100 text-primary',
  'Study Tips': 'bg-amber-100 text-amber-800',
  'Homeschooling': 'bg-green-100 text-green-800',
  'Academic Coaching': 'bg-purple-100 text-purple-800',
};

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="py-20 bg-primary text-white" data-testid="section-blog-hero">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/15 text-secondary border border-secondary/25 text-xs font-bold tracking-[0.15em] uppercase mb-5">
                Insights
              </span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Learning Resources
              </h1>
              <p className="text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
                Practical advice, learning strategies, and education insights for parents and students navigating the Nairobi school landscape.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white" data-testid="section-blog-posts">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-1.5 rounded-full border border-border text-sm font-medium text-foreground/70 hover:border-primary hover:text-primary transition-colors cursor-pointer"
                  data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {cat}
                </span>
              ))}
            </div>

            {posts[0] && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-10"
              >
                <Card className="border border-border/50 hover:shadow-lg transition-all overflow-hidden bg-gradient-to-r from-primary/5 to-white" data-testid="blog-post-featured">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-secondary text-primary">Featured</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[posts[0].category] || 'bg-gray-100 text-gray-700'}`}>
                        <Tag size={11} className="inline mr-1" />{posts[0].category}
                      </span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4 leading-snug">
                      {posts[0].title}
                    </h2>
                    <p className="text-foreground/70 text-lg leading-relaxed mb-6 max-w-3xl">
                      {posts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-foreground/50">
                      <span>{posts[0].date}</span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1"><Clock size={13} /> {posts[0].readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.slice(1).map((post, i) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <Card className="h-full border border-border/50 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer group" data-testid={`blog-post-${i}`}>
                    <CardContent className="p-6 flex flex-col h-full">
                      <span className={`self-start px-3 py-1 rounded-full text-xs font-medium mb-4 ${categoryColors[post.category] || 'bg-gray-100 text-gray-700'}`}>
                        <Tag size={11} className="inline mr-1" />{post.category}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-primary mb-3 leading-snug group-hover:text-secondary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-foreground/65 text-sm leading-relaxed mb-6 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-foreground/45 mt-auto pt-4 border-t border-border/30">
                        <span>{post.date}</span>
                        <span>&bull;</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 border-t border-border/30" data-testid="section-blog-newsletter">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-xl">
            <h2 className="font-serif text-3xl font-bold text-primary mb-3">Get New Posts by Email</h2>
            <p className="text-foreground/65 mb-6">
              Practical education insights delivered to your inbox. No spam — just useful content for parents.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()} data-testid="form-blog-subscribe">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                data-testid="input-blog-email"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-secondary text-primary font-bold hover:bg-secondary/90 transition-colors text-sm"
                data-testid="button-blog-subscribe"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
