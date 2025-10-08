import { Shield, Database, Zap, Cloud, Smartphone, Users, Target, Sparkles } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const services: Service[] = [
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    description: 'Intelligent automation powered by machine learning to streamline operations and boost productivity.',
    icon: <Zap className="h-8 w-8" />,
    features: ['ML Models', 'Chatbots', 'Workflow Automation', 'Predictive Analytics']
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Enterprise-grade security solutions protecting your digital assets with advanced threat detection and compliance.',
    icon: <Shield className="h-8 w-8" />,
    features: ['Penetration Testing', 'Security Audits', '24/7 Monitoring', 'Compliance']
  },
  {
    id: 'database-integration',
    title: 'Database Integration',
    description: 'Seamless data integration across systems with real-time synchronization and enterprise-scale performance.',
    icon: <Database className="h-8 w-8" />,
    features: ['Real-time Sync', 'Data Migration', 'API Integration', 'Analytics']
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'Modernize legacy systems and revolutionize operations with cutting-edge digital solutions.',
    icon: <Sparkles className="h-8 w-8" />,
    features: ['Legacy Migration', 'Process Automation', 'Change Management', 'Training']
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure with multi-cloud strategies for optimal performance and cost efficiency.',
    icon: <Cloud className="h-8 w-8" />,
    features: ['AWS & Azure', 'Serverless', 'DevOps', 'Kubernetes']
  },
  {
    id: 'mobile-app',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps with stunning UI/UX that users love.',
    icon: <Smartphone className="h-8 w-8" />,
    features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Launch']
  },
  {
    id: 'staff-augmentation',
    title: 'Staff Augmentation',
    description: 'Access global tech talent with vetted professionals ready to scale your team instantly.',
    icon: <Users className="h-8 w-8" />,
    features: ['Offshore Teams', 'Dedicated Devs', '60% Cost Savings', '48hr Setup']
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description: 'Expert PM services delivering projects on time with agile methodologies and proven frameworks.',
    icon: <Target className="h-8 w-8" />,
    features: ['Agile & Scrum', '98% On-Time', 'Risk Management', 'Quality Assurance']
  }
];

export default function ServicesOverview() {
  const scrollToService = (serviceId: string) => {
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-50 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-cyan-600" />
            <span className="text-sm font-semibold text-cyan-700">Comprehensive Solutions</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            End-to-end technology solutions designed to transform your business and accelerate growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => scrollToService(service.id)}
              className="group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200 hover:border-cyan-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl text-left"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-6">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-gray-100 group-hover:bg-white/10 transition-colors duration-500 border-2 border-gray-200 group-hover:border-cyan-400/30">
                  <div className="text-gray-700 group-hover:text-cyan-300 transition-colors duration-500">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-500">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 group-hover:text-gray-200 mb-4 leading-relaxed transition-colors duration-500">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 group-hover:bg-cyan-500/20 group-hover:text-cyan-200 group-hover:border group-hover:border-cyan-400/30 transition-all duration-500"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center text-sm font-semibold text-cyan-600 group-hover:text-cyan-300 transition-colors duration-500">
                  <span>Learn more</span>
                  <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
