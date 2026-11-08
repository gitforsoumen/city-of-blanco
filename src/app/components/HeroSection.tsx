import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CreditCard, FileText, Calendar, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1573181759662-1c146525b21f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYyMjMzNjg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Welcome to the City of Blanco',
    subtitle: 'Serving our community with excellence and integrity',
  },
  {
    image: 'https://images.unsplash.com/photo-1639089599556-d1b04651d83a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwaGFsbCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjIxODQyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Building a Better Community Together',
    subtitle: 'Your local government working for you',
  },
  {
    image: 'https://images.unsplash.com/photo-1569292567777-e5d61a759322?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBwZW9wbGUlMjBoYXBweXxlbnwxfHx8fDE3NjIxOTY1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Join Our Thriving Community',
    subtitle: 'Experience the heart of the Texas Hill Country',
  }
];

const quickActions = [
  {
    icon: CreditCard,
    title: 'Pay Bills',
    description: 'Pay utilities and taxes online'
  },
  {
    icon: FileText,
    title: 'Report Issue',
    description: 'Submit service requests'
  },
  {
    icon: Calendar,
    title: 'Events',
    description: 'View community calendar'
  },
  {
    icon: Phone,
    title: 'Contact Us',
    description: 'Get in touch with us'
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative bg-white">
      {/* Hero Slider */}
      <div className="relative h-[500px] md:h-[600px] bg-gray-900">
        <ImageWithFallback
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="h-full w-full object-cover opacity-60"
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/50" />
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-4 text-4xl md:text-6xl text-white"
              >
                {slides[currentSlide].title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-white/90 mb-8"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Button size="lg" className="bg-accent text-white hover:bg-orange-700">
                  Learn More
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary bg-white hover:bg-primary hover:text-white hover:border-primary">
                  City Services
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-colors"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-colors"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Action Cards */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.a
                  key={action.title}
                  href="#"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.16)] h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
                          <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-gray-900 mb-1.5 group-hover:text-primary transition-colors">
                          {action.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}