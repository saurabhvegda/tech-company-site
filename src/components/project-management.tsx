import { CheckCircle, Users, Clock, TrendingUp, Shield } from 'lucide-react';

export default function ProjectManagement() {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "98% On-Time Delivery",
      description: "Proven track record of delivering projects on schedule with our structured methodology."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "30% Faster Delivery",
      description: "Agile methodologies and streamlined processes accelerate project completion."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team Leadership",
      description: "Certified project managers with 10+ years of experience leading complex projects."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Risk Mitigation",
      description: "Proactive risk identification and management to prevent costly delays."
    }
  ];

  const services = [
    {
      title: "Agile Project Management",
      description: "Scrum and Kanban methodologies for flexible, iterative project delivery",
      features: ["Sprint Planning", "Daily Standups", "Retrospectives", "Continuous Improvement"]
    },
    {
      title: "Program Management",
      description: "Coordinate multiple related projects for maximum business value",
      features: ["Portfolio Oversight", "Resource Allocation", "Stakeholder Management", "Strategic Alignment"]
    },
    {
      title: "Digital Transformation Projects",
      description: "Manage complex technology initiatives and organizational change",
      features: ["Change Management", "Technology Integration", "Training Programs", "Success Metrics"]
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive QA processes to ensure project deliverables meet standards",
      features: ["Test Planning", "Quality Gates", "Performance Testing", "Documentation Review"]
    }
  ];

  const methodologies = [
    {
      name: "Agile/Scrum",
      description: "Iterative development with regular feedback cycles",
      benefits: ["Faster time to market", "Flexible scope management", "Higher stakeholder satisfaction"]
    },
    {
      name: "Waterfall",
      description: "Traditional sequential approach for well-defined requirements",
      benefits: ["Clear milestones", "Predictable timelines", "Comprehensive documentation"]
    },
    {
      name: "Hybrid Approach",
      description: "Combined methodologies tailored to your specific needs",
      benefits: ["Best of both worlds", "Customized to project type", "Risk mitigation"]
    }
  ];

  const process = [
    {
      step: "Planning",
      description: "Define project scope, timeline, resources, and success criteria"
    },
    {
      step: "Execution",
      description: "Coordinate team activities and monitor progress against milestones"
    },
    {
      step: "Monitoring",
      description: "Track performance, manage risks, and communicate with stakeholders"
    },
    {
      step: "Delivery",
      description: "Ensure quality deliverables and successful project closure"
    }
  ];

  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-100 via-white to-teal-50 py-20 px-4 relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-teal-200 mb-6">
                  <span className="text-sm font-medium text-teal-700">🎯 Certified Project Managers</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-slate-700 to-teal-700 bg-clip-text text-transparent">Project Management</span>
                  <br />That Delivers Results
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Expert project management with proven methodologies. We deliver 98% of projects on time 
                  and 30% faster than industry average through structured processes and experienced leadership.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="#contact" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    Start Your Project →
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
          
          {/* Background decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-teal-200 rounded-full opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-200 rounded-full opacity-20 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Project Management Services
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive project management solutions from planning to delivery, ensuring success at every stage.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-100 via-white to-teal-50 hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-3xl border-2 border-gray-200 overflow-hidden p-8">
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

        {/* Methodologies Section */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Methodologies
              </h2>
              <p className="text-xl text-slate-600">
                We use the right methodology for your project type and organizational culture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {methodologies.map((methodology, index) => (
                <div key={index} className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center">
                  <h3 className="text-xl mb-4 font-bold text-slate-900">{methodology.name}</h3>
                  <p className="text-slate-600 mb-6">{methodology.description}</p>
                  <ul className="space-y-3">
                    {methodology.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-slate-700 text-sm">
                        <CheckCircle className="h-4 w-4 text-teal-600 mr-3 flex-shrink-0" />
                        <span>{benefit}</span>
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
                Our Project Management Process
              </h2>
              <p className="text-xl text-slate-600">
                A structured 4-phase approach ensuring successful project delivery.
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
              Ready to Execute Your Next Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get expert project management that delivers results on time and within budget.
            </p>
            <a href="#contact" className="inline-block bg-white text-cyan-600 hover:bg-slate-50 px-8 py-4 text-lg font-semibold rounded-full transition-colors">
              Start Your Project Today →
            </a>
          </div>
        </section>
      </div>
  );
}