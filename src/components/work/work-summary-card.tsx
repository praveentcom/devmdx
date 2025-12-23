"use client";

import { PrefetchLink } from "@workspace/ui/components/prefetch-link";
import Image from "next/image";

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
    <PrefetchLink href={URLS.WORK(experience.slug)} prefetchOnVisible={true}>
      <div className="flex flex-col gap-1 group">
        {experience.image && (
          <div className="shrink-0">
            <Image
              src={experience.image}
              alt={`${experience.company} logo`}
              width={40}
              height={40}
              className="object-cover size-10 rounded-sm"
            />
          </div>
        )}
        <p className="group-hover:underline text-foreground underline-offset-4 decoration-muted-foreground/50">
          {experience.company}
        </p>
        <p className="text-sm text-muted-foreground group-hover:text-foreground">
          {experience.role}
          <span className="before:content-['·'] before:mx-1.5">
            {formatDateShort(experience.startDate)} - {endDateText}
          </span>
        </p>
      </div>
    </PrefetchLink>
  );
}
