import { Github, Linkedin, Twitter, Mail, Box } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <button
              onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
            >
              <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Box className="text-white" size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                QymaxTech
              </h3>
            </button>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              We transform visions into digital reality. Building exceptional web experiences that drive growth and create lasting impact for businesses worldwide.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:hello@qymaxtech.com"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('all-services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('ai-automation')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-400 transition-colors"
                >
                  AI Automation
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('cybersecurity')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-400 transition-colors"
                >
                  Cybersecurity
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('cloud-solutions')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-400 transition-colors"
                >
                  Cloud Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('mobile-app')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-400 transition-colors"
                >
                  Mobile Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('database-integration')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-400 transition-colors"
                >
                  Database Integration
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('digital-transformation')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-400 transition-colors"
                >
                  Digital Transformation
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('project-management')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-400 transition-colors"
                >
                  Project Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('staff-augmentation')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-400 transition-colors"
                >
                  Staff Augmentation
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} QymaxTech. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
