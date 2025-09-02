import { format } from "date-fns";
import { Briefcase, CalendarDays } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  BackButton,
  BulletList,
  DateRange,
  EntityHeader,
  PageWithStructuredData,
  SectionCard,
} from "@/components/ui/common";
import { TagBadge } from "@/components/ui/tag-badge";
import { profileData } from "@/data/profile";
import { URLS } from "@/lib/constants/urls";
import {
  createNotFoundMetadata,
  createPageMetadata,
} from "@/lib/helpers/metadata";
import { findBySlug, generateSlugParams } from "@/lib/helpers/page";
import { generateWorkSchema } from "@/lib/helpers/structured-data";

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
    <PageWithStructuredData structuredData={generateWorkSchema(work)}>
      <div className="page-container">
        <BackButton href={URLS.HOME()} label="Back to profile" />

        <div className="grid gap-4">
          <EntityHeader
            imageSrc={work.image}
            imageAlt={`${work.company} logo`}
            title={work.company}
            subtitle={work.role}
            fallbackIcon={Briefcase}
          />

          <SectionCard title="Service duration">
            <DateRange
              startDate={work.startDate}
              endDate={work.endDate}
              Icon={CalendarDays}
              textSize="text-sm"
            />
          </SectionCard>

          {work.skills && work.skills.length > 0 && (
            <SectionCard title="Skills">
              <div className="flex flex-wrap gap-1.5">
                {work.skills.map((tag, index) => (
                  <TagBadge key={index} tag={tag} iconSize={14} source="work" />
                ))}
              </div>
            </SectionCard>
          )}

          {work.bulletPoints?.length > 0 && (
            <SectionCard title="Highlights">
              <BulletList items={work.bulletPoints} />
            </SectionCard>
          )}
        </div>
      </div>
    </PageWithStructuredData>
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

  const duration = `${format(work.startDate, "LLLL yyyy")} - ${
    work.endDate ? format(work.endDate, "LLLL yyyy") : "Present"
  }`;

  const description = `${work.role} position at ${work.company} (${duration}). ${
    work.bulletPoints?.[0] || ""
  }`;

  const metadata = createPageMetadata({
    title: `${work.role} at ${work.company}`,
    description: description,
    keywords: `${work.role} at ${work.company}`,
    url: URLS.WORK(work.slug),
    image: work.ogImage,
  });

  return metadata;
}

export async function generateStaticParams() {
  return generateSlugParams(profileData.workExperience);
}
