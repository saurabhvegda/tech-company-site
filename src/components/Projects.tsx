import { useState } from 'react';
import { ArrowRight, Folder } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioProjects } from '../data/portfolioProjects';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(portfolioProjects.map(p => p.category)))];
  const filteredProjects = selectedCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence and achieve remarkable results
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-cyan-500 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <Link to={`/portfolio/${project.slug}`}>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                    <div className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold">
                      View Case Study
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Folder size={16} className="text-blue-600" />
                  <span className="text-sm font-medium text-blue-600">{project.category}</span>
                </div>
                <Link to={`/portfolio/${project.slug}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.short_description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/portfolio/${project.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                >
                  Read Case Study
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
