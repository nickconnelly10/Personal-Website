import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  cta: string;
  external?: boolean;
  objectPosition?: string;
};

export default function ProjectCard({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  cta,
  external = false,
  objectPosition,
}: ProjectCardProps) {
  const className = "block";
  const content = (
    <div className="card card-hover cursor-pointer h-full">
      <div className="aspect-square mb-6 overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={400}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className={`w-full h-full object-cover ${objectPosition ?? "object-center"}`}
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <span className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium">
        {cta}
      </span>
    </div>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={`${title} (opens in new tab)`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}

export const projects = [
  {
    title: "Muscadine",
    description:
      "Muscadine is a small business focused on Bitcoin, crypto security, and DeFi solutions, helping individuals navigate the digital economy.",
    imageSrc: "/images/muscadine/Bitcoin.svg.png",
    imageAlt: "Muscadine Platform",
    href: "https://muscadine.xyz",
    cta: "View Platform →",
    external: true,
  },
  {
    title: "Health & Wellness",
    description:
      "This site reflects my journey in health, medicine, and holistic living. I also have a collection of reliable resources and protocols I use for my own health and wellbeing.",
    imageSrc: "/images/health/health-wellness-platform.jpeg",
    imageAlt: "Health Platform",
    href: "https://health.nickconnelly.com",
    cta: "View Platform →",
    external: true,
  },
  {
    title: "NEST Run Club",
    description:
      "The NEST Run Club is a student-led community at the University of Georgia that brings people together through weekly runs, promoting both the physical benefits of exercise while fostering friendship, consistency, and growth.",
    imageSrc: "/images/nest/nestrunclubgroupphoto.jpeg",
    imageAlt: "NEST Run Club",
    href: "/nest",
    cta: "Learn More →",
  },
  {
    title: "Volunteering & Service",
    description:
      "My commitment to service through medical missions, community development, and local volunteer work.",
    imageSrc: "/images/volunteering-community/volunteering-activity-3.jpeg",
    imageAlt: "Volunteering & Community Service",
    href: "/volunteering",
    cta: "Learn More →",
  },
] as const;
