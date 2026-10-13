import { FAQ } from "@/types";

interface FAQSectionProps {
    faqs : FAQ[]
}

export default function FAQSection({faqs}: FAQSectionProps) {
   return (
    <section className="section">
        <h2> Frequently Asked Questions</h2>
        <div>
            {
                faqs.map((faq)=>(
                    <article className="faq-item" key={faq.question}>
                        <h3>{faq.question}</h3>
                         <p>{faq.answer}</p>
                    </article>
                ))
            }
        </div>
    </section>
   )
}