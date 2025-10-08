import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Building2, CheckCircle, Quote } from 'lucide-react';
import { getProjectBySlug } from '../data/portfolioProjects';
import { useEffect } from 'react';

export default function PortfolioProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = slug ? getProjectBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, we couldn't find the project you're looking for.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Portfolio</span>
          </button>
        </div>
      </nav>

      <div className="relative h-[500px] overflow-hidden bg-gradient-to-br from-blue-900 to-cyan-900">
        <img
          src={project.image_url}
          alt={project.title}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              <div className="inline-block bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                {project.category}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="text-2xl text-cyan-100 mb-8">
                {project.short_description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gray-50 p-6 rounded-xl">
            <Building2 className="text-blue-600 mb-3" size={32} />
            <div className="text-sm text-gray-600 mb-1">Client</div>
            <div className="font-bold text-gray-900">{project.client_name}</div>
            <div className="text-sm text-gray-600">{project.client_industry}</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <Clock className="text-blue-600 mb-3" size={32} />
            <div className="text-sm text-gray-600 mb-1">Duration</div>
            <div className="font-bold text-gray-900">{project.project_duration}</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <Users className="text-blue-600 mb-3" size={32} />
            <div className="text-sm text-gray-600 mb-1">Team Size</div>
            <div className="font-bold text-gray-900">{project.team_size}</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="text-sm text-gray-600 mb-3">Technologies</div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-ul:my-4"
              dangerouslySetInnerHTML={{ __html: project.challenge }}
            />
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: project.solution }}
            />
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Results & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.results.map((result, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-100"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {result.value}
                      </div>
                      <div className="text-gray-700 font-medium">{result.metric}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {project.testimonial && (
            <section className="mb-16">
              <div className="bg-gradient-to-br from-slate-50 to-gray-100 p-8 md:p-12 rounded-2xl relative">
                <Quote className="absolute top-6 right-6 text-slate-200" size={64} />
                <div className="relative z-10">
                  <p className="text-xl md:text-2xl text-gray-900 font-medium mb-6 italic leading-relaxed">
                    "{project.testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {project.testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">
                        {project.testimonial.author}
                      </div>
                      <div className="text-gray-600">{project.testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold text-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results with a custom solution tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              Start Your Project
            </Link>
            <Link
              to="/#projects"
              className="bg-gray-100 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors font-semibold text-lg"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
