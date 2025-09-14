"use client";

import Image from "next/image";
import { PrefetchLink } from "passport-ui/prefetch-link";

import { formatDateShort } from "@/components/helpers/date";
import { URLS } from "@/components/helpers/urls";
import { Education } from "@/types/education";

export function EducationSummaryCard({ education }: { education: Education }) {
  const endDateText = education.endDate
    ? formatDateShort(education.endDate)
    : "Present";

  return (
    <div className="meta-container">
      <PrefetchLink
        href={URLS.EDUCATION(education.slug)}
        prefetchOnVisible={true}
      >
        <div className="flex justify-between items-center gap-4 font-medium group">
          <div className="flex gap-2 items-center">
            {education.image && (
              <div className="flex-shrink-0">
                <Image
                  src={education.image}
                  alt={`${education.school} logo`}
                  width={12}
                  height={12}
                  className="object-cover size-4"
                />
              </div>
            )}
            <p className="underline text-muted-foreground group-hover:text-foreground underline-offset-4 decoration-border group-hover:decoration-foreground line-clamp-1">
              {education.school}
            </p>
          </div>
          <div className="flex items-center text-muted-foreground group-hover:text-foreground opacity-70">
            <p className="min-w-fit">{education.degree}</p>
            <p className="min-w-fit before:content-['·'] before:mx-1.5 hide-on-mobile">
              {formatDateShort(education.startDate)} - {endDateText}
            </p>
          </div>
        </div>
      </PrefetchLink>
    </div>
  );
}
