interface JsonLdProps {
    name: string;
    description: string;
    url:string;
}

export default function JsonLd({name,description,url}:JsonLdProps){
    const structuredData = {
        "@context": "https://schema.org",
        "@type" : "WebPage",
        "name" : name,
        "description" : description,
        "url" : url
    };

    const safeJson = JSON.stringify(structuredData).replace(/</g, '\\u003c')

    return(
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson }}
        />
    )
}