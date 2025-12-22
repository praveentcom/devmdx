"use client";

import { Briefcase } from "lucide-react";

import { WorkSummaryCard } from "@/components/work/work-summary-card";
import { WorkExperience } from "@/types/work";

interface WorkExperienceSectionProps {
  workExperience: WorkExperience[];
}

export function WorkExperienceSection({
  workExperience,
}: WorkExperienceSectionProps) {
  return (
    <section
      role="region"
      aria-label="Work experience"
      className="section-container"
    >
      <div className="flex items-center gap-2 text-muted-foreground">
        <Briefcase className="size-4" />
        <h5>Work</h5>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {workExperience.map((experience, index) => (
          <WorkSummaryCard key={index} experience={experience} />
        ))}
      </div>
    </section>
  );
}
