"use client";

import Image from "next/image";
import { PrefetchLink } from "passport-ui/prefetch-link";

import { formatDateYear } from "@/components/helpers/date";
import { URLS } from "@/components/helpers/urls";
import { Education } from "@/types/education";

export function EducationSummaryCard({ education }: { education: Education }) {
  const endDateText = education.endDate
    ? formatDateYear(education.endDate)
    : "Present";

  return (
    <div className="meta-container">
      <PrefetchLink
        href={URLS.EDUCATION(education.slug)}
        prefetchOnVisible={true}
      >
        <div className="flex justify-between items-center gap-3 group">
          <div className="flex gap-2 items-center">
            {education.image && (
              <div className="flex-shrink-0">
                <Image
                  src={education.image}
                  alt={`${education.school} logo`}
                  width={14}
                  height={14}
                  className="object-cover size-4.5"
                />
              </div>
            )}
            <p className="group-hover:underline text-foreground underline-offset-4 decoration-muted-foreground/50 line-clamp-1">
              {education.degree}
            </p>
          </div>
          <div className="flex items-center text-muted-foreground group-hover:text-foreground">
            <p className="min-w-max line-clamp-1">
              {formatDateYear(education.startDate)} - {endDateText}
            </p>
          </div>
        </div>
      </PrefetchLink>
    </div>
  );
}
