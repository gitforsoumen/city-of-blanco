import { Send, Search, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { motion } from 'motion/react';

const recentRequests = [
  {
    id: '#2845',
    type: 'Pothole Repair',
    status: 'In Progress',
    statusColor: 'text-amber-600 bg-amber-50',
    icon: Clock
  },
  {
    id: '#2844',
    type: 'Streetlight Out',
    status: 'Completed',
    statusColor: 'text-emerald-600 bg-emerald-50',
    icon: CheckCircle2
  },
  {
    id: '#2843',
    type: 'Graffiti Removal',
    status: 'Pending',
    statusColor: 'text-orange-600 bg-orange-50',
    icon: AlertCircle
  }
];

export function CitizenRequests() {
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
            Report an Issue
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Submit service requests and track their status
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Submit Request Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl border border-gray-200 p-8 shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
          >
            <h3 className="text-xl text-gray-900 mb-2">Submit a Request</h3>
            <p className="text-sm text-gray-600 mb-6">
              Report non-emergency issues in your neighborhood
            </p>

            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="request-type">Request Type</Label>
                <Select>
                  <SelectTrigger id="request-type" className="bg-white">
                    <SelectValue placeholder="Select a request type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pothole">Pothole Repair</SelectItem>
                    <SelectItem value="streetlight">Streetlight Out</SelectItem>
                    <SelectItem value="graffiti">Graffiti Removal</SelectItem>
                    <SelectItem value="sidewalk">Sidewalk Repair</SelectItem>
                    <SelectItem value="tree">Tree Maintenance</SelectItem>
                    <SelectItem value="other">Other Issue</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  type="text"
                  placeholder="Street address or nearest intersection"
                  className="bg-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Please provide details about the issue..."
                  rows={4}
                  className="bg-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Contact Email (Optional)</Label>
                <Input
                  id="contact"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-white"
                />
              </div>

              <Button type="button" className="w-full bg-accent hover:bg-orange-700">
                <Send className="h-4 w-4 mr-2" />
                Submit Request
              </Button>
            </form>
          </motion.div>

          {/* Track Request & Recent */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Track Request */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
              <h3 className="text-xl text-gray-900 mb-2">Track Your Request</h3>
              <p className="text-sm text-gray-600 mb-6">
                Enter your tracking number to check status
              </p>

              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Enter tracking number (e.g., #2845)"
                  className="bg-white"
                />
                <Button className="bg-primary hover:bg-blue-800">
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Recent Requests */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
              <h3 className="text-xl text-gray-900 mb-2">Recent Requests</h3>
              <p className="text-sm text-gray-600 mb-6">
                Latest citizen service requests
              </p>

              <div className="space-y-3">
                {recentRequests.map((request) => {
                  const Icon = request.icon;
                  return (
                    <div
                      key={request.id}
                      className="border border-gray-200 rounded-2xl p-4 hover:border-primary transition-all shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Icon className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm text-gray-900">{request.type}</div>
                            <div className="text-xs text-gray-500">{request.id}</div>
                          </div>
                        </div>
                        <span className={`text-xs px-3 py-1 rounded-full ${request.statusColor}`}>
                          {request.status}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
