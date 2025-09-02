import { CalendarDays, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DateRange } from "@/components/ui/common";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { URLS } from "@/lib/constants/urls";
import { Education } from "@/types/education";

interface EducationSectionProps {
  education: Education[];
}

function EducationCard({ education }: { education: Education }) {
  const { degree, school, image, startDate, endDate, bulletPoints } = education;

  return (
    <Link href={URLS.EDUCATION(education.slug)} className="block">
      <Card borderTrail>
        <CardHeader>
          <div className="card-header-layout">
            {image && (
              <div className="card-image-container">
                <Image
                  src={image}
                  alt={`${school} logo`}
                  width={60}
                  height={60}
                  className="entity-image"
                />
              </div>
            )}
            <div className="flex-1 grid gap-0.5">
              <CardTitle className="text-md font-medium">{degree}</CardTitle>
              <div className="flex-center-gap-1_5">
                <GraduationCap className="size-3 text-muted-foreground" />
                <span className="text-meta">{school}</span>
              </div>
              <DateRange
                startDate={startDate}
                endDate={endDate}
                Icon={CalendarDays}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="bullet-list">
            {bulletPoints.map((point, index) => (
              <li key={index} className="bullet-item">
                <div className="bullet-dot" />
                <span className="bullet-text">{point}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Link>
  );
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section role="region" aria-label="Education" className="w-full grid gap-3">
      <div className="flex items-center gap-1 text-muted-foreground">
        <GraduationCap className="size-3" />
        <h2 className="text-sm font-medium">Education</h2>
      </div>
      {education.length > 0 ? (
        <div className="space-y-4">
          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </div>
      ) : (
        <EmptyPlaceholderCard
          title="None added yet."
          subtitle="Check back in a while, due for an update."
        />
      )}
    </section>
  );
}
