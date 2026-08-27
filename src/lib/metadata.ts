import type { Metadata } from "next";

const OG_IMAGE = {
  url: "/images/nick/nicholas-personal-2.jpeg",
  alt: "Nicholas Connelly",
};

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
}: {
  title?: string;
  description: string;
  path: string;
  absoluteTitle?: string;
}): Metadata {
  const displayTitle = absoluteTitle ?? (title ? `${title} | Nicholas Connelly` : "Nicholas Connelly");

  return {
    ...(absoluteTitle
      ? { title: { absolute: absoluteTitle } }
      : title
        ? { title }
        : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      title: displayTitle,
      description,
      url: path,
      siteName: "Nicholas Connelly",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description,
      images: [OG_IMAGE.url],
      creator: "@nicklutk",
    },
  };
}
