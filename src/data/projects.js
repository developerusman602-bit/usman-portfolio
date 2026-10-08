export const projects = [
  {
    id: 'parkinsonsa',
    title: 'ParkinsonSA',
    subtitle: 'Bilingual Community Platform',
    description: 'A production-ready community platform for Parkinson\'s disease support in Saudi Arabia. Built and deployed entirely from scratch — frontend, backend, database, server, and SEO.',
    longDescription: `
      ParkinsonSA is a live full-stack platform serving the Parkinson's community 
      in Saudi Arabia. The project covers every layer of modern web development — 
      from bilingual (English/Arabic) UI to real-time notifications, secure 
      authentication, and self-managed server deployment.
    `,
    tech: ['React', 'Vite', 'Django REST', 'MySQL', 'Nginx', 'WebSockets', 'Resend', 'Linux'],
    features: [
      'Bilingual UI (English + Arabic) with RTL support',
      'Real-time notifications via Django Channels & WebSockets',
      'Google OAuth 2.0 + JWT authentication',
      'Forums, discussion threads, and support groups',
      'Newsletter subscription with transactional email',
      'SEO optimized: structured data, sitemap, hreflang',
      'Self-deployed on Ubuntu VPS with Nginx + SSL',
    ],
    live: 'https://parkinsonsa.com',
    github: 'https://github.com/developerusman602-bit',
    status: 'live',
    color: 'from-primary-700 to-primary-500',
    icon: '🧠',
    featured: true,
  },
  {
    id: 'tournament-finder',
    title: 'Tournament Finder',
    subtitle: 'Sports Tournament Platform',
    description: 'Web-based platform for organizing and registering for sports tournaments, with dedicated modules for organizers and players.',
    tech: ['Django', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Figma'],
    features: [
      'Organizer dashboard for creating and managing tournaments',
      'Player registration with team uploads',
      'Interactive dashboard with clean UI (designed in Figma)',
      'Track participation and view registered teams',
    ],
    github: 'https://github.com/developerusman602-bit',
    status: 'demo',
    color: 'from-emerald-700 to-emerald-500',
    icon: '🏆',
  },
  {
    id: 'movie-reviews',
    title: 'Movie Review System',
    subtitle: 'Review & Rating Platform',
    description: 'Web platform for browsing, posting, rating, and managing movie reviews with user auth and admin moderation.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'User authentication with role-based permissions',
      'Rating system and threaded comments',
      'Search and filter for movies and reviews',
      'Admin moderation tools',
    ],
    github: 'https://github.com/developerusman602-bit',
    status: 'archived',
    color: 'from-orange-700 to-orange-500',
    icon: '🎬',
  },
  {
    id: 'sports-store',
    title: 'Sports Equipment Store',
    subtitle: 'E-Commerce Platform',
    description: 'Full e-commerce application for browsing and purchasing sports gear, with separate customer and admin interfaces.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Product listings with categories and search',
      'Shopping cart with persistent sessions',
      'Order management and tracking',
      'Secure payment integration',
      'Separate customer and admin panels',
    ],
    github: 'https://github.com/developerusman602-bit',
    status: 'archived',
    color: 'from-blue-700 to-blue-500',
    icon: '🛒',
  },
]

export const skills = {
  Frontend: ['React', 'Vite', 'JavaScript', 'HTML5', 'CSS3', 'TailwindCSS', 'React Router', 'Axios'],
  Backend: ['Python', 'Django', 'Django REST Framework', 'Django Channels', 'Flask', 'PHP'],
  Database: ['MySQL', 'PostgreSQL', 'SQLite'],
  'DevOps & Servers': ['Ubuntu', 'Nginx', 'Gunicorn', 'systemd', 'UFW', 'Let\'s Encrypt', 'DNS'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'SSH'],
  SEO: ['On-page SEO', 'Technical SEO', 'Schema.org', 'Open Graph', 'Sitemap', 'hreflang'],
}