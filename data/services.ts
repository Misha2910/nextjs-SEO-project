import { Service } from "@/types";

export const services: Service[]= [
    {
    slug: "plumbing",
    name: "Plumbing Setvices",
    shortDescription: "Reliable plumbing solutions for homes and businesses",
    description:"Our plumbing service helps with leakage",
    benefits: [
        "Help with common plumbing problems",
        "Routine maintenance",
        "clear communication about the work"
    ],
    faq: [
        {
            question: "what plubing problems can you help with?",
            answer: "Common requests include leaking taps etc..."
        },
         {
            question: "what plubing problems can you help with?",
            answer: "Common requests include leaking taps etc..."
        }
    ],
    relatedLocations: ["Chandigarh, Moahli"],
    relatedServices: ["Electrical", "cleaning"]
},
{
    slug: "electrical",
    name: "Electrical Setvices",
    shortDescription: "Reliable electrical solutions for homes and businesses",
    description:"Our electrical service covers common residential electrical maintenance",
    benefits: [
        "Help with lighting problems",
        "Switch maintenance",
        "socked maintenance"
    ],
    faq: [
        {
            question: "what electrical work is covered?",
            answer: "Common requests include lighting , issues, switch repairs"
        },
        
    ],
    relatedLocations: ["Chandigarh, Moahli"],
    relatedServices: ["Electrical", "cleaning"]
}
]

export function getServiceBySlug(slug:string): Service | undefined {
    return services.find((service)=>service.slug === slug);
}