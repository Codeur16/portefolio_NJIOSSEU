export const personalInfo = {
  name: 'NJIOSSEU Charles Loic',
  nickname: 'Loic',
  title: 'Full-Stack Developer | UI/UX Designer',
  subtitle: 'AI Research Enthusiast',
  tagline: 'I transform complex ideas into intelligent solutions that connect technology and user experience',
  location: 'Yaoundé, Cameroon',
  email: 'charlesnjiosseu2@gmail.com',
  phone: '+237 698 780 137',
  github: 'https://github.com/Codeur16',
  linkedin: 'https://www.linkedin.com/in/njiosseu-loic',
  availability: 'Available for new opportunities'
};

export const stats = [
  { label: 'Years of Experience', value: '2+' },
  { label: 'Projects Completed', value: '10+' },
  { label: 'Technologies Mastered', value: '8+' },
  { label: 'Scientific Publications', value: '1' }
];

export const services = [
  {
    id: 1,
    number: '01',
    title: 'Full-Stack Web Development',
    description: 'Building complete and high-performance web applications with React, Next.js, and Node.js. From backend architecture to user interface, I create robust and scalable solutions.',
    icon: 'Code2',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript']
  },
  {
    id: 2,
    title: 'UI/UX Design',
    number: '02',
    description: 'Designing modern and intuitive user interfaces. I create visual experiences that combine aesthetics and functionality using Figma and design best practices.',
    icon: 'Palette',
    technologies: ['Figma', 'Adobe Illustrator', 'Design Systems', 'Prototyping']
  },
  {
    id: 3,
    title: 'AI Integration & Automation',
    number: '03',
    description: 'Implementing AI solutions and smart automation. Creating automated workflows with n8n and integrating AI agents to optimize business processes.',
    icon: 'Sparkles',
    technologies: ['n8n', 'AI Agents', 'RAG Systems', 'Workflow Automation']
  },
  {
    id: 4,
    title: 'Research & Innovation',
    number: '04',
    description: 'Contributing to AI and information retrieval research. Exploring new approaches to solve complex problems in the field of artificial intelligence.',
    icon: 'BookOpen',
    technologies: ['Machine Learning', 'NLP', 'Information Retrieval', 'RAG']
  }
];

