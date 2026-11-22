export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  featured: boolean;
  description: string;
  benefits?: string[];
  documents?: string[];
  faqs?: { question: string; answer: string }[];
}
