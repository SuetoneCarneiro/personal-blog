export interface CvData {
  header: {
    name: string;
    role: string;
    email: string;
    phone: string;
    location: string;
    portfolio: string;
    linkedin: string;
    github: string;
  };
  labels: {
    summary: string;
    education: string;
    skills: string;
    languages: string;
    experience: string;
    extra: string;
    download: string;
  };
  summary: string;
  education: Array<{ course: string; institution: string; period: string }>;
  skills: string[];
  languages: Array<{ name: string; level: string }>;
  experience: Array<{ role: string; company: string; period: string; description: string }>;
  extra: Array<{ title: string; period: string; description: string }>;
}