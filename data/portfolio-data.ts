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
    shortDescription: 'Food data platform ',
    fullDescription: 'TSOTSA introduces an innovative approach: an intelligent platform that centralizes, analyzes, and visualizes nutritional data from diverse food sources around the world. By integrating scientific knowledge with cultural insights, our application helps users make informed dietary choices and promotes healthier, more sustainable eating habits. Together, we can build a better-informed global community that values and preserves its rich culinary diversity.',
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
    image: '/images/gofid.png',
    shortDescription: 'Digital platform for managing loyalty and rewards programs',
    fullDescription: 'A comprehensive loyalty program management system that enables businesses to create, manage, and track reward programs to enhance customer engagement and retention. Features gamification and smart reward mechanisms.',
    problemSolved: 'Businesses need modern tools to build customer loyalty. GOFID offers a turnkey solution with real-time tracking, gamification, and secure payment integration.',
    technologies: ['Express', 'Next.js', 'Node.js', 'MariaDB', 'planethoster', 'Tailwind CSS'],
    features: [
      'Scalable rewards distribution system',
      'Real-time tracking dashboard',
      'Gamification mechanics',
      'REST API for third-party integrations'
    ],
    github: 'https://github.com/gocasbe/gofid (Private)',
    demo: 'https://gofid.vercel.app/',
    year: '2024',
    client: 'GOCAS'
  },
  {
    id: 4,
    title: 'Interactive Personal Portfolio',
    category: 'fullstack',
    featured: true,
    image: '/images/portefolio.png',
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
    github: 'https://github.com/Codeur16/portefolio_NJIOSSEU/',
    demo: 'https://charles-njiosseu-portfolio.vercel.app/',
    year: '2023',
    client: 'Personal'
  },
  {
    id: 5,
    title: 'Secure Table Annotation',
    category: 'automation',
    featured: false,
    image: '/images/secutable.png',
    shortDescription: 'Automatic annotation of tabular data',
    fullDescription: 'Automatic annotation of tabular data using SPARQL queries and extraction of annotations from raw annotations.',
    problemSolved: '',
    technologies: [ 'Python', 'httpRequests', 'Sepses knowledge graph', 'Sementic matching'],
    features: [
      'Fetch the raws annotations',
      'Extract the URI'
    ],
    github: null,
    demo: null,
    year: '2025',
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
  title: 'E-commerce Website – Lebize',
  category: 'fullstack',
  featured: true,
  image: '/images/lebize.png',
  shortDescription: 'Modern WordPress e-commerce website with a clean design and product catalog',
  fullDescription: 'Lebize is an e-commerce platform based in Cameroon, developed using WordPress and WooCommerce. The website offers a wide range of products including fashion, accessories, home goods, beauty, and electronics. It provides a smooth user experience with intuitive navigation, a responsive layout, and well-structured product pages optimized for both desktop and mobile devices.',
  problemSolved: 'Created a professional online store to enable online sales and improve the company’s digital visibility.',
  technologies: [
    'WordPress',
    'WooCommerce',
    'PHP',
    'HTML',
    'CSS',
    'JavaScript'
  ],
  features: [
    'WooCommerce-based online store',
    'Product catalog organized by categories',
    'Modern and responsive design',
    'Simple and intuitive checkout process',
    'Basic SEO optimization'
  ],
  github: '',
  demo: 'https://lebize.cm',
  year: '2025',
  client: 'Lebize'
},
{
  id: 8,
  title: 'Corporate Website – Globotical IT Consulting',
  category: 'fullstack',
  featured: true,
  image: '/images/globotocal.png',
  shortDescription: 'Professional IT consulting website with a modern and responsive design',
  fullDescription: 'Globotical IT Consulting is a technology solutions company offering web and mobile development, digital marketing, and business management solutions. The website was developed to showcase their services, portfolio, and company information. It features a responsive design, intuitive navigation, and integrates information about web development, SEO, mobile apps, and graphic design services.',
  problemSolved: 'Created a professional online presence for Globotical IT Consulting to attract clients and communicate services effectively.',
  technologies: [
    'HTML',
    'CSS',
    'WordPress',
    'PHP',
    'Responsive Design'
  ],
  features: [
    'Showcase of IT services and solutions',
    'Portfolio section highlighting projects',
    'Responsive and modern layout',
    'SEO-friendly structure',
    'Contact form for client inquiries'
  ],
  github: '',
  demo: 'https://globotical.com/',
  year: '2025',
  client: 'GOCAS'
},
{
  id: 9,
  title: 'Automobile Services – Valtransauto',
  category: 'fullstack',
  featured: false,
  image: '/images/valtransauto.png',
  shortDescription: 'Online showcase for a used car dealership',
  fullDescription: 'Valtransauto is a website representing a used car dealership located in Mons, Belgium. The site showcases the services offered by the dealership, contact and business information for clients interested in buying or maintaining used vehicles. The design is responsive and allows easy access to the essential information.',
  problemSolved: 'Creating a professional online presence for Valtransauto to present the dealership services and facilitate client contact.',
  technologies: [
    'Next.js',
    'Tailwind CSS',
    'Responsive Design',
    'Superbase'
  ],
  features: [
    'Presentation of the dealership services',
    'Business contact and location information',
    'Responsive interface adapted for mobiles',
    'Simple and direct navigation'
  ],
  github: 'https://github.com/Codeur16/Valtransauto',
  demo: 'https://valtransauto-beta.vercel.app/',
  year: '2025',
  client: 'Valtransauto'
},
{
  id: 10,
  title: 'UX Design – Trans-Universal Voyage',
  category: 'design',
  featured: true,
  image: '/images/transuniversal.png',
  shortDescription: 'UX design for a travel booking platform with a clear and intuitive interface',
  fullDescription: 'Trans-Universal Voyage is a travel and transportation booking platform. The main goal was to create a smooth, simple, and enjoyable user experience for travelers. The project includes interface design, intuitive navigation, information hierarchy, and optimized user flows for both desktop and mobile. The design was created on Figma to allow rapid prototyping and user testing.',
  problemSolved: 'Enhanced the online booking experience to reduce friction and make navigation easier for users.',
  technologies: [
    'Figma',
    'User Interface',
    'Responsive Design'
  ],
  features: [
    'Optimized user flows for travel booking',
    'Clear and intuitive interface',
    'Responsive design for all devices',
    'Interactive wireframes and prototypes on Figma',
    'User testing and iterations based on feedback'
  ],
  github: '',
  demo: 'https://www.figma.com/design/GZ2YpNlHm8F22kcDCKBdGd/TRANS-UNIVERSAL-VOYAGE-PREVIEW?node-id=0-1&p=f&t=Jlq2hv6aavSPq1yu-0', // replace XXXXXXXX with actual Figma link
  year: '2025',
  client: 'Trans-Universal Voyage'
},
{
  id: 11,
  title: 'System Architecture Design',
  category: 'design',
  featured: true,
  image: '/images/Atchitecture1.png',
  shortDescription: 'Design of scalable and robust system architectures for enterprise applications',
  fullDescription: 'This project involved creating the system architecture for a complex enterprise platform, including microservices structure, database schema design, API design, and integration flows. The focus was on scalability, security, maintainability, and high availability. Diagrams and documentation were prepared to guide the development team and stakeholders through the system’s components and interactions.',
  problemSolved: 'Provided a clear, scalable, and maintainable architecture to ensure smooth development and deployment of enterprise applications.',
  technologies: [
    'UML',
    'C4 Model',
    'Diagrams (Figma / Lucidchart)',
    'Microservices Architecture',
    'RESTful APIs',
    'Database Design'
  ],
  features: [
    'Microservices-based architecture design',
    'Clear component and service interaction diagrams',
    'Database schema design for scalability',
    'API design and integration flows',
    'Documentation for development and deployment'
  ],
  github: '',
  demo: 'https://www.figma.com/design/GZ2YpNlHm8F22kcDCKBdGd/TRANS-UNIVERSAL-VOYAGE-PREVIEW?node-id=0-1&p=f&t=antKvoto1iCwYTmB-0',
  year: '2022 - 2025',
  client: 'Academic / Enterprise Project'
},
{
  id: 12,
  title: 'Flyers Design',
  category: 'design',
  featured: true,
  image: '/images/FLyers1.png',
  shortDescription: 'Creative and eye-catching flyers for marketing and promotional campaigns',
  fullDescription: 'Designed multiple flyers for businesses and events, focusing on visual appeal, clear messaging, and brand consistency. Each design was tailored to the client’s objectives, target audience, and distribution channels, ensuring maximum engagement. Tools used included Adobe Illustrator and Photoshop for professional results.',
  problemSolved: 'Helped clients effectively promote their services and events through visually compelling flyers.',
  technologies: [
    'Adobe Illustrator',
    'Adobe Photoshop',
    'Canva',
    'Graphic Design Principles',
    'Typography & Color Theory'
  ],
  features: [
    'Custom flyer layouts for print and digital',
    'Brand-consistent visuals and messaging',
    'High-resolution and print-ready designs',
    'Optimized for social media sharing',
    'Quick turnaround for campaigns'
  ],
  github: '',
  demo: 'https://drive.google.com/drive/u/0/folders/1e8cdq9lr-D7Zrsdf_PpD9aYJzjqKLydx',
  year: '2023 - 2025',
  client: 'Various Clients'
},
{
  id: 13,
  title: 'Automation Workflow – WhatsApp Assistant for Car Sales',
  category: 'automation',
  featured: true,
  image: '/images/n8n.png',
  shortDescription: 'Automated WhatsApp responses for a car sales company using n8n workflows',
  fullDescription: 'Developed an automated assistant using n8n to manage customer interactions on WhatsApp for a car sales company. The system handles incoming messages, provides instant responses, shares vehicle information, schedules appointments, and routes complex queries to human agents. This workflow significantly improved response times, customer satisfaction, and overall efficiency of the sales process.',
  problemSolved: 'Reduced response times and manual workload by automating customer support and inquiries on WhatsApp.',
  technologies: [
    'n8n',
    'WhatsApp Business API',
    'Node.js',
    'Automation Workflows',
    'API Integrations'
  ],
  features: [
    'Automated instant replies to customer messages',
    'Vehicle information and pricing shared automatically',
    'Appointment scheduling integration',
    'Routing complex inquiries to human agents',
    'Dashboard for monitoring interactions and workflow performance'
  ],
  github: '',
  demo: '',
  year: '2025',
  client: 'Valtransauto -GOCAS'
},
{
  id: 14,
  title: 'Design of Tsotsa platform',
  category: 'design',
  featured: true,
  image: '/images/tsotsaDesign.png',
  shortDescription: 'Design of Tsotsa platform',
  fullDescription: 'Developed the design of Tsotsa platform, focusing on user interface, user experience, and design system. The project involved creating a cohesive and visually appealing system for the platform, including navigation, user flows, and visual elements. The design was created on Figma to allow rapid prototyping and user testing.',
  problemSolved: 'Created a professional and user-friendly design for Tsotsa platform to enhance user experience and improve visual appeal.',
  technologies: [
    'Figma'
  ],
  features: [
    'User Interface',
    'User Experience',
    'Design system'
  ],
  github: '',
  demo: 'https://www.figma.com/design/Ro9toV51ginSMxnT5a8Q6M/TSOTSA?node-id=32-1322&t=iT4Hh6GYEJvyXPah-0',
  year: '2025',
  client: 'TSOTSA Plateform'
},

