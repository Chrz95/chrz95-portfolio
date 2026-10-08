export interface Link {
  label: string;
  href: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Project {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  outcomes: string[];
  githubUrl?: string;
  demoUrl?: string;
  detailsUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  detail: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  location: string;
  email: string;
  cvPath: string;
  intro: string;
  socialLinks: Link[];
  skillGroups: SkillGroup[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
}
