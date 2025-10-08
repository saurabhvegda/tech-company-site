import { CheckCircle, Zap, TrendingUp, Users, Target } from 'lucide-react';

export default function DigitalTransformation() {
  const benefits = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "3x Faster Processes",
      description: "Streamline operations and eliminate bottlenecks with modern digital workflows."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Competitive Advantage",
      description: "Stay ahead of competitors with cutting-edge technology and innovation."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Employee Productivity",
      description: "Empower your team with modern tools and automated processes."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Customer Experience",
      description: "Deliver exceptional customer experiences through digital channels."
    }
  ];

  const services = [
    {
      title: "Legacy System Modernization",
      description: "Transform outdated systems into modern, scalable solutions that drive business growth and efficiency.",
      features: ["System Assessment", "Migration Planning", "Modern Architecture", "Data Preservation"]
    },
    {
      title: "Process Automation",
      description: "Automate manual processes to improve efficiency, reduce errors, and free up resources for strategic work.",
      features: ["Workflow Analysis", "Automation Design", "Integration", "Performance Monitoring"]
    },
    {
      title: "Digital Strategy Consulting",
      description: "Develop comprehensive digital transformation roadmaps aligned with business objectives and market trends.",
      features: ["Current State Analysis", "Future State Vision", "Technology Roadmap", "Change Management"]
    },
    {
      title: "Change Management",
      description: "Ensure successful adoption of new technologies through structured change management and training programs.",
      features: ["Stakeholder Engagement", "Training Programs", "Communication Strategy", "Success Metrics"]
    }
  ];

  const transformationAreas = [
    {
      title: "Customer Experience",
      description: "Digital channels, self-service portals, mobile apps",
      impact: "50% increase in customer satisfaction"
    },
    {
      title: "Operations",
      description: "Process automation, workflow optimization, data analytics",
      impact: "40% reduction in operational costs"
    },
    {
      title: "Technology Infrastructure",
      description: "Cloud migration, API integration, modern architecture",
      impact: "60% improvement in system performance"
    },
    {
      title: "Data & Analytics",
      description: "Business intelligence, real-time reporting, predictive analytics",
      impact: "3x better decision-making speed"
    }
  ];

  const process = [
    {
      step: "Assessment",
      description: "Evaluate current systems, processes, and digital maturity level"
    },
    {
      step: "Strategy",
      description: "Develop transformation roadmap with priorities and timelines"
    },
    {
      step: "Implementation",
      description: "Execute transformation initiatives with minimal business disruption"
    },
    {
      step: "Optimization",
      description: "Continuously improve and adapt to changing business needs"
    }
  ];

  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-100 via-white to-teal-50 py-20 px-4 relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-white backdrop-blur-sm rounded-full border border-blue-200 mb-6">
                  <span className="text-sm font-medium text-teal-700">Digital Innovation Leaders</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Digital Transformation</span>
                  <br />That Drives Growth
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Modernize legacy systems and transform business processes. Achieve 3x faster operations,
                  competitive advantage, and exceptional customer experiences through strategic digital transformation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="#contact" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    Start Transformation →
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

        {/* Transformation Areas Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Key Transformation Areas
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We focus on the areas that deliver the highest impact and ROI for your business transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {transformationAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-100 via-white to-teal-50 hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-3xl border-2 border-gray-200 overflow-hidden p-8">
                  <h3 className="text-xl mb-4 font-bold text-slate-900">{area.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{area.description}</p>
                  <div className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium w-fit">
                    {area.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Transformation Services
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive services to guide your organization through every stage of digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-3xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 p-8">
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
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Transformation Process
              </h2>
              <p className="text-xl text-slate-600">
                A structured approach to digital transformation with measurable outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a comprehensive digital transformation assessment and roadmap tailored to your business goals.
            </p>
            <a href="#contact" className="inline-block bg-white text-cyan-600 hover:bg-slate-50 px-8 py-4 text-lg font-semibold rounded-full transition-colors">
              Get Transformation Assessment →
            </a>
          </div>
        </section>
      </div>
  );
}
