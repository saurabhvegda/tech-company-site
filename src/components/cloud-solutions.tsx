import { Cloud, CheckCircle, Shield, DollarSign, Clock } from 'lucide-react';

export default function CloudSolutions() {
  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "50% Cost Reduction",
      description: "Reduce infrastructure costs through optimized cloud architecture and resource management."
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Infinite Scalability",
      description: "Scale your applications seamlessly to handle any traffic volume or demand."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with compliance certifications and automated monitoring."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "99.9% Uptime",
      description: "Reliable cloud infrastructure with automatic failover and disaster recovery."
    }
  ];

  const services = [
    {
      title: "AWS Migration",
      description: "Complete migration to Amazon Web Services with minimal downtime and optimized architecture for maximum performance.",
      features: ["Infrastructure Assessment", "Migration Strategy", "Data Transfer", "Performance Optimization"]
    },
    {
      title: "Azure Solutions",
      description: "Microsoft Azure cloud implementation and optimization tailored to enterprise needs and hybrid environments.",
      features: ["Azure DevOps", "Active Directory", "SQL Server Migration", "Hybrid Solutions"]
    },
    {
      title: "Serverless Architecture",
      description: "Build and deploy serverless applications for maximum efficiency, automatic scaling, and reduced infrastructure costs.",
      features: ["Lambda Functions", "API Gateway", "Auto-scaling", "Cost Optimization"]
    },
    {
      title: "DevOps Automation",
      description: "Streamlined deployment pipelines and infrastructure as code for faster, more reliable software delivery.",
      features: ["CI/CD Pipelines", "Container Orchestration", "Monitoring", "Security Scanning"]
    }
  ];

  const process = [
    {
      step: "Assessment",
      description: "Analyze your current infrastructure and identify cloud migration opportunities"
    },
    {
      step: "Strategy",
      description: "Develop a comprehensive cloud migration plan with timelines and budgets"
    },
    {
      step: "Migration",
      description: "Execute the migration with minimal business disruption and downtime"
    },
    {
      step: "Optimization",
      description: "Continuously monitor and optimize performance, security, and costs"
    }
  ];

  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-100 via-white to-teal-50 py-20 px-4 relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-white backdrop-blur-sm rounded-full border border-teal-200 mb-6">
                  <span className="text-sm font-medium text-teal-700">Cloud Infrastructure Experts</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-slate-700 to-teal-700 bg-clip-text text-transparent">Cloud Solutions</span>
                  <br />That Scale Your Business
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Migrate to the cloud and reduce infrastructure costs by 50% while improving scalability,
                  security, and performance with our expert cloud solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="#contact" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    Start Cloud Migration →
                  </a>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <div className="text-teal-600 mb-3">
                      {benefit.icon}
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-slate-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Cloud Services
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive cloud solutions from migration to optimization, tailored to your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gradient-to-br bg-white hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-3xl border-2 border-gray-200 overflow-hidden p-8">
                  <h3 className="text-xl mb-4 font-bold text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-700">
                        <CheckCircle className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Cloud Migration Process
              </h2>
              <p className="text-xl text-slate-600">
                A proven 4-step approach to seamless cloud migration with minimal downtime.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.step}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-700 to-teal-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free cloud assessment and migration strategy tailored to your business needs.
            </p>
            <a href="#contact" className="inline-block bg-white text-cyan-600 hover:bg-slate-50 px-8 py-4 text-lg font-semibold rounded-full transition-colors">
              Get Free Cloud Assessment →
            </a>
          </div>
        </section>
      </div>
  );
}
