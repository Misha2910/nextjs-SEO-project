import { Location } from "@/types";

export const locations: Location[] = [
    {
        slug: "chandigarh",
        name: "Chandigarh",
        description: "The premier financial and cultural hub, offering round-the-clock operations and unparalleled market connectivity.",
        benefits: [
            "24/7 infrastructure availability",
            "Access to a massive local talent pool",
            "High-density networking opportunities"
        ],
        faq: [
            {
                question: "What are the standard operational hours?",
                answer: "Our NYC facilities operate 24/7, though core business support is available from 9 AM to 5 PM EST."
            },
            {
                question: "Is there on-site parking available?",
                answer: "Public parking garages are available nearby, but we highly recommend using public transit."
            }
        ],
        availableServices: ["Premium Hosting", "Dedicated Desks", "Enterprise Consulting", "Event Spaces"],
        relatedLocations: ["boston", "philadelphia", "washington-dc"]
    },
    {
        slug: "mohali",
        name: "Mohali",
        description: "A strategic European gateway featuring top-tier data regulations, robust tech infrastructure, and diverse market access.",
        benefits: [
            "Ideal timezone bridging US and Asian markets",
            "Strong compliance and data privacy standards",
            "Proximity to major European financial centers"
        ],
        faq: [
            {
                question: "Are the services GDPR compliant?",
                answer: "Yes, all services provided at our London location fully adhere to UK GDPR regulations."
            }
        ],
        availableServices: ["Managed IT Support", "Hot Desks", "Cross-Border Consulting"],
        relatedLocations: ["paris", "amsterdam", "dublin"]
    },
    {
        slug: "tokyo",
        name: "Tokyo",
        description: "A high-tech powerhouse delivering ultra-low latency networking and cutting-edge automation services across the APAC region.",
        benefits: [
            "Ultra-low latency connection speeds",
            "State-of-the-art hardware configurations",
            "Bilingual technical support teams"
        ],
        faq: [
            {
                question: "Is support available in English?",
                answer: "Yes, we provide 24/7 technical support in both Japanese and English."
            }
        ],
        availableServices: ["Edge Computing", "Private Cloud Hosting", "24/7 Technical Support"],
        relatedLocations: ["seoul", "singapore", "hong-kong"]
    }
];

export function getLocationBySlug(slug:string): Location | undefined {
    return locations.find((location)=>location.slug === slug);
}