export interface FAQ {
    question: string;
    answer: string;
}

export interface Service {
    slug: string;
    name: string;
    shortDescription: string;
    description: string;
    benefits: string[];
    faq:FAQ[];
    relatedServices: string[];
    relatedLocations: string[]
}

export interface Location {
    slug: string;
    name: string;
    description: string;
    benefits: string[];
    faq:FAQ[];
    availableServices: string[];
    relatedLocations: string[]
}