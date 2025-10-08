import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-8 animate-fade-in">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Trusted by Leading Companies</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Vision Into
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Digital Reality</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            We craft exceptional digital experiences that drive growth, build trust, and deliver measurable results for ambitious businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="group bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Get Started
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://calendar.app.google/uwS5JosquJcnpcPk6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg border-2 border-blue-600"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
