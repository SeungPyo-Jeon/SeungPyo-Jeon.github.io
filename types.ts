export interface ContactInfo {
  email: string;
  github: string;
  phone?: string;
  location?: string;
}

export interface Education {
  school: string;
  degree: string;
  location: string;
  period: string;
  details?: string[];
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  period?: string;
  imageUrl?: string;
}

export interface Paper {
  title: string;
  authors: string;
  journal: string;
  link: string;
}

export interface SkillSet {
  category: string;
  items: string[];
}

export interface Qualification {
  name: string;
  score?: string;
  date?: string;
}

export interface CVData {
  name: string;
  koreanName: string;
  title: string;
  summary: string[];
  profileImage?: string;
  contact: ContactInfo;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: SkillSet[];
  papers: Paper[];
  qualifications: Qualification[];
}