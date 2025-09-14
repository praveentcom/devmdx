import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BulletList } from "passport-ui/bullet-list";
import { ContentContainer } from "passport-ui/content-container";
import { MetaContainer } from "passport-ui/meta-container";
import { StructuredData } from "passport-ui/structured-data";

import { DateRange } from "@/components/common/date-range";
import EntityHeader from "@/components/common/entity-header";
import { formatDateShort } from "@/components/helpers/date";
import {
  createNotFoundMetadata,
  createPageMetadata,
} from "@/components/helpers/metadata";
import { findBySlug, generateSlugParams } from "@/components/helpers/page";
import { generateEducationSchema } from "@/components/helpers/structured-data";
import { URLS } from "@/components/helpers/urls";
import { profileData } from "@/data/profile";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function EducationPage({ params }: PageProps) {
  const { slug } = await params;

  const education = profileData.education.find((e) => e.slug === slug);

  if (!education) {
    notFound();
  }

  return (
    <ContentContainer
      variant="relaxed"
      backButton={{
        href: URLS.BIO(),
        label: "Bio",
      }}
    >
      <StructuredData data={generateEducationSchema(education)} />
      <EntityHeader
        imageSrc={education.image}
        title={education.school}
        subtitle={education.degree}
      />
      <MetaContainer title="Program duration">
        <DateRange
          startDate={education.startDate}
          endDate={education.endDate}
        />
      </MetaContainer>
      {education.bulletPoints?.length > 0 && (
        <MetaContainer title="Highlights">
          <BulletList items={education.bulletPoints} />
        </MetaContainer>
      )}
    </ContentContainer>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const education = findBySlug(profileData.education, slug);

  if (!education) {
    return createNotFoundMetadata("Education");
  }

  const duration = `${formatDateShort(education.startDate)} - ${
    education.endDate ? formatDateShort(education.endDate) : "Present"
  }`;
  const description = `${education.degree} from ${education.school} (${duration}). ${
    education.bulletPoints?.[0] || ""
  }`;

  const metadata = createPageMetadata({
    title: `${education.degree} from ${education.school}`,
    description: description,
    type: "article",
    url: URLS.EDUCATION(education.slug),
    image: education.ogImage,
  });

  return metadata;
}

export async function generateStaticParams() {
  return generateSlugParams(profileData.education);
}
