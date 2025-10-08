import { Menu, X, ChevronDown, Box, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: 'All Services', id: 'all-services' },
    { name: 'AI Automation', id: 'ai-automation' },
    { name: 'Cybersecurity', id: 'cybersecurity' },
    { name: 'Database Integration', id: 'database-integration' },
    { name: 'Digital Transformation', id: 'digital-transformation' },
    { name: 'Cloud Solutions', id: 'cloud-solutions' },
    { name: 'Mobile App Development', id: 'mobile-app' },
    { name: 'Staff Augmentation', id: 'staff-augmentation' },
    { name: 'Project Management', id: 'project-management' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setServicesOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Box className="text-white" size={24} strokeWidth={2.5} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                QymaxTech
              </h1>
            </button>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </button>
              <div className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {servicesOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setServicesOpen(false)}
                    />
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 border z-20">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => scrollToSection(service.id)}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {service.name}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
              <a
                href="https://calendar.app.google/uwS5JosquJcnpcPk6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition-colors font-medium flex items-center gap-2"
              >
                <Calendar size={18} />
                Book a Call
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors font-medium"
            >
              Home
            </button>
            <div className="border-t border-b py-1">
              <div className="px-3 py-2 text-sm font-semibold text-gray-500">Services</div>
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => scrollToSection(service.id)}
                  className="block w-full text-left px-6 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {service.name}
                </button>
              ))}
            </div>
            <a
              href="https://calendar.app.google/uwS5JosquJcnpcPk6"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-3 py-2 bg-cyan-500 text-white hover:bg-cyan-600 rounded-md transition-colors font-medium flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <Calendar size={18} />
              Book a Call
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md transition-colors font-medium"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
