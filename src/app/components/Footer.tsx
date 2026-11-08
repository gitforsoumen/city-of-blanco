import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from 'lucide-react';
import { Separator } from './ui/separator';

const footerLinks = {
  government: [
    { name: 'City Council', href: '#' },
    { name: 'Mayor\'s Office', href: '#' },
    { name: 'Departments', href: '#' },
    { name: 'City Charter', href: '#' },
    { name: 'Employment', href: '#' }
  ],
  services: [
    { name: 'Pay Bills Online', href: '#' },
    { name: 'Report an Issue', href: '#' },
    { name: 'Permits & Licenses', href: '#' },
    { name: 'Trash & Recycling', href: '#' },
    { name: 'Public Safety', href: '#' }
  ],
  residents: [
    { name: 'Parks & Recreation', href: '#' },
    { name: 'Library', href: '#' },
    { name: 'Schools', href: '#' },
    { name: 'Health Services', href: '#' },
    { name: 'Senior Services', href: '#' }
  ],
  resources: [
    { name: 'News & Events', href: '#' },
    { name: 'Public Records', href: '#' },
    { name: 'GIS Maps', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Contact Us', href: '#' }
  ]
};

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Youtube, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-lg text-white">B</span>
                </div>
                <div>
                  <h3 className="text-lg">City of Blanco</h3>
                  <p className="text-xs text-gray-400">Texas Hill Country</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <div className="text-gray-300">
                  <div>Blanco City Hall</div>
                  <div>123 Main Street</div>
                  <div>Blanco, TX 78606</div>
                </div>
              </div>
              
              <a href="tel:512-555-1234" className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors">
                <Phone className="h-4 w-4 text-accent" />
                <span>(512) 555-1234</span>
              </a>
              
              <a href="mailto:info@cityofblanco.gov" className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors">
                <Mail className="h-4 w-4 text-accent" />
                <span>info@cityofblanco.gov</span>
              </a>
              
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-accent mt-0.5" />
                <div className="text-gray-300">
                  <div>Mon-Fri: 8:00 AM - 5:00 PM</div>
                  <div>Sat-Sun: Closed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Government Links */}
          <div>
            <h3 className="text-lg mb-4">Government</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.government.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Residents Links */}
          <div>
            <h3 className="text-lg mb-4">Residents</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.residents.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} City of Blanco, Texas. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
