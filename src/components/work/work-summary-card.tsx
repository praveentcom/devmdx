"use client";

import Image from "next/image";
import { PrefetchLink } from "passport-ui/prefetch-link";

import { formatDateShort } from "@/components/helpers/date";
import { URLS } from "@/components/helpers/urls";
import { WorkExperience } from "@/types/work";

export function WorkSummaryCard({
  experience,
}: {
  experience: WorkExperience;
}) {
  const endDateText = experience.endDate
    ? formatDateShort(experience.endDate)
    : "Present";

  return (
    <div className="meta-container">
      <PrefetchLink href={URLS.WORK(experience.slug)} prefetchOnVisible={true}>
        <div className="flex justify-between items-center gap-4 font-medium group">
          <div className="flex gap-2 items-center">
            {experience.image && (
              <div className="flex-shrink-0">
                <Image
                  src={experience.image}
                  alt={`${experience.company} logo`}
                  width={12}
                  height={12}
                  className="object-cover size-4"
                />
              </div>
            )}
            <p className="underline text-muted-foreground group-hover:text-foreground underline-offset-4 decoration-border group-hover:decoration-foreground line-clamp-1">
              {experience.company}
            </p>
          </div>
          <div className="flex items-center text-muted-foreground group-hover:text-foreground opacity-70">
            <p className="min-w-fit">{experience.role}</p>
            <p className="min-w-fit before:content-['·'] before:mx-1.5 hide-on-mobile">
              {formatDateShort(experience.startDate)} - {endDateText}
            </p>
          </div>
        </div>
      </PrefetchLink>
    </div>
  );
}
