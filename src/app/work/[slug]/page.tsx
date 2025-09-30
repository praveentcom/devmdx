import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "passport-ui/breadcrumb";
import { BulletList } from "passport-ui/bullet-list";
import { ContentContainer } from "passport-ui/content-container";
import { StructuredData } from "passport-ui/structured-data";

import { DateRange } from "@/components/common/date-range";
import EntityHeader from "@/components/common/entity-header";
import { TagButton } from "@/components/common/tag-button";
import { formatDateShort } from "@/components/helpers/date";
import {
  createNotFoundMetadata,
  createPageMetadata,
} from "@/components/helpers/metadata";
import { findBySlug, generateSlugParams } from "@/components/helpers/page";
import { generateWorkSchema } from "@/components/helpers/structured-data";
import { URLS } from "@/components/helpers/urls";
import { profileData } from "@/data/profile";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function WorkExperiencePage({ params }: PageProps) {
  const { slug } = await params;
  const work = profileData.workExperience.find((w) => w.slug === slug);

  if (!work) {
    notFound();
  }

  return (
    <ContentContainer variant="relaxed">
      <StructuredData data={generateWorkSchema(work)} />
      <Breadcrumb
        path={[
          {
            label: "Home",
            href: URLS.HOME(),
          },
          {
            label: "Bio",
            href: URLS.BIO(),
          },
          {
            label: work.company,
            href: URLS.WORK(work.slug),
          },
        ]}
      />
      <EntityHeader
        imageSrc={work.image}
        title={work.company}
        subtitle={work.role}
      />
      <div className="meta-container">
        <h4>Service period</h4>
        <DateRange startDate={work.startDate} endDate={work.endDate} />
      </div>
      {work.skills && work.skills.length > 0 && (
        <div className="meta-container">
          <h4>Skills</h4>
          <div className="flex flex-wrap gap-1.5">
            {work.skills.map((tag, index) => (
              <TagButton key={index} tag={tag} source="work" />
            ))}
          </div>
        </div>
      )}
      {work.bulletPoints?.length > 0 && (
        <div className="meta-container">
          <h4>Highlights</h4>
          <BulletList items={work.bulletPoints} />
        </div>
      )}
    </ContentContainer>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const work = findBySlug(profileData.workExperience, slug);

  if (!work) {
    return createNotFoundMetadata("Work");
  }

  const duration = `${formatDateShort(work.startDate)} - ${
    work.endDate ? formatDateShort(work.endDate) : "Present"
  }`;

  const description = `${work.role} position at ${work.company} (${duration}). ${
    work.bulletPoints?.[0] || ""
  }`;

  const metadata = createPageMetadata({
    title: `${work.role} at ${work.company}`,
    description: description,
    keywords: [work.role, work.company, "work"],
    url: URLS.WORK(work.slug),
    image: work.ogImage,
  });

  return metadata;
}

export async function generateStaticParams() {
  return generateSlugParams(profileData.workExperience);
}
