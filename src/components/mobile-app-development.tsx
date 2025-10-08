import { Smartphone, Monitor, CheckCircle, TrendingUp, Star } from 'lucide-react';

export default function MobileAppDevelopment() {
  const features = [
    "iOS and Android native development",
    "React Native and Flutter cross-platform apps",
    "Mobile app design and UX optimization",
    "App store optimization and launch support",
    "Performance monitoring and analytics",
    "Push notifications and real-time features",
    "Offline functionality and data sync",
    "API integration and backend development"
  ];

  const benefits = [
    "300% increase in mobile engagement",
    "60% faster development with cross-platform",
    "95% app store approval rate",
    "40% reduction in development costs",
    "24/7 technical support and maintenance",
    "90% user retention rate improvement"
  ];

  const technologies = [
    { name: "React Native", description: "Cross-platform mobile development with JavaScript" },
    { name: "Flutter", description: "Google's UI toolkit for beautiful mobile apps" },
    { name: "Swift", description: "Native iOS development with modern syntax" },
    { name: "Kotlin", description: "Native Android development with improved productivity" },
    { name: "Firebase", description: "Backend and analytics platform for mobile apps" },
    { name: "Redux", description: "Predictable state management for complex apps" }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "Define app requirements, target audience, and technical specifications with stakeholder input"
    },
    {
      step: "2",
      title: "Design & Prototyping",
      description: "Create wireframes, mockups, and interactive prototypes that align with your brand"
    },
    {
      step: "3",
      title: "Development",
      description: "Build native or cross-platform app with regular progress updates and sprint reviews"
    },
    {
      step: "4",
      title: "Testing & Launch",
      description: "Comprehensive testing, app store submission, and deployment with monitoring"
    }
  ];

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Smartphone className="h-4 w-4 mr-2" />
                  Mobile App Development
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Native & Cross-Platform
                  <span className="block text-teal-600">Mobile Solutions</span>
                </h1>

                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Build powerful mobile applications that engage users and drive business growth. From iOS and Android native apps to cross-platform solutions with React Native and Flutter.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="#contact" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg rounded-lg font-semibold transition-colors">
                    Start Your Mobile Project →
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-8 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600 mb-1">300%</div>
                    <div className="text-sm text-slate-600">Engagement Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600 mb-1">95%</div>
                    <div className="text-sm text-slate-600">App Store Approval</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600 mb-1">60%</div>
                    <div className="text-sm text-slate-600">Faster Development</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-slate-700 rounded-3xl p-8 text-white">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-4">Ready to Build Your App?</h3>
                    <p className="text-slate-100 mb-6">
                      Get a free consultation and project estimate for your mobile app idea.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-green-300" />
                      <span>Free project consultation</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-green-300" />
                      <span>Custom development quote</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-green-300" />
                      <span>Technical feasibility analysis</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-green-300" />
                      <span>App store strategy guidance</span>
                    </div>
                  </div>

                  <a href="#contact" className="block w-full mt-6 bg-white text-cyan-600 hover:bg-slate-50 text-center py-3 rounded-lg font-semibold transition-colors">
                    Get Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Complete Mobile Development Services
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From concept to app store, we handle every aspect of mobile app development with expertise in both native and cross-platform technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {technologies.map((tech, index) => (
                <div key={index} className="border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
                  <Star className="h-8 w-8 mx-auto mb-4 text-teal-600" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{tech.name}</h3>
                  <p className="text-slate-600">{tech.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">What's Included:</h3>
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Expected Results:</h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <TrendingUp className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Development Process
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                A proven methodology that ensures your mobile app is delivered on time, within budget, and exceeds expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center border-2 border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-cyan-500 hover:bg-cyan-600 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-slate-100">Apps Developed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-slate-100">Store Approval Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">300%</div>
                <div className="text-slate-100">Avg. Engagement Boost</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-slate-100">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Get a free consultation and discover how we can bring your mobile app idea to life with cutting-edge technology and proven development processes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg rounded-lg font-semibold transition-colors">
                Start Your Project Today →
              </a>
            </div>
          </div>
        </section>
      </div>
  );
}
