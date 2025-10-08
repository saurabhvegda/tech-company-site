import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  client_name: string;
  client_position: string;
  client_company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    client_name: 'David Rodriguez',
    client_position: 'CEO',
    client_company: 'TechVentures Inc',
    content: 'Working with this team has been transformational for our business. They delivered beyond expectations and provided ongoing support that helped us scale rapidly.',
    rating: 5
  },
  {
    id: '2',
    client_name: 'Jennifer Martinez',
    client_position: 'Director of Digital Marketing',
    client_company: 'Global Retail Group',
    content: 'The attention to detail and professional approach made all the difference. Our conversion rates increased by 45% within the first three months of launch.',
    rating: 5
  },
  {
    id: '3',
    client_name: 'Robert Thompson',
    client_position: 'CTO',
    client_company: 'HealthTech Solutions',
    content: 'Outstanding technical expertise and project management. They understood our complex requirements and delivered a solution that exceeded our expectations.',
    rating: 5
  }
];

export default function Testimonials() {
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 relative"
            >
              <div className="absolute top-6 right-6 text-gray-100">
                <Quote size={48} />
              </div>
              <div className="relative z-10">
                <div className="mb-4">{renderStars(testimonial.rating)}</div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-900">{testimonial.client_name}</div>
                  <div className="text-sm text-gray-600">{testimonial.client_position}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.client_company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-gray-600 text-lg">
                Let's discuss how we can help transform your business
              </p>
            </div>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
