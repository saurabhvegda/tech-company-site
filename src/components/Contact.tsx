import { useState } from 'react';
import { Mail, Phone, Send, Calendar } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setStatus('idle');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Get in touch with us to discuss your project. We're here to help bring your vision to life
          </p>
          <a
            href="https://calendar.app.google/uwS5JosquJcnpcPk6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            <Calendar size={24} />
            Schedule a Call
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-10 text-white h-full shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:hello@yourcompany.com" className="hover:underline">
                      hello@qymaxtech.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a href="tel:+1234567890" className="hover:underline">
                      +1 (425) 214-2397
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-white/20">
                <h4 className="font-semibold mb-4">Prefer to schedule a meeting?</h4>
                <a
                  href="https://calendar.app.google/uwS5JosquJcnpcPk6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                >
                  <Calendar size={20} />
                  Book a Call
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {status === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
