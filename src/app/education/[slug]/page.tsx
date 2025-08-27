import { format } from "date-fns";
import { ArrowLeft, CalendarDays, GraduationCap } from "lucide-react";
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
import { profileData } from "@/data/profile";
import { URLS } from "@/lib/constants/urls";
import {
  createNotFoundMetadata,
  METADATA_PATTERNS,
} from "@/lib/helpers/metadata";
import { findBySlug, generateSlugParams } from "@/lib/helpers/page";
import { generateEducationSchema } from "@/lib/helpers/structured-data";

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
    <PageWithStructuredData structuredData={generateEducationSchema(education)}>
      <div className="page-container">
        <BackButton
          href={URLS.HOME()}
          label="Back to profile"
          Icon={ArrowLeft}
        />

        <div className="grid gap-4">
          <EntityHeader
            imageSrc={education.collegeImagePath}
            imageAlt={`${education.college} logo`}
            title={education.college}
            subtitle={education.degree}
            fallbackIcon={GraduationCap}
          />

          <SectionCard title="Program duration">
            <DateRange
              startDate={education.startDate}
              endDate={education.endDate}
              Icon={CalendarDays}
              textSize="text-sm"
            />
          </SectionCard>

          {education.bulletPoints?.length > 0 && (
            <SectionCard title="Highlights">
              <BulletList items={education.bulletPoints} />
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
  const education = findBySlug(profileData.education, slug);

  if (!education) {
    return createNotFoundMetadata("Education");
  }

  const duration = `${format(education.startDate, "LLLL yyyy")} - ${
    education.endDate ? format(education.endDate, "LLLL yyyy") : "Present"
  }`;
  const description = `${education.degree} from ${education.college} (${duration}). ${
    education.bulletPoints?.[0] || ""
  }`;

  return METADATA_PATTERNS.education(
    education.degree,
    education.college,
    description,
    education.collegeImagePath,
    `/education/${education.slug}`,
  );
}

export async function generateStaticParams() {
  return generateSlugParams(profileData.education);
}
