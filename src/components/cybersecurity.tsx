import { Shield, Lock, Eye, CheckCircle, TrendingUp, AlertTriangle } from 'lucide-react';

export default function Cybersecurity() {
  const features = [
    "Advanced threat detection & response",
    "Security audits & vulnerability assessments",
    "24/7 security operations center (SOC)",
    "Compliance management (GDPR, HIPAA, SOC2)",
    "Penetration testing & ethical hacking",
    "Zero-trust architecture implementation",
    "Incident response & forensics",
    "Security awareness training"
  ];

  const benefits = [
    "99.9% threat prevention rate",
    "Reduce security incidents by 85%",
    "Achieve compliance 3x faster",
    "Save $2M+ in breach prevention",
    "24/7 expert monitoring",
    "Proactive threat hunting"
  ];

  const services = [
    {
      title: "Security Audits",
      description: "Comprehensive analysis of your security posture with actionable remediation plans",
      stat: "500+ audits completed"
    },
    {
      title: "Penetration Testing",
      description: "Simulate real-world attacks to identify vulnerabilities before hackers do",
      stat: "Zero-day exploits found"
    },
    {
      title: "24/7 Monitoring",
      description: "Round-the-clock surveillance with AI-powered threat detection",
      stat: "Sub-5min response time"
    },
    {
      title: "Compliance",
      description: "Navigate complex regulations with expert guidance and automation",
      stat: "100% compliance success"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-100 via-white to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full mb-6">
                <Shield className="h-4 w-4 text-teal-700" />
                <span className="text-sm font-semibold text-teal-700">Enterprise Security</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Fortress-Level
                <span className="block text-transparent bg-clip-text bg-cyan-500 hover:bg-cyan-600">
                  Cybersecurity
                </span>
              </h1>

              <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                Protect your digital assets with military-grade security. Our elite team of ethical hackers and security engineers safeguard the world's most sensitive systems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Get Security Audit
                  <Shield className="ml-2 h-5 w-5" />
                </a>
                <a href="#all-services" className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-500 text-cyan-700 rounded-xl font-semibold hover:bg-teal-50 transition-colors">
                  View All Services
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border-2 border-slate-200">
                  <div className="text-3xl font-bold text-teal-700 mb-1">99.9%</div>
                  <div className="text-sm text-gray-600">Threat Prevention</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border-2 border-slate-200">
                  <div className="text-3xl font-bold text-teal-700 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">SOC Monitoring</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border-2 border-slate-200">
                  <div className="text-3xl font-bold text-teal-700 mb-1">&lt;5min</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-300 to-slate-400 rounded-3xl blur-3xl opacity-20" />
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border-2 border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <Lock className="h-8 w-8 text-teal-400" />
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse" />
                    <span className="text-sm text-slate-400">Protected</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-400">Threat Level</span>
                      <span className="text-sm font-semibold text-teal-400">Low</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full" style={{ width: '15%' }} />
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <div className="text-sm text-slate-400 mb-3">Recent Security Events</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-300">DDoS Attempt Blocked</span>
                        <span className="text-teal-400">✓</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-300">SQL Injection Prevented</span>
                        <span className="text-teal-400">✓</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-300">Malware Quarantined</span>
                        <span className="text-teal-400">✓</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-teal-900/20 rounded-xl p-4 border border-teal-800/30">
                    <div className="flex items-center space-x-2 text-teal-400">
                      <Eye className="h-4 w-4" />
                      <span className="text-sm font-semibold">Continuous Monitoring Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end protection tailored to your infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-teal-500 transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <div className="absolute top-4 right-4 px-3 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full">
                  {service.stat}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-8">What's Included</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Proven Results</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <TrendingUp className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AlertTriangle className="h-16 w-16 text-teal-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Don't Wait for a Breach
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            The average cost of a data breach is $4.45M. Invest in prevention today.
          </p>
          <a href="#contact" className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Schedule Security Assessment
            <Shield className="ml-3 h-6 w-6" />
          </a>
        </div>
      </section>
    </div>
  );
}
