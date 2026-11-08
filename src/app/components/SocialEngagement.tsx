import { useState } from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { motion } from 'motion/react';

export function SocialEngagement() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing:', email);
  };

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#', color: 'hover:bg-orange-600' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:bg-orange-600' },
    { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:bg-orange-600' },
    { icon: Youtube, label: 'YouTube', href: '#', color: 'hover:bg-orange-600' },
  ];

  return (
    <section className="py-16 bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Newsletter Subscription */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Stay Connected
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Subscribe to receive the latest news, events, and important updates from the City of Blanco
            </p>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email Address</Label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 h-12 bg-white text-gray-900 border-white"
                      required
                    />
                  </div>
                  <Button type="submit" className="bg-accent text-white hover:bg-orange-700 h-12 px-6">
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox id="terms" className="bg-white border-white" />
                <label
                  htmlFor="terms"
                  className="text-sm text-blue-100"
                >
                  I agree to receive email communications from the City of Blanco
                </label>
              </div>
            </form>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl mb-6">Follow Us</h3>
            <p className="text-blue-100 mb-8">
              Connect with us on social media for real-time updates and community engagement
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`flex flex-col items-center justify-center p-6 bg-white/10 rounded-lg ${social.color} transition-colors`}
                  >
                    <Icon className="h-8 w-8 mb-2" />
                    <span className="text-sm">{social.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
