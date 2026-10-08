import type { PortfolioData } from '@/types/portfolio';

/** Edit this file to update site copy, project links, skills and experience. */
export const portfolio: PortfolioData = {
  name: 'Christos Zacharioudakis',
  role: 'Software Engineer',
  location: 'Athens, Greece',
  email: 'chrz1995@gmail.com',
  cvPath: '/Christos-Zacharioudakis-CV.pdf',
  intro:
    'I build dependable, human-centered web experiences and modernize the systems behind them.',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/chrz95' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/christos-zacharioudakis' },
  ],
  skillGroups: [
    {
      title: 'Frontend engineering',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Redux', 'Storybook'],
    },
    {
      title: 'Quality & delivery',
      skills: [
        'Jest',
        'React Testing Library',
        'Mocha & Chai',
        'ESLint & Oxlint',
        'Azure Pipelines',
        'Agile',
      ],
    },
    {
      title: 'Platforms & tooling',
      skills: ['RSpack & Webpack', 'SWC & Babel', 'PNPM & NPM', 'Git', 'Docker', 'Kubernetes'],
    },
    {
      title: 'Beyond the browser',
      skills: ['Java', 'Spring Boot', 'Python', 'T-SQL', 'Microservices', 'Machine Learning'],
    },
  ],
  projects: [
    {
      id: 'banking',
      eyebrow: 'Selected professional work / Accenture · Eurobank',
      title: 'Digital banking experiences',
      description:
        'Redesigned key e-banking journeys and delivered features spanning financial insights, customer support, appointments, and payroll registration.',
      image: '/images/banking.webp',
      imageAlt: 'Abstract blue layers representing digital banking systems',
      tags: ['React', 'TypeScript', 'RSpack', 'SWC'],
      outcomes: ['35% application performance improvement', '50% faster builds'],
    },
    {
      id: 'production',
      eyebrow: 'Selected professional work / Qualicius',
      title: 'Production workflow tools',
      description:
        'Developed web applications that streamlined food production and labeling workflows for operational teams.',
      image: '/images/production.webp',
      imageAlt: 'Abstract teal tiles representing connected production workflows',
      tags: ['React', 'JavaScript', 'HTML & CSS'],
      outcomes: ['Operational workflow design', 'Responsive web applications'],
    },
    {
      id: 'daytandem',
      eyebrow: 'Independent product / Scheduling & operations',
      title: 'DayTandem',
      description:
        'A shared workspace for appointment-based teams to manage schedules, people, finances, and daily operations.',
      image: '/images/daytandem.webp',
      imageAlt: 'Abstract violet calendar layers representing scheduling',
      tags: ['React', 'TypeScript', 'Express', 'PostgreSQL'],
      outcomes: ['Resource-aware scheduling', 'Finance, roles & bilingual workflows'],
      detailsUrl: '/projects/daytandem/',
    },
    {
      id: 'layovio',
      eyebrow: 'Independent product / Component library',
      title: 'Layovio',
      description:
        'A collection of reusable React components and complete site templates with live playgrounds, typed APIs, and clear documentation.',
      image: '/images/layovio/home.webp',
      imageAlt: 'Layovio showcase homepage with a workspace interface preview',
      tags: ['React', 'TypeScript'],
      outcomes: ['132 component APIs', '22 site templates'],
      detailsUrl: '/projects/layovio/',
    },
    {
      id: 'perfectly-average',
      eyebrow: 'Independent game / Number puzzles',
      title: 'Perfectly Average',
      description:
        'Turn numbers into the perfect average. A calm puzzle game with clever twists, 100 levels, daily challenges, and a place to create your own puzzles.',
      image: '/images/perfectly-average/01-home.png',
      imageAlt: 'Perfectly Average home screen with number tiles and a purple Play button',
      tags: ['Android', 'Puzzle game'],
      outcomes: ['100 levels across 20 chapters', 'Puzzle Lab, daily challenges & more'],
      detailsUrl: '/projects/perfectly-average/',
    },
  ],
  experience: [
    {
      role: 'Software Engineering Senior Analyst',
      company: 'Accenture · Assigned to Eurobank',
      period: 'Jun 2023 — Present',
      location: 'Athens, Greece',
      description:
        'Building and modernizing digital banking experiences in a cross-functional team.',
      highlights: [
        'Modernized React applications and build tooling, improving performance by 35%.',
        'Moved e-banking applications toward RSpack, PNPM, SWC and Oxlint, cutting build time by 50%.',
        'Led onboarding, code reviews and Agile ceremonies for a team of 10.',
      ],
    },
    {
      role: 'Front-End Developer',
      company: 'Qualicius',
      period: 'Sep 2022 — May 2023',
      location: 'Athens, Greece',
      description: 'Created React applications for food production and labeling operations.',
      highlights: ['Built dynamic interfaces with React, JavaScript, HTML and CSS.'],
    },
  ],
  education: [
    {
      degree: 'M.Sc. Data Science & Machine Learning',
      school: 'National Technical University of Athens',
      period: '2021 — 2023',
      detail: 'GPA 9.67/10 · Thesis on machine learning and distributed cloud data processing',
    },
    {
      degree: 'MEng Electrical & Computer Engineering',
      school: 'Technical University of Crete',
      period: '2014 — 2020',
      detail: 'GPA 9.47/10 · Thesis on large differentially private data synthesis',
    },
  ],
};
