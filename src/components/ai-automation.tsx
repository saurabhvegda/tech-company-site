import { Zap, Clock, DollarSign, TrendingUp, CheckCircle, Users, BarChart3, Bot } from 'lucide-react';

export default function AIAutomation() {

  const features = [
    {
      icon: <Bot className="h-8 w-8 text-teal-600" />,
      title: "Intelligent Chatbots",
      description: "24/7 customer support with AI-powered responses that understand context and provide accurate solutions."
    },
    {
      icon: <Clock className="h-8 w-8 text-teal-600" />,
      title: "Workflow Automation",
      description: "Automate repetitive tasks like data entry, email responses, and document processing to save hours daily."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-teal-600" />,
      title: "Predictive Analytics",
      description: "AI-driven insights that predict trends, customer behavior, and business opportunities before they happen."
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: "Lead Qualification",
      description: "Automatically identify and prioritize high-quality leads using machine learning algorithms."
    }
  ];

  const benefits = [
    "Save 30+ hours per week on manual tasks",
    "Reduce operational costs by 40%",
    "Improve customer response time by 95%",
    "Increase lead conversion rates by 60%",
    "24/7 automated customer support",
    "Scale operations without hiring limits"
  ];

  const useCases = [
    {
      title: "E-commerce Automation",
      description: "Automate order processing, inventory management, and customer inquiries for online stores.",
      results: "50% reduction in processing time, 30% increase in customer satisfaction"
    },
    {
      title: "Customer Service Optimization",
      description: "Deploy intelligent chatbots that handle 80% of common customer queries automatically.",
      results: "70% reduction in support tickets, 24/7 availability, faster response times"
    },
    {
      title: "Sales Process Automation",
      description: "Automate lead scoring, follow-up emails, and appointment scheduling for sales teams.",
      results: "40% increase in qualified leads, 25% improvement in conversion rates"
    }
  ];

  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-100 via-white to-teal-50 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  AI Automation That Works 
                  <span className="text-teal-600"> 24/7</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Transform your business operations with intelligent automation solutions that save time, 
                  reduce costs, and scale your operations without limits. Let AI handle the repetitive work 
                  while you focus on growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg rounded-lg font-semibold transition-colors">
                    Get Free AI Assessment →
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <DollarSign className="h-8 w-8 text-teal-600 mb-3" />
                  <div className="text-2xl font-bold text-slate-900 mb-1">40%</div>
                  <div className="text-slate-600">Cost Reduction</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <Clock className="h-8 w-8 text-teal-600 mb-3" />
                  <div className="text-2xl font-bold text-slate-900 mb-1">30+</div>
                  <div className="text-slate-600">Hours Saved/Week</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <TrendingUp className="h-8 w-8 text-teal-600 mb-3" />
                  <div className="text-2xl font-bold text-slate-900 mb-1">95%</div>
                  <div className="text-slate-600">Faster Response</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <Zap className="h-8 w-8 text-teal-600 mb-3" />
                  <div className="text-2xl font-bold text-slate-900 mb-1">24/7</div>
                  <div className="text-slate-600">Automated Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Powerful AI Automation Features
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our AI automation solutions include everything you need to streamline operations 
                and scale your business efficiently.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="border-2 hover:border-teal-500 transition-colors duration-300 text-center rounded-lg p-6">
                  <div className="mx-auto mb-4 p-3 bg-teal-50 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Measurable Business Impact
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  Our AI automation solutions deliver tangible results that directly impact your bottom line. 
                  Join hundreds of businesses that have transformed their operations with our technology.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-teal-600 mr-3 flex-shrink-0" />
                      <span className="text-slate-700 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-cyan-500 hover:bg-cyan-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Choose Our AI Automation?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-1 text-cyan-200 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Custom Solutions</div>
                      <div className="text-slate-100 text-sm">Tailored to your specific business needs</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-1 text-cyan-200 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Easy Integration</div>
                      <div className="text-slate-100 text-sm">Seamless integration with existing systems</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-1 text-cyan-200 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Ongoing Support</div>
                      <div className="text-slate-100 text-sm">Continuous optimization and maintenance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Real-World Applications
              </h2>
              <p className="text-xl text-slate-600">
                See how businesses across industries are using AI automation to drive growth and efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="border-2 h-full rounded-lg p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{useCase.title}</h3>
                  <p className="text-slate-600 mb-4">{useCase.description}</p>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <div className="text-sm font-medium text-teal-600 mb-1">Results:</div>
                    <div className="text-slate-700">{useCase.results}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-cyan-500 hover:bg-cyan-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free AI automation assessment and discover how you can save 30+ hours per week
              while reducing operational costs by 40%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="inline-block bg-white text-cyan-600 hover:bg-slate-50 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                Get Free AI Assessment →
              </a>
              <a href="#projects" className="inline-block border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg rounded-lg font-semibold transition-colors">
                Explore Other Services
              </a>
            </div>
          </div>
        </section>
      </div>
  );
}