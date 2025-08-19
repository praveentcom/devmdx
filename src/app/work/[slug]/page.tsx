import { profileData } from "@/data/profile";
import { CalendarDays, ArrowLeft, Briefcase } from "lucide-react";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { TechnologyBadge } from "@/components/ui/technology-badge";
import type { Metadata } from "next";
import { generateWorkSchema } from "@/lib/helpers/structured-data";
import { findBySlug, generateSlugParams } from "@/lib/helpers/page";
import {
  createNotFoundMetadata,
  METADATA_PATTERNS,
} from "@/lib/helpers/metadata";
import {
  PageWithStructuredData,
  BackButton,
  EntityHeader,
  SectionCard,
  BulletList,
  DateRange,
} from "@/components/ui/common";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function WorkExperiencePage({ params }: PageProps) {
  const { slug } = await params;
  const experience = profileData.workExperience.find((w) => w.slug === slug);

  if (!experience) {
    notFound();
  }

  return (
    <PageWithStructuredData structuredData={generateWorkSchema(experience)}>
      <div className="container mx-auto px-4 py-4 sm:py-2 max-w-6xl">
        <BackButton href="/" label="Back to profile" Icon={ArrowLeft} />

        <div className="grid gap-4">
          <EntityHeader
            imageSrc={experience.companyImagePath}
            imageAlt={`${experience.company} logo`}
            title={experience.company}
            subtitle={experience.role}
            fallbackIcon={Briefcase}
          />

          <SectionCard title="Service duration">
            <DateRange
              startDate={experience.startDate}
              endDate={experience.endDate}
              Icon={CalendarDays}
              textSize="text-sm"
            />
          </SectionCard>

          {experience.skills && experience.skills.length > 0 && (
            <SectionCard title="Skills">
              <div className="flex flex-wrap gap-1.5">
                {experience.skills.map((skill, index) => (
                  <TechnologyBadge
                    key={index}
                    technology={skill}
                    variant="outline"
                    iconSize={14}
                  />
                ))}
              </div>
            </SectionCard>
          )}

          {experience.bulletPoints?.length > 0 && (
            <SectionCard title="Highlights">
              <BulletList items={experience.bulletPoints} />
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
  const experience = findBySlug(profileData.workExperience, slug);

  if (!experience) {
    return createNotFoundMetadata("Work experience");
  }

  const duration = `${format(experience.startDate, "LLLL yyyy")} - ${
    experience.endDate ? format(experience.endDate, "LLLL yyyy") : "Present"
  }`;
  const description = `${experience.role} position at ${experience.company} (${duration}). ${
    experience.bulletPoints?.[0] || ""
  }`;

  return METADATA_PATTERNS.work(
    experience.role,
    experience.company,
    description,
    experience.skills || [],
    experience.companyImagePath,
  );
}

export async function generateStaticParams() {
  return generateSlugParams(profileData.workExperience);
}
