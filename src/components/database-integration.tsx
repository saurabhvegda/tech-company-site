import { Database, BarChart3, Shield, CheckCircle, Clock, TrendingUp, RefreshCw } from 'lucide-react';

export default function DatabaseIntegration() {

  const features = [
    {
      icon: <Database className="h-8 w-8 text-teal-600" />,
      title: "System Integration",
      description: "Connect disparate systems and databases for seamless data flow across your entire organization."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-teal-600" />,
      title: "Real-time Analytics",
      description: "Get instant insights with real-time data processing and analytics dashboards."
    },
    {
      icon: <Shield className="h-8 w-8 text-teal-600" />,
      title: "Data Security",
      description: "Enterprise-grade security with encryption, access controls, and compliance standards."
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-teal-600" />,
      title: "Data Migration",
      description: "Safe, efficient migration of your existing data to modern, optimized database systems."
    }
  ];

  const benefits = [
    "Unify data from multiple sources",
    "Improve data accuracy by 95%",
    "Real-time reporting and insights",
    "Reduce data processing time by 80%",
    "Automated data synchronization",
    "Enhanced security and compliance"
  ];

  const solutions = [
    {
      title: "Legacy System Modernization",
      description: "Migrate from outdated systems to modern, cloud-based databases with improved performance and reliability.",
      results: "70% improvement in query performance, 90% reduction in maintenance costs"
    },
    {
      title: "Multi-Database Integration",
      description: "Connect multiple databases and systems to create a unified data ecosystem for your business.",
      results: "Single source of truth, 60% faster reporting, improved decision making"
    },
    {
      title: "Business Intelligence Setup",
      description: "Create comprehensive BI solutions with automated reporting, KPI tracking, and predictive analytics.",
      results: "Real-time insights, 50% faster strategic decisions, improved forecasting"
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
                  Unify Your Data for 
                  <span className="text-teal-600"> Better Decisions</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Connect, optimize, and secure your data systems with our expert database integration services. 
                  Transform scattered data into actionable insights that drive business growth and efficiency.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg rounded-lg font-semibold transition-colors">
                    Get Data Assessment →
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <BarChart3 className="h-8 w-8 text-teal-600 mb-3" />
                  <div className="text-2xl font-bold text-slate-900 mb-1">95%</div>
                  <div className="text-slate-600">Data Accuracy</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <Clock className="h-8 w-8 text-teal-600 mb-3" />
                  <div className="text-2xl font-bold text-slate-900 mb-1">80%</div>
                  <div className="text-slate-600">Faster Processing</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <TrendingUp className="h-8 w-8 text-teal-600 mb-3" />
                  <div className="text-2xl font-bold text-slate-900 mb-1">Real-time</div>
                  <div className="text-slate-600">Insights</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <Shield className="h-8 w-8 text-teal-600 mb-3" />
                  <div className="text-2xl font-bold text-slate-900 mb-1">100%</div>
                  <div className="text-slate-600">Secure</div>
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
                Comprehensive Database Solutions
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From legacy system modernization to real-time analytics, we provide end-to-end 
                database integration services that transform how you handle data.
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
                  Transform Your Data Infrastructure
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  Our database integration services eliminate data silos, improve accuracy, and provide 
                  real-time insights that empower better business decisions.
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
                <h3 className="text-2xl font-bold mb-6">Our Integration Approach</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-white text-teal-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                    <div>
                      <div className="font-semibold">Data Audit</div>
                      <div className="text-slate-100 text-sm">Comprehensive analysis of existing systems</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white text-teal-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                    <div>
                      <div className="font-semibold">Integration Design</div>
                      <div className="text-slate-100 text-sm">Custom architecture for your specific needs</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white text-teal-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                    <div>
                      <div className="font-semibold">Safe Migration</div>
                      <div className="text-slate-100 text-sm">Zero-downtime data migration and testing</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white text-teal-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</div>
                    <div>
                      <div className="font-semibold">Optimization</div>
                      <div className="text-slate-100 text-sm">Performance tuning and monitoring</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Database Integration Solutions
              </h2>
              <p className="text-xl text-slate-600">
                Tailored solutions for different business needs, from legacy modernization to 
                advanced analytics implementation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="border-2 h-full rounded-lg p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{solution.title}</h3>
                  <p className="text-slate-600 mb-4">{solution.description}</p>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <div className="text-sm font-medium text-teal-600 mb-1">Expected Results:</div>
                    <div className="text-slate-700">{solution.results}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Technologies We Work With
              </h2>
              <p className="text-xl text-slate-600">
                We have expertise across all major database platforms and integration technologies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-semibold text-slate-900 mb-4">Database Platforms</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• PostgreSQL & MySQL</li>
                  <li>• Microsoft SQL Server</li>
                  <li>• Oracle Database</li>
                  <li>• MongoDB & Redis</li>
                  <li>• Amazon RDS & Aurora</li>
                  <li>• Google Cloud SQL</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-semibold text-slate-900 mb-4">Integration Tools</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Apache Kafka</li>
                  <li>• ETL/ELT Pipelines</li>
                  <li>• API Gateway Solutions</li>
                  <li>• Data Lake Architecture</li>
                  <li>• Real-time Streaming</li>
                  <li>• Backup & Recovery</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-semibold text-slate-900 mb-4">Analytics & BI</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Power BI & Tableau</li>
                  <li>• Custom Dashboards</li>
                  <li>• Data Warehousing</li>
                  <li>• Machine Learning Pipelines</li>
                  <li>• Predictive Analytics</li>
                  <li>• Automated Reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-cyan-500 hover:bg-cyan-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Unify Your Data?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free data assessment and discover how database integration can improve
              your data accuracy, reduce processing time, and enable real-time insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="inline-block bg-white text-cyan-600 hover:bg-slate-50 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                Get Data Assessment →
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