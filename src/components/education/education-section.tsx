import { GraduationCap } from "lucide-react";

import { EducationSummaryCard } from "@/components/education/education-summary-card";
import { Education } from "@/types/education";

interface EducationSectionProps {
  education: Education[];
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section role="region" aria-label="Education" className="section-container">
      <div className="flex items-center gap-2 text-muted-foreground">
        <GraduationCap className="size-4" />
        <h5>Education</h5>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {education.map((edu, index) => (
          <EducationSummaryCard key={index} education={edu} />
        ))}
      </div>
    </section>
  );
}
