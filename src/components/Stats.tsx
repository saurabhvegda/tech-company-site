import { TrendingUp, Users, Award, Zap } from 'lucide-react';

interface Stat {
  id: string;
  label: string;
  value: string;
  icon: string;
}

const stats: Stat[] = [
  { id: '1', label: 'Projects Completed', value: '25+', icon: 'award' },
  { id: '2', label: 'Happy Clients', value: '95%', icon: 'users' },
  { id: '3', label: 'Years Experience', value: '20+', icon: 'trending-up' },
  { id: '4', label: 'Team Members', value: '5+', icon: 'zap' }
];

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  'award': Award,
  'users': Users,
  'trending-up': TrendingUp,
  'zap': Zap
};

export default function Stats() {

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const IconComponent = iconMap[stat.icon] || Award;
            return (
              <div key={stat.id} className="text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-600 transition-colors">
                  <IconComponent size={28} className="text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