export const projects = [
  {
     id: 1,
    title: 'Tsotsa Plateform',
    category: 'fullstack',
    featured: true,
    image: 'images/Tsotsa.png',
    shortDescription: 'Recruitment system based on AHP algorithm to intelligently match candidates and opportunities',
    fullDescription: 'An advanced recruitment platform that uses the Analytic Hierarchy Process (AHP) to perform multi-criteria analysis and intelligently match candidates with job opportunities. The system considers technical skills, experience, education, and soft skills to provide accurate recommendations.',
    problemSolved: 'Acces to food data in Africa.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'TailwindCSS'],
    features: [
      'Information',
      'Food search',
      'Tsotsa Assistant',
      'Download food Datasets'
    ],
    github: 'https://gitlab.com/Codeur16/recruitment-platform',
    demo: "https://tsotsa.org/",
    year: '2025',
    client: 'TSOTSA'
  },
  {
    id: 2,
    title: 'Intelligent E-Recruitment Platform',
    category: 'ai-web',
    featured: true,
    image: '',
    shortDescription: 'Recruitment system based on AHP algorithm to intelligently match candidates and opportunities',
    fullDescription: 'An advanced recruitment platform that uses the Analytic Hierarchy Process (AHP) to perform multi-criteria analysis and intelligently match candidates with job opportunities. The system considers technical skills, experience, education, and soft skills to provide accurate recommendations.',
    problemSolved: 'Traditional recruitment processes are time-consuming and imprecise. This solution reduces hiring time by 40% and significantly improves candidate-job match quality.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'AHP Algorithm', 'AI/ML'],
    features: [
      'Intelligent candidate-job matching using AHP algorithm',
      'Analytical dashboard for recruiters',
      'User-friendly interface for candidates',
      'Multi-criteria scoring system',
      '40% reduction in hiring time'
    ],
    github: 'https://github.com/Codeur16/recruitment-platform',
    demo: null,
    year: '2024',
    client: 'GOCAS'
  },
  {
    id: 3,
    title: 'GOFID - Rewards System',
    category: 'fullstack',
    featured: true,
    image: '',
    shortDescription: 'Digital platform for managing loyalty and rewards programs',
    fullDescription: 'A comprehensive loyalty program management system that enables businesses to create, manage, and track reward programs to enhance customer engagement and retention. Features gamification and smart reward mechanisms.',
    problemSolved: 'Businesses need modern tools to build customer loyalty. GOFID offers a turnkey solution with real-time tracking, gamification, and secure payment integration.',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    features: [
      'Scalable rewards distribution system',
      'Real-time tracking dashboard',
      'Gamification mechanics',
      'Secure payment integration',
      'REST API for third-party integrations'
    ],
    github: 'https://github.com/Codeur16/gofid-rewards',
    demo: 'https://gofid-demo.vercel.app',
    year: '2023-2024',
    client: 'GOCAS'
  },
  {
    id: 4,
    title: 'Interactive Personal Portfolio',
    category: 'design',
    featured: true,
    image: '',
    shortDescription: 'Modern portfolio with animations and glassmorphism effects',
    fullDescription: 'TSOTSA introduces an innovative approach: an intelligent platform that centralizes, analyzes, and visualizes nutritional data from diverse food sources around the world. By integrating scientific knowledge with cultural insights, our application helps users make informed dietary choices and promotes healthier, more sustainable eating habits. Together, we can build a better-informed global community that values and preserves its rich culinary diversity.',
    problemSolved: 'Creating a professional and memorable online presence that stands out in a competitive market.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Modern dark theme design',
      'Smooth animations with Framer Motion',
      'Glassmorphism effects',
      'Fully responsive',
      'Optimized performance'
    ],
    github: 'https://github.com/Codeur16/portfolio',
    demo: 'https://njiosseu-loic.vercel.app',
    year: '2025',
    client: 'Personal'
  },
  {
    id: 5,
    title: 'Smart Automation Workflows',
    category: 'automation',
    featured: false,
    image: '',
    shortDescription: 'Creating automated workflows with n8n and AI agent integration',
    fullDescription: 'Development of complex automation workflows using n8n to connect various services and APIs. Integration of AI agents to automate repetitive tasks and improve operational efficiency.',
    problemSolved: 'Businesses waste time on repetitive manual tasks. These workflows automate processes and free up time for higher-value activities.',
    technologies: ['n8n', 'Node.js', 'APIs', 'AI Agents', 'Webhooks'],
    features: [
      'Business process automation',
      'Multi-service integration',
      'AI agents for smart decisions',
      'Monitoring and alerts',
      'Scalability and reliability'
    ],
    github: null,
    demo: null,
    year: '2023-2024',
    client: 'GOCAS'
  },
  {
    id: 6,
    title: 'Task Management Application',
    category: 'fullstack',
    featured: false,
    image: '',
    shortDescription: 'Collaborative project and task management application',
    fullDescription: 'Web application for task and project management that enables teams to collaborate effectively. Intuitive interface with drag & drop, real-time notifications, and customizable dashboards.',
    problemSolved: 'Improving team productivity by providing a simple yet powerful tool for work organization.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redux'],
    features: [
      'Intuitive drag & drop interface',
      'Real-time collaboration',
      'Notifications and reminders',
      'Customizable dashboards',
      'Priority management'
    ],
    github: 'https://gitlab.com/Codeur16/task-manager',
    demo: null,
    year: '2023',
    client: 'Freelance'
  },
  {
    id: 7,
    title: 'Portfolio Personnel',
    category: 'design',
    featured: true,
    image: '',
    shortDescription: 'Portfolio personnel moderne avec animations fluides et design épuré',
    fullDescription: 'Un portfolio personnel moderne mettant en valeur mes compétences en développement web et en design. Le site présente une expérience utilisateur fluide avec des animations subtiles, un design responsive et une navigation intuitive.',
    problemSolved: 'Création d\'une présence en ligne professionnelle pour présenter mes projets et compétences de manière attrayante.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Design moderne et épuré',
      'Animations fluides avec Framer Motion',
      'Mode sombre/clair',
      'Optimisé pour le référencement',
      'Temps de chargement rapide'
    ],
    github: 'https://github.com/Codeur16/portfolio',
    demo: 'https://njiosseu-loic.vercel.app',
    year: '2025',
    client: 'Personnel'
  }
];