{
  id: 15,
  title: 'Design of 3MConsulting plateform',
  category: 'design',
  featured: true,
  image: '/images/3mconsul-design.png',
  shortDescription: 'Design of 3MConsulting platform',
  fullDescription: 'Developed the design of 3MConsulting platform, focusing on user interface, user experience, and design system. The project involved creating a cohesive and visually appealing system for the platform, including navigation, user flows, and visual elements. The design was created on Figma to allow rapid prototyping and user testing.',
  problemSolved: 'Created a professional and user-friendly design for 3MConsulting platform to enhance user experience and improve visual appeal.',
  technologies: [
    'Figma'
  ],
  features: [
    'User Interface',
    'User Experience',
    'Design system'
  ],
  github: '',
  demo: 'https://www.figma.com/design/8rdpPPjwoHC5O9P6vSO8cC/My-3MConsulting?node-id=1-3200&p=f&t=XVdZIE0Z5saBdf3K-0',
  year: '2023',
  client: '3MConsulting Plateform'
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
    title: 'Shortcut Learning Mitigation in LLMs Finetuning Using a Neuro-Symbolic Approach',
    conference: 'To Be Submitted',
    year: '2026',
    status: 'In Process',
    description: 'Research focused on reducing shortcut learning during the finetuning of large language models (LLMs) by leveraging neuro-symbolic techniques. The study implements rule-based regularization to detect and penalize the use of shortcuts, improving model generalization, reducing biased patterns, and enhancing reasoning capabilities.',
    topics: ['Large Language Models', 'Shortcut Learning', 'Neuro-Symbolic AI', 'Finetuning', 'Machine Learning', 'NLP', 'Rule-based Regularization'],
    abstract: 'This study investigates methods to mitigate shortcut learning in LLMs during finetuning by integrating symbolic reasoning with neural approaches. It employs rule-based regularization to detect and penalize shortcuts, thereby enhancing model robustness, generalization, and performance on complex, structured tasks.',
    link: null
  },
  {
    id: 2,
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