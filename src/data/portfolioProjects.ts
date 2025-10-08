export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  short_description: string;
  client_name: string;
  client_industry: string;
  project_duration: string;
  team_size: string;
  image_url: string;
  category: string;
  technologies: string[];
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  gallery_images?: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    slug: 'ecommerce-platform-redesign',
    title: 'E-Commerce Platform Redesign',
    short_description: 'Complete overhaul of an online retail platform, resulting in 45% increase in conversions',
    client_name: 'RetailCo',
    client_industry: 'E-Commerce & Retail',
    project_duration: '6 months',
    team_size: '8 developers',
    image_url: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    challenge: `
      <p>RetailCo, a mid-sized online retailer, was struggling with an outdated e-commerce platform that was built over a decade ago. The legacy system faced multiple critical issues:</p>
      <ul>
        <li>Slow page load times averaging 8-12 seconds, leading to high bounce rates</li>
        <li>Mobile experience was poor, with only 15% of mobile visits converting to sales</li>
        <li>Checkout process had 7 steps, resulting in 68% cart abandonment rate</li>
        <li>Backend infrastructure couldn't handle traffic spikes during sales events</li>
        <li>Limited analytics and reporting capabilities hindered business decisions</li>
        <li>No personalization or recommendation engine</li>
      </ul>
      <p>The company was losing market share to competitors with modern, fast-loading platforms and was facing increasing customer complaints about the shopping experience.</p>
    `,
    solution: `
      <p>We designed and implemented a comprehensive solution that modernized the entire e-commerce platform:</p>

      <h3>Frontend Modernization</h3>
      <p>Built a new React-based frontend with server-side rendering for optimal performance. Implemented progressive web app (PWA) capabilities for mobile users, allowing offline browsing and app-like experience. The new design featured a mobile-first approach with responsive layouts that adapted seamlessly across all devices.</p>

      <h3>Streamlined Checkout</h3>
      <p>Redesigned the checkout process from 7 steps down to 3, implementing features like guest checkout, address auto-complete, and saved payment methods. Integrated multiple payment gateways including Apple Pay and Google Pay for faster transactions.</p>

      <h3>Performance Optimization</h3>
      <p>Implemented advanced caching strategies using Redis, optimized database queries, and utilized CDN distribution for static assets. Set up lazy loading for images and implemented code splitting to reduce initial bundle size by 60%.</p>

      <h3>Scalable Infrastructure</h3>
      <p>Migrated to AWS with auto-scaling capabilities to handle traffic spikes. Implemented microservices architecture for better scalability and maintainability. Set up load balancing and database read replicas to distribute load effectively.</p>

      <h3>Personalization Engine</h3>
      <p>Built a recommendation system using collaborative filtering that suggests products based on user behavior and purchase history. Implemented dynamic pricing and promotional capabilities for targeted marketing campaigns.</p>

      <h3>Analytics & Monitoring</h3>
      <p>Integrated comprehensive analytics tracking user behavior, conversion funnels, and business metrics. Set up real-time monitoring and alerting for system health and performance issues.</p>
    `,
    results: [
      {
        metric: 'Conversion Rate Increase',
        value: '45%'
      },
      {
        metric: 'Page Load Time Reduction',
        value: '73%'
      },
      {
        metric: 'Mobile Sales Growth',
        value: '180%'
      },
      {
        metric: 'Cart Abandonment Reduction',
        value: '41%'
      },
      {
        metric: 'Average Order Value Increase',
        value: '28%'
      },
      {
        metric: 'Customer Satisfaction Score',
        value: '4.7/5'
      }
    ],
    testimonial: {
      quote: 'The new platform has transformed our business. We\'ve seen record sales and our customers love the improved experience. The team was professional, responsive, and delivered beyond our expectations.',
      author: 'James Mitchell',
      position: 'CEO, RetailCo'
    },
    gallery_images: [
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '2',
    slug: 'healthcare-management-system',
    title: 'Healthcare Management System',
    short_description: 'HIPAA-compliant patient management platform serving 10,000+ users',
    client_name: 'MedCare Health',
    client_industry: 'Healthcare',
    project_duration: '9 months',
    team_size: '12 specialists',
    image_url: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Enterprise Software',
    technologies: ['TypeScript', 'React', 'AWS', 'PostgreSQL', 'Docker'],
    challenge: `
      <p>MedCare Health, a network of 25 clinics, was managing patient records across disparate systems, creating inefficiencies and compliance risks:</p>
      <ul>
        <li>Patient data scattered across 5 different legacy systems with no integration</li>
        <li>Manual data entry leading to errors and duplicate records</li>
        <li>No unified view of patient history across different clinics</li>
        <li>HIPAA compliance concerns with outdated security measures</li>
        <li>Appointment scheduling was phone-based, consuming significant staff time</li>
        <li>No telemedicine capabilities, limiting patient access to care</li>
        <li>Billing and insurance verification were entirely manual processes</li>
        <li>Reporting was time-consuming and often incomplete</li>
      </ul>
      <p>The organization needed a modern, compliant system that could unify operations across all locations while maintaining the highest standards of data security and privacy.</p>
    `,
    solution: `
      <p>We developed a comprehensive, HIPAA-compliant healthcare management platform that addressed all operational challenges:</p>

      <h3>Unified Electronic Health Records (EHR)</h3>
      <p>Created a centralized EHR system that provides a complete view of patient history across all clinics. Implemented role-based access controls ensuring staff only see information relevant to their role. Designed intuitive interfaces that reduce data entry time by 50%.</p>

      <h3>Security & Compliance</h3>
      <p>Built on AWS with HIPAA-compliant infrastructure including end-to-end encryption for data at rest and in transit. Implemented comprehensive audit logging tracking all data access and modifications. Set up multi-factor authentication and session management to ensure secure access.</p>

      <h3>Patient Portal & Telemedicine</h3>
      <p>Developed a patient-facing portal for appointment scheduling, prescription refills, and secure messaging with healthcare providers. Integrated video conferencing capabilities for telemedicine appointments with recording and documentation features.</p>

      <h3>Intelligent Scheduling</h3>
      <p>Built an advanced scheduling system with automatic appointment reminders via SMS and email, reducing no-shows by 35%. Implemented waitlist management and automated patient intake forms to streamline clinic operations.</p>

      <h3>Billing & Insurance Integration</h3>
      <p>Automated insurance verification and eligibility checks. Integrated with major insurance providers' APIs for real-time claims processing. Implemented automated billing with patient payment plans and online payment capabilities.</p>

      <h3>Analytics & Reporting</h3>
      <p>Created customizable dashboards for clinic managers to monitor key metrics including patient volume, revenue, appointment efficiency, and provider performance. Built automated compliance reporting for regulatory requirements.</p>

      <h3>Mobile Access</h3>
      <p>Developed native mobile apps for healthcare providers to access patient information securely on-the-go, enabling better point-of-care documentation and decision-making.</p>
    `,
    results: [
      {
        metric: 'Reduction in Admin Time',
        value: '60%'
      },
      {
        metric: 'Patient Satisfaction Increase',
        value: '52%'
      },
      {
        metric: 'No-Show Rate Reduction',
        value: '35%'
      },
      {
        metric: 'Data Entry Error Reduction',
        value: '78%'
      },
      {
        metric: 'Telemedicine Appointments',
        value: '3,000+/month'
      },
      {
        metric: 'HIPAA Audit Score',
        value: '100%'
      }
    ],
    testimonial: {
      quote: 'This system has revolutionized how we deliver care. Our staff is more efficient, our patients are happier, and we have complete confidence in our compliance. It\'s been a game-changer for our organization.',
      author: 'Dr. Sarah Williams',
      position: 'Chief Medical Officer, MedCare Health'
    },
    gallery_images: [
      'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '3',
    slug: 'financial-analytics-dashboard',
    title: 'Financial Analytics Dashboard',
    short_description: 'Real-time analytics platform for investment management firms',
    client_name: 'Quantum Capital',
    client_industry: 'Finance & Investment',
    project_duration: '7 months',
    team_size: '10 developers',
    image_url: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Data Analytics',
    technologies: ['Vue.js', 'Python', 'D3.js', 'PostgreSQL', 'Redis'],
    challenge: `
      <p>Quantum Capital, managing $2.5B in assets, was operating with outdated financial analysis tools that couldn't keep pace with market dynamics:</p>
      <ul>
        <li>Portfolio data was updated only once daily, missing critical market movements</li>
        <li>Risk calculations were performed manually in spreadsheets, prone to errors</li>
        <li>No unified view across different asset classes and investment strategies</li>
        <li>Client reporting took 2-3 days to compile, delaying important decisions</li>
        <li>Unable to perform scenario analysis or stress testing efficiently</li>
        <li>Data from multiple sources (Bloomberg, Reuters, internal systems) not integrated</li>
        <li>Compliance reporting was manual and time-consuming</li>
        <li>Mobile access was non-existent, limiting decision-making flexibility</li>
      </ul>
      <p>The firm needed a modern analytics platform that could provide real-time insights, automate complex calculations, and enable rapid decision-making in volatile markets.</p>
    `,
    solution: `
      <p>We built a sophisticated, real-time financial analytics platform that transformed how Quantum Capital analyzes and manages investments:</p>

      <h3>Real-Time Data Integration</h3>
      <p>Integrated with multiple financial data providers including Bloomberg, Reuters, and internal trading systems. Built a high-performance data pipeline processing millions of data points per minute. Implemented WebSocket connections for live market data updates with sub-second latency.</p>

      <h3>Advanced Analytics Engine</h3>
      <p>Developed custom algorithms for portfolio optimization, risk assessment, and performance attribution. Implemented Monte Carlo simulations for scenario analysis and stress testing. Created predictive models using machine learning for trend analysis and market forecasting.</p>

      <h3>Interactive Visualizations</h3>
      <p>Built dynamic dashboards using D3.js with interactive charts and graphs that update in real-time. Implemented drill-down capabilities allowing users to analyze data from portfolio level down to individual positions. Created heat maps, correlation matrices, and performance comparison tools.</p>

      <h3>Risk Management Tools</h3>
      <p>Implemented real-time Value at Risk (VaR) calculations and exposure monitoring. Built automated alert systems for risk threshold breaches. Created scenario analysis tools for stress testing under various market conditions.</p>

      <h3>Automated Reporting</h3>
      <p>Developed customizable report templates for client communications and internal analysis. Implemented automated report generation with scheduled delivery via email. Created white-label reporting for different client segments with personalized branding.</p>

      <h3>Performance & Scalability</h3>
      <p>Utilized Redis for caching frequently accessed data, reducing query times by 90%. Implemented database partitioning and indexing strategies for optimal performance. Built horizontal scaling capabilities to handle increased data volume and user load.</p>

      <h3>Security & Compliance</h3>
      <p>Implemented bank-level encryption for all sensitive financial data. Built comprehensive audit trails for regulatory compliance. Integrated with identity management systems for secure, role-based access control.</p>
    `,
    results: [
      {
        metric: 'Data Processing Speed',
        value: '15x faster'
      },
      {
        metric: 'Report Generation Time',
        value: '94% reduction'
      },
      {
        metric: 'Risk Calculation Accuracy',
        value: '99.8%'
      },
      {
        metric: 'Decision-Making Speed',
        value: '70% faster'
      },
      {
        metric: 'Client Satisfaction',
        value: '4.9/5'
      },
      {
        metric: 'Operational Cost Savings',
        value: '$850K/year'
      }
    ],
    testimonial: {
      quote: 'This platform has given us a competitive edge in the market. We can now make data-driven decisions in real-time, and our clients appreciate the transparency and detailed reporting. The ROI has been exceptional.',
      author: 'Robert Chen',
      position: 'CIO, Quantum Capital'
    },
    gallery_images: [
      'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7947664/pexels-photo-7947664.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: '4',
    slug: 'mobile-fitness-application',
    title: 'Mobile Fitness Application',
    short_description: 'Cross-platform fitness tracking app with AI-powered recommendations',
    client_name: 'FitLife Pro',
    client_industry: 'Health & Fitness',
    project_duration: '8 months',
    team_size: '9 developers',
    image_url: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mobile Development',
    technologies: ['React Native', 'Firebase', 'TensorFlow', 'Node.js', 'MongoDB'],
    challenge: `
      <p>FitLife Pro wanted to enter the competitive fitness app market with a unique proposition, but faced several challenges:</p>
      <ul>
        <li>Crowded market with established competitors like MyFitnessPal and Strava</li>
        <li>Need to differentiate through personalization and intelligent recommendations</li>
        <li>Complex requirements for tracking various workout types and activities</li>
        <li>Integration needed with multiple wearable devices and fitness trackers</li>
        <li>Social features required to build community engagement</li>
        <li>Offline functionality essential for gym environments with poor connectivity</li>
        <li>Video streaming for workout demonstrations needed to be smooth and reliable</li>
        <li>Monetization strategy required without compromising user experience</li>
      </ul>
      <p>The client needed an app that was not just another fitness tracker, but an intelligent fitness companion that could adapt to individual users and keep them motivated.</p>
    `,
    solution: `
      <p>We developed a comprehensive fitness application with AI-powered features that set it apart from competitors:</p>

      <h3>AI-Powered Personalization</h3>
      <p>Built a recommendation engine using TensorFlow that learns from user behavior, fitness level, and goals to suggest personalized workouts. Implemented progressive difficulty adjustment that evolves as users improve. Created meal planning suggestions based on dietary preferences and fitness objectives.</p>

      <h3>Comprehensive Activity Tracking</h3>
      <p>Integrated with 15+ fitness wearables including Apple Watch, Fitbit, and Garmin. Built custom tracking for strength training, cardio, yoga, and sports activities. Implemented GPS tracking for outdoor activities with route mapping and performance analysis.</p>

      <h3>Social & Community Features</h3>
      <p>Created workout challenges and leaderboards to foster competition and motivation. Built social feed for sharing achievements and progress photos. Implemented group workout sessions and virtual training partner matching based on fitness level and goals.</p>

      <h3>Offline-First Architecture</h3>
      <p>Designed the app to work fully offline with automatic data sync when connectivity returns. Pre-cached workout videos and content for uninterrupted gym experience. Implemented progressive web app capabilities for cross-platform consistency.</p>

      <h3>Video Streaming & Content</h3>
      <p>Built adaptive video streaming with quality adjustment based on connection speed. Created a library of 500+ workout videos with professional trainers. Implemented picture-in-picture mode for following along during workouts.</p>

      <h3>Gamification & Motivation</h3>
      <p>Designed achievement system with badges, streaks, and milestones to maintain engagement. Implemented smart notifications that encourage users without being intrusive. Created data visualization showing progress over time with motivational insights.</p>

      <h3>Subscription & Monetization</h3>
      <p>Implemented freemium model with basic tracking free and premium features via subscription. Built seamless in-app purchase flow with family sharing options. Created personalized upgrade prompts based on usage patterns.</p>
    `,
    results: [
      {
        metric: 'Downloads (First Year)',
        value: '250,000+'
      },
      {
        metric: 'Daily Active Users',
        value: '85,000+'
      },
      {
        metric: 'Conversion to Premium',
        value: '12.5%'
      },
      {
        metric: 'User Retention (30 days)',
        value: '68%'
      },
      {
        metric: 'App Store Rating',
        value: '4.8/5'
      },
      {
        metric: 'Average Session Time',
        value: '42 minutes'
      }
    ],
    testimonial: {
      quote: 'They built exactly what we envisioned and more. The AI recommendations are incredibly accurate, and users love the personalized experience. We\'re now competing with industry giants and holding our own.',
      author: 'Amanda Torres',
      position: 'Founder & CEO, FitLife Pro'
    },
    gallery_images: [
      'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4498574/pexels-photo-4498574.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  }
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find(project => project.slug === slug);
}
