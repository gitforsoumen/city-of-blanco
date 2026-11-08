import { Calendar as CalendarIcon, Clock, MapPin, ArrowRight, Star } from 'lucide-react';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';

const events = [
  {
    id: 1,
    title: 'City Council Meeting',
    date: 'Nov 12, 2025',
    time: '6:00 PM',
    location: 'City Hall',
    category: 'Meeting',
    featured: true,
  },
  {
    id: 2,
    title: 'Summer Concert in the Park',
    date: 'Nov 15, 2025',
    time: '7:00 PM',
    location: 'Blanco City Park',
    category: 'Event',
    featured: false,
  },
  {
    id: 3,
    title: 'Planning Commission Meeting',
    date: 'Nov 18, 2025',
    time: '5:30 PM',
    location: 'City Hall - Conference Room A',
    category: 'Meeting',
    featured: false,
  },
  {
    id: 4,
    title: 'Community Cleanup Day',
    date: 'Nov 22, 2025',
    time: '9:00 AM',
    location: 'Meet at City Park',
    category: 'Event',
    featured: false,
  },
  {
    id: 5,
    title: 'Public Hearing - Zoning Changes',
    date: 'Nov 25, 2025',
    time: '6:30 PM',
    location: 'City Hall',
    category: 'Hearing',
    featured: false,
  },
  {
    id: 6,
    title: 'Holiday Festival',
    date: 'Nov 28, 2025',
    time: '4:00 PM',
    location: 'Downtown Blanco',
    category: 'Event',
    featured: true,
  }
];

export function EventsCalendar() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <Badge className="bg-blue-50 text-primary border-0 px-4 py-1">
              <CalendarIcon className="h-3 w-3 mr-2 inline" />
              Events Calendar
            </Badge>
          </div>
          <h2 className="text-3xl md:text-5xl text-gray-900 mb-4">
            Upcoming Events & Meetings
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed about city events, council meetings, and community gatherings
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl border border-gray-200 hover:border-primary overflow-hidden transition-all shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.16)] h-full">
                {/* Colored Top Border */}
                <div className={`h-1.5 ${
                  event.category === 'Meeting' 
                    ? 'bg-primary' 
                    : event.category === 'Event'
                    ? 'bg-accent'
                    : 'bg-amber-500'
                }`} />
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge 
                      variant="secondary" 
                      className={
                        event.category === 'Meeting' 
                          ? 'bg-blue-50 text-primary border-blue-100' 
                          : event.category === 'Event'
                          ? 'bg-orange-50 text-accent border-orange-100'
                          : 'bg-amber-50 text-amber-700 border-amber-100'
                      }
                    >
                      {event.category}
                    </Badge>
                    {event.featured && (
                      <div className="bg-yellow-50 p-1.5 rounded-full">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl text-gray-900 mb-5 group-hover:text-primary transition-colors min-h-[3.5rem] line-clamp-2">
                    {event.title}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                        <CalendarIcon className="h-4 w-4 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Date</p>
                        <p className="text-sm text-gray-900">{event.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                        <Clock className="h-4 w-4 text-accent group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Time</p>
                        <p className="text-sm text-gray-900">{event.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-800 transition-colors">
                        <MapPin className="h-4 w-4 text-gray-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Location</p>
                        <p className="text-sm text-gray-900">{event.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent hover:gap-3 transition-all group/link"
                    >
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 border-2 border-primary text-primary px-10 py-4 rounded-2xl hover:bg-primary hover:text-white transition-all shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.16)]"
          >
            View Full Calendar
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