export const experience = [
  {
    id: 1,
    role: 'Full-Stack Developer & AI Integrator',
    company: 'GOCAS',
    location: 'Yaoundé, Cameroon',
    period: '2023 - Present',
    startDate: '2023',
    endDate: 'Present',
    description: 'Leading development and AI integration initiatives, designing and implementing intelligent systems and automated workflows.',
    achievements: [
      'Development of the intelligent e-recruitment platform with AHP algorithms',
      'Integration of AI agents and automation workflows with n8n',
      'Architecture and development of full-stack solutions with React, Next.js, and Node.js',
      'Leading UI/UX design initiatives for multiple projects',
      '40% reduction in application processing time'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'n8n', 'AI/ML', 'TypeScript']
  },
  {
    id: 2,
    role: 'Full-Stack Developer & Consultant',
    company: '3M Consulting',
    location: 'Yaoundé, Cameroon',
    period: '2022 - 2023',
    startDate: '2022',
    endDate: '2023',
    description: 'Technical consulting and solution development for various enterprise clients.',
    achievements: [
      'Delivery of custom web applications for enterprise clients',
      'Implementation of responsive UI/UX designs',
      'Collaboration with cross-functional teams for on-time delivery',
      'Mentoring junior developers',
      'Implementation of development best practices'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'Git']
  }
];

export const education = [
  {
    id: 1,
    degree: 'Bachelor\'s Degree in Computer Science',
    field: 'Computer Science',
    institution: 'University of Yaoundé',
    location: 'Yaoundé, Cameroon',
    period: '2019 - 2022',
    startDate: '2019',
    endDate: '2022',
    description: 'Comprehensive computer science education with specialization in web development and artificial intelligence.',
    highlights: [
      'Specialization in web development',
      'Introduction to artificial intelligence',
      'Team academic projects',
      'Strong foundation in algorithms and data structures'
    ]
  }
];

export const publications = [
  {
    id: 1,
    title: 'Retrieval-Augmented Generation for Food Data in Africa',
    conference: 'SIGIR 2025',
    year: '2025',
    status: 'Accepted',
    description: 'Research on the application of RAG (Retrieval-Augmented Generation) techniques to improve information retrieval and generation for African food data, addressing unique challenges in data representation and cultural context.',
    topics: ['Information Retrieval', 'RAG', 'AI/ML', 'African Food Systems', 'NLP'],
    abstract: 'This research explores how RAG systems can be adapted to better serve the African context, particularly in the food domain where data is often fragmented and culturally specific.',
    link: null
  }
];

export const skills = {
  frontend: [
    { name: 'React', level: 90, category: 'Framework' },
    { name: 'Next.js', level: 90, category: 'Framework' },
    { name: 'TypeScript', level: 85, category: 'Language' },
    { name: 'JavaScript', level: 90, category: 'Language' },
    { name: 'Tailwind CSS', level: 95, category: 'Styling' },
    { name: 'HTML/CSS', level: 95, category: 'Core' }
  ],
  backend: [
    { name: 'Node.js', level: 85, category: 'Runtime' },
    { name: 'Express.js', level: 80, category: 'Framework' },
    { name: 'MongoDB', level: 75, category: 'Database' },
    { name: 'REST APIs', level: 85, category: 'Architecture' },
    { name: 'PostgreSQL', level: 70, category: 'Database' }
  ],
  aiAutomation: [
    { name: 'n8n Workflows', level: 85, category: 'Automation' },
    { name: 'AI Agents', level: 80, category: 'AI' },
    { name: 'RAG Systems', level: 75, category: 'AI' },
    { name: 'Prompt Engineering', level: 80, category: 'AI' },
    { name: 'Machine Learning', level: 70, category: 'AI' }
  ],
  design: [
    { name: 'Figma', level: 85, category: 'Tool' },
    { name: 'Adobe Illustrator', level: 75, category: 'Tool' },
    { name: 'UI/UX Design', level: 85, category: 'Skill' },
    { name: 'Design Systems', level: 80, category: 'Skill' },
    { name: 'Prototyping', level: 85, category: 'Skill' }
  ]
};

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai-web', label: 'AI & Web' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'design', label: 'Design' },
  { id: 'automation', label: 'Automation' }
];

export const testimonials = [
  {
    id: 1,
    name: 'Jean-Claude Mbarga',
    role: 'CTO',
    company: 'GOCAS',
    image: '/testimonials/client1.jpg',
    rating: 5,
    text: 'Charles is an exceptional developer who quickly understands business needs and delivers high-quality solutions. His AI expertise has enabled us to innovate in our processes.'
  },
  {
    id: 2,
    name: 'Marie Fotso',
    role: 'Product Manager',
    company: '3M Consulting',
    image: '/testimonials/client2.jpg',
    rating: 5,
    text: 'Working with Charles has been a pleasure. He combines technical skills and design sense to create exceptional user experiences.'
  }
];