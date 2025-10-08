import { Shield, Database, Sparkles, Zap, Cloud, Smartphone, Users, Target, Grid3x3 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ServiceNavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: ServiceNavItem[] = [
  { id: 'all-services', label: 'All Services', icon: <Grid3x3 className="h-4 w-4" /> },
  { id: 'ai-automation', label: 'AI', icon: <Zap className="h-4 w-4" /> },
  { id: 'cybersecurity', label: 'Security', icon: <Shield className="h-4 w-4" /> },
  { id: 'database-integration', label: 'Database', icon: <Database className="h-4 w-4" /> },
  { id: 'digital-transformation', label: 'Transform', icon: <Sparkles className="h-4 w-4" /> },
  { id: 'cloud-solutions', label: 'Cloud', icon: <Cloud className="h-4 w-4" /> },
  { id: 'mobile-app', label: 'Mobile', icon: <Smartphone className="h-4 w-4" /> },
  { id: 'staff-augmentation', label: 'Staff', icon: <Users className="h-4 w-4" /> },
  { id: 'project-management', label: 'Projects', icon: <Target className="h-4 w-4" /> }
];

export default function ServicesNav() {
  const [activeService, setActiveService] = useState('all-services');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveService(id);
    }
  };

  return (
    <nav className={`sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-300 ${isSticky ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-1 overflow-x-auto py-3 scrollbar-hide">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                activeService === item.id
                  ? 'text-teal-700 bg-teal-50 border-2 border-teal-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border-2 border-transparent'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
