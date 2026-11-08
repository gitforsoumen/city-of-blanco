import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

const newsItems = [
  {
    id: 1,
    title: 'New Community Center Construction Begins',
    excerpt: 'Groundbreaking ceremony marks the start of the $5M community center project that will serve residents for decades to come.',
    category: 'Development',
    date: 'Nov 1, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1573181759662-1c146525b21f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYyMjMzNjg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    title: 'City Council Approves 2026 Budget',
    excerpt: 'The new budget prioritizes infrastructure improvements, public safety, and community programs.',
    category: 'Government',
    date: 'Oct 28, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1639089599556-d1b04651d83a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwaGFsbCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjIxODQyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    title: 'Fall Festival This Weekend',
    excerpt: 'Join us for food, music, and family fun at the annual Blanco Fall Festival in downtown.',
    category: 'Events',
    date: 'Oct 25, 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1569292567777-e5d61a759322?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBwZW9wbGUlMjBoYXBweXxlbnwxfHx8fDE3NjIxOTY1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  }
];

const announcements = [
  {
    id: 1,
    title: 'City Offices Closed for Thanksgiving',
    date: 'Nov 3, 2025',
    category: 'Announcement',
  },
  {
    id: 2,
    title: 'Street Sweeping Schedule Update',
    date: 'Oct 30, 2025',
    category: 'Announcement',
  },
  {
    id: 3,
    title: 'Free COVID-19 Testing Available',
    date: 'Oct 27, 2025',
    category: 'Health',
  },
  {
    id: 4,
    title: 'New Recycling Program Starting',
    date: 'Oct 24, 2025',
    category: 'Environment',
  }
];

export function NewsUpdates() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            News & Announcements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest news and updates from the city
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured News */}
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.16)] transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="secondary" className="bg-orange-50 text-accent">
                    {item.category}
                  </Badge>
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>
                
                <h3 className="text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="h-3 w-3" />
                    <span>{item.readTime}</span>
                  </div>
                  <a href="#" className="inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Announcements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8 shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
        >
          <h3 className="text-2xl text-gray-900 mb-6">Recent Announcements</h3>
          
          <div className="space-y-3">
            {announcements.map((announcement, index) => (
              <motion.a
                key={announcement.id}
                href="#"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-200 hover:border-primary transition-all shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] group"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 group-hover:text-primary transition-colors">
                      {announcement.title}
                    </h4>
                    <div className="flex items-center gap-3 mt-1">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-xs">
                        {announcement.category}
                      </Badge>
                      <span className="text-xs text-gray-500">{announcement.date}</span>
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-accent text-white px-10 py-4 rounded-2xl hover:bg-orange-700 transition-colors shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.20)]"
          >
            View All News
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
