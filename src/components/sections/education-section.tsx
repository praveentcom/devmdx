import { GraduationCap } from "lucide-react";
import { PlaceholderCard } from "passport-ui/placeholder-card";

import { EducationSummaryCard } from "@/components/education/education-summary-card";
import { Education } from "@/types/education";

interface EducationSectionProps {
  education: Education[];
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section role="region" aria-label="Education" className="section-container">
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <GraduationCap className="size-3" />
        <h6>Education</h6>
      </div>
      {education.length > 0 ? (
        <div className="list-container">
          {education.map((edu, index) => (
            <EducationSummaryCard key={index} education={edu} />
          ))}
        </div>
      ) : (
        <PlaceholderCard />
      )}
    </section>
  );
}
