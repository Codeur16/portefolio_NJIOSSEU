export const personalInfo = {
  name: 'Njiosseu Charles Loic',
  nickname: 'Loic',
  title: 'Full-Stack Developer | UI/UX Designer | AI Integrator',
  subtitle: 'Junior AI Researcher',
  tagline: 'Je transforme des idées complexes en solutions intelligentes qui connectent la technologie et l\'expérience utilisateur',
  location: 'Yaoundé, Cameroon',
  email: 'charlesnjiosseu2@gmail.com',
  phone: '+237 698 780 137',
  github: 'https://github.com/Codeur16',
  linkedin: 'https://www.linkedin.com/in/njiosseu-loic',
  availability: 'Disponible pour de nouvelles opportunités'
};

export const stats = [
  { label: 'Années d\'Expérience', value: '3+' },
  { label: 'Projets Réalisés', value: '25+' },
  { label: 'Technologies Maîtrisées', value: '20+' },
  { label: 'Publications Scientifiques', value: '1' }
];

export const services = [
  {
    id: 1,
    number: '01',
    title: 'Développement Web Full-Stack',
    description: 'Création d\'applications web complètes et performantes avec React, Next.js et Node.js. De l\'architecture backend à l\'interface utilisateur, je construis des solutions robustes et scalables.',
    icon: 'Code2',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript']
  },
  {
    id: 2,
    title: 'Design UI/UX',
    number: '02',
    description: 'Conception d\'interfaces utilisateur modernes et intuitives. Je crée des expériences visuelles qui allient esthétique et fonctionnalité, en utilisant Figma et les meilleures pratiques du design.',
    icon: 'Palette',
    technologies: ['Figma', 'Adobe Illustrator', 'Design Systems', 'Prototyping']
  },
  {
    id: 3,
    title: 'Intégration IA & Automatisation',
    number: '03',
    description: 'Implémentation de solutions d\'intelligence artificielle et d\'automatisation intelligente. Création de workflows automatisés avec n8n et intégration d\'agents IA pour optimiser les processus.',
    icon: 'Sparkles',
    technologies: ['n8n', 'AI Agents', 'RAG Systems', 'Workflow Automation']
  },
  {
    id: 4,
    title: 'Recherche & Innovation',
    number: '04',
    description: 'Contribution à la recherche en intelligence artificielle et retrieval d\'information. Exploration de nouvelles approches pour résoudre des problèmes complexes dans le domaine de l\'IA.',
    icon: 'BookOpen',
    technologies: ['Machine Learning', 'NLP', 'Information Retrieval', 'RAG']
  }
];

export const projects = [
  {
    id: 1,
    title: 'Plateforme E-Recrutement Intelligente',
    category: 'ai-web',
    featured: true,
    image: '/projects/recruitment-platform.jpg',
    shortDescription: 'Système de recrutement basé sur l\'algorithme AHP pour matcher intelligemment candidats et opportunités',
    fullDescription: 'Une plateforme avancée de recrutement qui utilise l\'Analytic Hierarchy Process (AHP) pour effectuer une analyse multicritères et matcher intelligemment les candidats avec les opportunités d\'emploi. Le système prend en compte les compétences techniques, l\'expérience, la formation et les soft skills pour fournir des recommandations précises.',
    problemSolved: 'Les processus de recrutement traditionnels sont longs et peu précis. Cette solution réduit le temps de recrutement de 40% et améliore significativement la qualité des matchs candidat-poste.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'AHP Algorithm', 'AI/ML'],
    features: [
      'Matching intelligent candidat-poste basé sur l\'algorithme AHP',
      'Tableau de bord analytique pour les recruteurs',
      'Interface intuitive pour les candidats',
      'Système de scoring multicritères',
      'Réduction de 40% du temps de recrutement'
    ],
    github: 'https://github.com/Codeur16/recruitment-platform',
    demo: null,
    year: '2024',
    client: 'GOCAS'
  },
  {
    id: 2,
    title: 'GOFID - Système de Récompenses',
    category: 'fullstack',
    featured: true,
    image: '/projects/gofid-rewards.jpg',
    shortDescription: 'Plateforme digitale de gestion de programmes de fidélité et récompenses',
    fullDescription: 'Un système complet de gestion de programmes de fidélité permettant aux entreprises de créer, gérer et suivre des programmes de récompenses pour améliorer l\'engagement et la rétention client. Intègre la gamification et des mécanismes de récompense intelligents.',
    problemSolved: 'Les entreprises ont besoin d\'outils modernes pour fidéliser leurs clients. GOFID offre une solution clé en main avec suivi en temps réel, gamification et intégration de paiements sécurisés.',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    features: [
      'Système de distribution de récompenses scalable',
      'Tableau de bord temps réel pour le suivi',
      'Mécaniques de gamification',
      'Intégration de paiements sécurisés',
      'API REST pour intégrations tierces'
    ],
    github: 'https://github.com/Codeur16/gofid-rewards',
    demo: 'https://gofid-demo.vercel.app',
    year: '2023-2024',
    client: 'GOCAS'
  },
  {
    id: 3,
    title: 'Portfolio Personnel Interactif',
    category: 'design',
    featured: true,
    image: '/projects/portfolio.jpg',
    shortDescription: 'Portfolio moderne avec animations et effets glassmorphism',
    fullDescription: 'Un portfolio personnel ultra-moderne mettant en avant mes compétences et réalisations avec un design sombre élégant, des animations fluides et des effets de glassmorphism. Construit avec les dernières technologies web.',
    problemSolved: 'Créer une présence en ligne professionnelle et mémorable qui se démarque dans un marché compétitif.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Design moderne avec thème sombre',
      'Animations fluides avec Framer Motion',
      'Effets de glassmorphism',
      'Entièrement responsive',
      'Performance optimisée'
    ],
    github: 'https://github.com/Codeur16/portfolio',
    demo: 'https://njiosseu-loic.vercel.app',
    year: '2025',
    client: 'Personnel'
  },
  {
    id: 4,
    title: 'Workflows d\'Automatisation Intelligente',
    category: 'automation',
    featured: false,
    image: '/projects/automation.jpg',
    shortDescription: 'Création de workflows automatisés avec n8n et intégration d\'agents IA',
    fullDescription: 'Développement de workflows d\'automatisation complexes utilisant n8n pour connecter différents services et APIs. Intégration d\'agents IA pour automatiser les tâches répétitives et améliorer l\'efficacité opérationnelle.',
    problemSolved: 'Les entreprises perdent du temps sur des tâches manuelles répétitives. Ces workflows automatisent les processus et libèrent du temps pour des tâches à plus forte valeur ajoutée.',
    technologies: ['n8n', 'Node.js', 'APIs', 'AI Agents', 'Webhooks'],
    features: [
      'Automatisation de processus métier',
      'Intégration multi-services',
      'Agents IA pour décisions intelligentes',
      'Monitoring et alertes',
      'Scalabilité et fiabilité'
    ],
    github: null,
    demo: null,
    year: '2023-2024',
    client: 'GOCAS'
  },
  {
    id: 5,
    title: 'Application de Gestion de Tâches',
    category: 'fullstack',
    featured: false,
    image: '/projects/task-manager.jpg',
    shortDescription: 'Application collaborative de gestion de projets et tâches',
    fullDescription: 'Application web de gestion de tâches et projets permettant aux équipes de collaborer efficacement. Interface intuitive avec drag & drop, notifications en temps réel et tableaux de bord personnalisables.',
    problemSolved: 'Améliorer la productivité des équipes en offrant un outil simple mais puissant pour organiser le travail.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redux'],
    features: [
      'Interface drag & drop intuitive',
      'Collaboration temps réel',
      'Notifications et rappels',
      'Tableaux de bord personnalisables',
      'Gestion des priorités'
    ],
    github: 'https://github.com/Codeur16/task-manager',
    demo: null,
    year: '2023',
    client: '3M Consulting'
  }
];

