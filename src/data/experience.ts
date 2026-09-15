export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
}

// Placeholder status explicitly set
export const experience: Experience[] = [];
