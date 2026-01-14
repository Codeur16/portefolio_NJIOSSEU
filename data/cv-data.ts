export const personalInfo = {
  name: 'Njiosseu Charles Loic',
  title: 'Full-Stack Developer | UI/UX Designer | AI Integrator | Junior AI Researcher',
  location: 'Yaoundé, Cameroon',
  email: 'charlesnjiosseu2@gmail.com',
  phone: '+237 698 780 137',
  github: 'https://github.com/Codeur16',
  linkedin: 'https://www.linkedin.com/in/charles-njiosseu-172b0629b/',
  summary: 'Innovative Full-Stack Developer with expertise in AI integration and UI/UX design. Passionate about creating intelligent solutions that bridge the gap between cutting-edge technology and user experience. Research contributor in AI and information retrieval.'
};

export const experience = [
  {
    id: 1,
    company: 'GOCAS',
    role: 'Full-Stack Developer & AI Integrator',
    period: '2024 - 2025',
    location: 'Remote',
    description: 'Leading development and AI integration initiatives, designing and implementing intelligent systems and workflows.',
    highlights: [
      'Developed intelligent e-recruitment platform using AHP-based algorithms',
      'Integrated AI agents and automation workflows using n8n',
      'Designed and implemented full-stack solutions with React, Next.js, and Node.js',
      'Led UI/UX design initiatives for multiple projects'
    ]
  },
  {
    id: 2,
    company: '3M Consulting',
    role: 'Full-Stack Developer & Consultant',
    period: '2023',
    location: 'Yaoundé, Cameroon',
    description: 'Provided technical consulting and development services for various client projects.',
    highlights: [
      'Delivered custom web applications for enterprise clients',
      'Implemented responsive UI/UX designs',
      'Collaborated with cross-functional teams to deliver projects on time',
      'Mentored junior developers'
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: 'Intelligent E-Recruitment Platform',
    category: 'AI & Web Development',
    description: 'An advanced recruitment platform leveraging Analytic Hierarchy Process (AHP) algorithms to intelligently match candidates with job opportunities based on multi-criteria decision analysis.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'AI/ML', 'AHP Algorithm'],
    highlights: [
      'Implemented AHP-based intelligent matching system',
      'Reduced recruitment time by 40%',
      'Enhanced candidate-job fit accuracy',
      'Designed intuitive recruiter and candidate interfaces'
    ]
  },
  {
    id: 2,
    title: 'GOFID - Reward System',
    category: 'Full-Stack Development',
    description: 'A comprehensive digital reward and loyalty management system designed to enhance customer engagement and retention through intelligent reward mechanisms.',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    highlights: [
      'Built scalable reward distribution system',
      'Implemented real-time tracking dashboard',
      'Designed gamification features',
      'Integrated secure payment processing'
    ]
  }
];

// export const publications = [
//   {
//     id: 1,
//     title: 'Retrieval-Augmented Generation for Food Data in Africa',
//     conference: 'SIGIR 2025',
//     year: '2025',
//     description: 'Research on applying RAG (Retrieval-Augmented Generation) techniques to improve information retrieval and generation for African food data, addressing unique challenges in data representation and cultural context.',
//     topics: ['Information Retrieval', 'RAG', 'AI/ML', 'African Food Systems', 'NLP'],
//     status: 'Accepted'
//   }
// ];


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
  }, 
  // {
  //   id: 1,
  //   title: 'Shortcut Learning Mitigation in LLMs Finetuning Using a Neuro-Symbolic Approach',
  //   conference: 'To Be Submitted',
  //   year: '2026',
  //   status: 'In Process',
  //   description: 'Research focused on reducing shortcut learning during the finetuning of large language models (LLMs) by leveraging neuro-symbolic techniques. The study implements rule-based regularization to detect and penalize the use of shortcuts, improving model generalization, reducing biased patterns, and enhancing reasoning capabilities.',
  //   topics: ['Large Language Models', 'Shortcut Learning', 'Neuro-Symbolic AI', 'Finetuning', 'Machine Learning', 'NLP', 'Rule-based Regularization'],
  //   abstract: 'This study investigates methods to mitigate shortcut learning in LLMs during finetuning by integrating symbolic reasoning with neural approaches. It employs rule-based regularization to detect and penalize shortcuts, thereby enhancing model robustness, generalization, and performance on complex, structured tasks.',
  //   link: null
  // }
  
]
export const skills = {
  frontend: [
    { name: 'React', level: 80 },
    { name: 'Next.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'HTML/CSS', level: 95 }
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'REST APIs', level: 85 },
    { name: 'MongoDB', level: 55 },
    { name: 'Express.js', level: 85 }
  ],
  aiAutomation: [
    { name: 'n8n Workflows', level: 85 },
    { name: 'AI Agents', level: 80 },
    { name: 'RAG Systems', level: 750 },
    { name: 'Prompt Engineering', level: 70 }
  ],
  design: [
    { name: 'Figma', level: 85 },
    { name: 'Adobe Illustrator', level: 60 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Graphics Design', level: 70 }
  ]
};

export const education = [
    {
    id: 1,
    degree: 'Master degree in Computer Science',
    Speciality:'Information system and software engineering',
    institution: 'University of Yaoundé 1',
    period: '2023 - 2025',
    location: 'Yaoundé, Cameroon'
  },
  {
    id: 2,
    degree: 'Bachelor in Computer Science',
    Speciality:'Information system and software engineering',
    institution: 'University of Yaoundé 1',
    period: '2020 - 2023',
    location: 'Yaoundé, Cameroon'
  }
];

export const stats = [
  { label: 'Years of Experience', value: '3+' },
  { label: 'Projects Completed', value: '25+' },
  { label: 'Technologies', value: '20+' },
  { label: 'Research Papers', value: '1' }
];