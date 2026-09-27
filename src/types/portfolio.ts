export interface ProjectFeature {
  titleKey: string;
  descKey: string;
  icon: string;
}

export interface ProjectTheme {
  primary: string;
  glow: string;
  bgGlow: string;
  gradient: string;
  label: string;
  icon: string;
}

export interface ProjectDetailsSection {
  heroImage?: string;
  overviewKey?: string;
  features?: ProjectFeature[];
  images: string[];
}

export type ProjectCategory = "all" | "professional" | "grad" | "personal";

export interface Project {
  id: string;
  titleKey: string;
  descKey: string;
  titleFallback?: string;
  category: "professional" | "grad" | "personal";
  img: string;
  link: string;
  theme: ProjectTheme;
  techs: string[];
  details: ProjectDetailsSection;
}

export interface SkillItem {
  name: string;
  icon?: string;
  colorClass?: string;
  categoryTag?: string;
}

export interface SkillCategory {
  titleKey: string;
  subtitleKey: string;
  skills: SkillItem[];
}

export interface LeadershipItem {
  id: string;
  roleKey: string;
  orgKey: string;
  dateKey: string;
  descKey: string;
  badgeKey: string;
  icon: string;
  color: string;
}