export const experience = [
  {
    id: 1,
    role: 'Full-Stack Developer & AI Integrator',
    company: 'GOCAS',
    location: 'Yaoundé, Cameroon',
    period: '2023 - Présent',
    startDate: '2023',
    endDate: 'Présent',
    description: 'Lead des initiatives de développement et d\'intégration IA, conception et implémentation de systèmes intelligents et workflows automatisés.',
    achievements: [
      'Développement de la plateforme e-recrutement intelligente avec algorithmes AHP',
      'Intégration d\'agents IA et workflows d\'automatisation avec n8n',
      'Architecture et développement de solutions full-stack avec React, Next.js et Node.js',
      'Lead des initiatives de design UI/UX pour plusieurs projets',
      'Réduction de 40% du temps de traitement des candidatures'
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
    description: 'Conseil technique et développement de solutions pour divers clients entreprises.',
    achievements: [
      'Livraison d\'applications web sur mesure pour clients entreprises',
      'Implémentation de designs UI/UX responsives',
      'Collaboration avec équipes cross-fonctionnelles pour livraison dans les délais',
      'Mentorat de développeurs juniors',
      'Mise en place de bonnes pratiques de développement'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'Git']
  }
];

export const education = [
  {
    id: 1,
    degree: 'Licence en Informatique',
    field: 'Computer Science',
    institution: 'Université de Yaoundé',
    location: 'Yaoundé, Cameroon',
    period: '2019 - 2022',
    startDate: '2019',
    endDate: '2022',
    description: 'Formation complète en informatique avec spécialisation en développement web et intelligence artificielle.',
    highlights: [
      'Spécialisation en développement web',
      'Introduction à l\'intelligence artificielle',
      'Projets académiques en équipe',
      'Bases solides en algorithmique et structures de données'
    ]
  }
];

export const publications = [
  {
    id: 1,
    title: 'Retrieval-Augmented Generation for Food Data in Africa',
    conference: 'SIGIR 2025',
    year: '2025',
    status: 'Accepté',
    description: 'Recherche sur l\'application de techniques RAG (Retrieval-Augmented Generation) pour améliorer la retrieval d\'information et la génération pour les données alimentaires africaines, en abordant les défis uniques de représentation des données et du contexte culturel.',
    topics: ['Information Retrieval', 'RAG', 'AI/ML', 'African Food Systems', 'NLP'],
    abstract: 'Cette recherche explore comment les systèmes RAG peuvent être adaptés pour mieux servir le contexte africain, en particulier dans le domaine alimentaire où les données sont souvent fragmentées et culturellement spécifiques.',
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
  { id: 'all', label: 'Tous les projets' },
  { id: 'ai-web', label: 'IA & Web' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'design', label: 'Design' },
  { id: 'automation', label: 'Automatisation' }
];

export const testimonials = [
  {
    id: 1,
    name: 'Jean-Claude Mbarga',
    role: 'CTO',
    company: 'GOCAS',
    image: '/testimonials/client1.jpg',
    rating: 5,
    text: 'Charles est un développeur exceptionnel qui comprend rapidement les besoins métier et livre des solutions de haute qualité. Son expertise en IA nous a permis d\'innover dans nos processus.'
  },
  {
    id: 2,
    name: 'Marie Fotso',
    role: 'Product Manager',
    company: '3M Consulting',
    image: '/testimonials/client2.jpg',
    rating: 5,
    text: 'Travailler avec Charles a été un plaisir. Il combine compétences techniques et sens du design pour créer des expériences utilisateur exceptionnelles.'
  }
];