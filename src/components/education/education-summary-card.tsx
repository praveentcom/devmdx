"use client";

import Image from "next/image";
import { PrefetchLink } from "@workspace/ui/components/prefetch-link";

import { formatDateYear } from "@/components/helpers/date";
import { URLS } from "@/components/helpers/urls";
import { Education } from "@/types/education";

export function EducationSummaryCard({ education }: { education: Education }) {
  const endDateText = education.endDate
    ? formatDateYear(education.endDate)
    : "Present";

  return (
    <PrefetchLink
      href={URLS.EDUCATION(education.slug)}
      prefetchOnVisible={true}
    >
      <div className="flex flex-col gap-1 group">
        {education.image && (
          <div className="shrink-0">
            <Image
              src={education.image}
              alt={`${education.school} logo`}
              width={40}
              height={40}
              className="object-cover size-10 rounded-sm"
            />
          </div>
        )}
        <p className="group-hover:underline text-foreground underline-offset-4 decoration-muted-foreground/50">
          {education.degree}
        </p>
        <p className="text-sm text-muted-foreground group-hover:text-foreground">
          {education.school}
          <span className="before:content-['·'] before:mx-1.5">
            {formatDateYear(education.startDate)} - {endDateText}
          </span>
        </p>
      </div>
    </PrefetchLink>
  );
}
