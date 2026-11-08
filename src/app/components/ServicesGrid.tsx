import {
  Droplets,
  FileCheck,
  Trees,
  Shield,
  Building2,
  Trash2,
  MapPin,
  Users,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: Droplets,
    title: 'Water & Utilities',
    description: 'Pay bills, report issues, and manage your utility services',
    link: '#'
  },
  {
    icon: FileCheck,
    title: 'Permits & Licenses',
    description: 'Apply for building permits, business licenses, and more',
    link: '#'
  },
  {
    icon: Trees,
    title: 'Parks & Recreation',
    description: 'Explore parks, trails, and community programs',
    link: '#'
  },
  {
    icon: Shield,
    title: 'Public Safety',
    description: 'Police, fire, and emergency services information',
    link: '#'
  },
  {
    icon: Building2,
    title: 'Planning & Zoning',
    description: 'Development and land use information',
    link: '#'
  },
  {
    icon: Trash2,
    title: 'Waste Management',
    description: 'Trash collection, recycling, and bulk pickup schedules',
    link: '#'
  },
  {
    icon: MapPin,
    title: 'Streets & Infrastructure',
    description: 'Report potholes and road maintenance issues',
    link: '#'
  },
  {
    icon: Users,
    title: 'Community Services',
    description: 'Senior programs, health services, and community support',
    link: '#'
  }
];

export function ServicesGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            City Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quick access to essential city services and departments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.title}
                href={service.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl border border-gray-200 hover:border-primary p-6 transition-all shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.16)] group"
              >
                <div className="mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-primary transition-colors"
                  >
                    <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                  </motion.div>
                </div>
                <h3 className="text-lg text-gray-900 mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {service.description}
                </p>
              </motion.a>
            );
          })}
        </div>

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
            View All Services
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
