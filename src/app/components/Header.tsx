import { useState } from 'react';
import { Search, Phone, Mail, MapPin, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: 'Government',
      items: ['City Council', 'Mayor\'s Office', 'Departments', 'City Charter']
    },
    {
      name: 'Services',
      items: ['Utilities', 'Permits & Licenses', 'Parks & Recreation', 'Public Works']
    },
    {
      name: 'Community',
      items: ['Events', 'News', 'Recreation Programs', 'Volunteer']
    },
    {
      name: 'Residents',
      items: ['Pay Bills', 'Report Issue', 'Trash & Recycling', 'Emergency Services']
    },
    {
      name: 'Business',
      items: ['Starting a Business', 'Business Resources', 'Economic Development']
    }
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:512-555-1234" className="flex items-center gap-2 hover:text-orange-200 transition-colors">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">(512) 555-1234</span>
              </a>
              <a href="mailto:info@cityofblanco.gov" className="flex items-center gap-2 hover:text-orange-200 transition-colors">
                <Mail className="h-4 w-4" />
                <span className="hidden md:inline">info@cityofblanco.gov</span>
              </a>
              <div className="hidden lg:flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 Main St, Blanco, TX 78606</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-orange-200 transition-colors">Accessibility</a>
              <span className="text-white/50">|</span>
              <a href="#" className="hover:text-orange-200 transition-colors">Translate</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-2xl text-white">B</span>
                </div>
                <div>
                  <h1 className="text-xl text-gray-900">City of Blanco</h1>
                  <p className="text-xs text-gray-600">Texas Hill Country</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.name} className="group relative">
                  <button className="flex items-center gap-1 px-4 py-2 text-sm text-gray-700 hover:text-primary transition-colors">
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  
                  <div className="absolute left-0 top-full hidden w-56 bg-white shadow-lg border border-gray-200 mt-0 group-hover:block">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors border-b border-gray-100 last:border-0"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </nav>

            {/* Search and Mobile Menu */}
            <div className="flex items-center gap-3">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search..."
                  className="w-48 pl-10 bg-gray-50 border-gray-300 focus:border-primary"
                />
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-gray-200 bg-white overflow-hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 space-y-4">
            <div className="relative md:hidden">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 bg-gray-50"
              />
            </div>

            <nav className="space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <div className="px-3 py-2 text-sm text-primary">{item.name}</div>
                  <div className="pl-6 space-y-1">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-primary"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
