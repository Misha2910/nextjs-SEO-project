import Link from "next/link";

interface RelatedLinkItem {
  label: string;
  href: string;
}

interface RelatedLinksProps {
  items: RelatedLinkItem[];
}

export default function RelatedLinks({ items }: RelatedLinksProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="related-links">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="related-link-chip">
          <span aria-hidden="true">→</span>
          {item.label}
        </Link>
      ))}
    </div>
  );
}
