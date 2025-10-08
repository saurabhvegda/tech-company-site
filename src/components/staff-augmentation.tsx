
import { CheckCircle, Users, TrendingUp, Clock, Globe, Target } from 'lucide-react';

export default function StaffAugmentation() {

  const services = [
    {
      title: "Offshore Development Teams",
      description: "Complete development teams based in cost-effective offshore locations",
      features: ["Full-Stack Developers", "DevOps Engineers", "QA Specialists", "Project Managers"]
    },
    {
      title: "Dedicated Developers",
      description: "Individual skilled developers dedicated to your projects long-term",
      features: ["Frontend Specialists", "Backend Developers", "Mobile App Developers", "Database Experts"]
    },
    {
      title: "Project-Based Resources",
      description: "Flexible resources for specific projects with defined timelines",
      features: ["Short-term Projects", "MVP Development", "System Integration", "Legacy Modernization"]
    },
    {
      title: "Technical Leadership",
      description: "Senior technical leads and architects to guide your projects",
      features: ["Solution Architects", "Technical Leads", "Code Review", "Best Practices"]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="h-12 w-12 text-teal-600" />,
      title: "60% Cost Savings",
      description: "Significantly reduce hiring and operational costs while maintaining quality."
    },
    {
      icon: <Globe className="h-12 w-12 text-teal-600" />,
      title: "Global Talent Pool",
      description: "Access skilled developers from around the world with diverse expertise."
    },
    {
      icon: <Clock className="h-12 w-12 text-teal-600" />,
      title: "Faster Delivery",
      description: "Scale your team quickly to meet project deadlines and accelerate development."
    },
    {
      icon: <Target className="h-12 w-12 text-teal-600" />,
      title: "Flexible Engagement",
      description: "Choose from various engagement models that fit your business needs."
    }
  ];

  const skills = [
    "React & Angular",
    "Node.js & Python",
    "Mobile Development",
    "Cloud Solutions",
    "DevOps & CI/CD",
    "Database Design",
    "AI & Machine Learning",
    "Cybersecurity",
    "Quality Assurance",
    "Project Management"
  ];

  const process = [
    {
      step: "Requirements",
      description: "Define your project needs, skills required, and timeline expectations"
    },
    {
      step: "Matching",
      description: "We match you with pre-vetted developers who fit your requirements"
    },
    {
      step: "Integration",
      description: "Seamless onboarding and integration with your existing team and processes"
    },
    {
      step: "Management",
      description: "Ongoing support and management to ensure project success"
    }
  ];

  const stats = [
    { number: "60%", label: "Cost Reduction" },
    { number: "500+", label: "Skilled Developers" },
    { number: "48hrs", label: "Team Setup" },
    { number: "95%", label: "Client Retention" }
  ];

  const engagementModels = [
    {
      title: "Dedicated Team",
      description: "Full team dedicated to your project",
      duration: "Long-term (6+ months)",
      bestFor: "Large projects, Product development"
    },
    {
      title: "Staff Augmentation",
      description: "Individual developers join your team",
      duration: "Medium-term (3-6 months)",
      bestFor: "Skill gaps, Team scaling"
    },
    {
      title: "Project-Based",
      description: "Complete project delivery",
      duration: "Short-term (1-3 months)",
      bestFor: "Specific deliverables, MVPs"
    }
  ];

  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-100 via-white to-teal-50 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-6">
              <Globe className="h-4 w-4 text-teal-600 mr-2" />
              <span className="text-sm font-medium text-green-700">500+ skilled developers available globally</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Scale Your Team with Global Talent
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Access skilled offshore developers and reduce hiring costs by 60%. 
              Build dedicated teams or augment your existing team with expert professionals.
            </p>
            <a href="#contact" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg rounded-lg font-semibold transition-colors">
              Find Your Team →
            </a>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-teal-600 mb-2">{stat.number}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Staff Augmentation Services
              </h2>
              <p className="text-xl text-slate-600">
                Flexible staffing solutions to meet your development needs and project requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="border-2 bg-white rounded-lg p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-700">
                        <CheckCircle className="h-4 w-4 text-teal-600 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Technical Expertise
              </h2>
              <p className="text-xl text-slate-600">
                Our developers are skilled in the latest technologies and frameworks.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-teal-50 p-4 rounded-xl text-center border-2 hover:border-teal-500 transition-colors">
                  <div className="font-medium text-slate-900">{skill}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Flexible Engagement Models
              </h2>
              <p className="text-xl text-slate-600">
                Choose the engagement model that best fits your project needs and timeline.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {engagementModels.map((model, index) => (
                <div key={index} className="border-2 bg-white text-center rounded-lg p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{model.title}</h3>
                  <p className="text-slate-600 mb-4">{model.description}</p>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold text-teal-600">{model.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600">Best for:</div>
                      <div className="font-medium">{model.bestFor}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Choose Our Staff Augmentation
              </h2>
              <p className="text-xl text-slate-600">
                Proven benefits that deliver real value to your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="border-2 text-center hover:border-teal-500 transition-colors rounded-lg p-6">
                  <div className="mx-auto mb-4 p-3 bg-teal-50 rounded-full w-fit">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Engagement Process
              </h2>
              <p className="text-xl text-slate-600">
                A streamlined process to get your team up and running quickly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.step}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-cyan-500 hover:bg-cyan-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Scale Your Team?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get access to skilled offshore developers and reduce your hiring costs by 60%.
              Start building your dedicated team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="inline-block bg-white text-cyan-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                Find Your Team →
              </a>
            </div>
          </div>
        </section>
      </div>
  );
}
