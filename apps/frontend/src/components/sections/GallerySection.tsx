import { motion } from 'framer-motion';

const images = [
  { src: '/images/gallery-collaborating.png', alt: 'Students collaborating', className: 'md:col-span-2 md:row-span-2' },
  { src: '/images/gallery-science.png', alt: 'Science lab', className: 'md:col-span-1 md:row-span-1' },
  { src: '/images/gallery-arts.png', alt: 'Arts studio', className: 'md:col-span-1 md:row-span-2' },
  { src: '/images/gallery-event.png', alt: 'School event', className: 'md:col-span-1 md:row-span-1' },
];

export function GallerySection() {
  return (
    <section className="py-24 bg-white" data-testid="section-gallery">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Campus Life</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            A Glimpse into Edunova
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4 max-w-6xl mx-auto">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative rounded-xl overflow-hidden group ${img.className}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
