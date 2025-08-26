import { Education } from "@/types/education";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { DateRange } from "@/components/ui/common";

interface EducationSectionProps {
  education: Education[];
}

function EducationCard({ education }: { education: Education }) {
  const {
    degree,
    college,
    collegeImagePath,
    startDate,
    endDate,
    bulletPoints,
  } = education;

  return (
    <Link href={`/education/${education.slug}`} className="block">
      <Card className="mb-4 card-hover-shadow cursor-pointer transition-shadow">
        <CardHeader>
          <div className="card-header-layout">
            {collegeImagePath && (
              <div className="card-image-container">
                <Image
                  src={collegeImagePath}
                  alt={`${college} logo`}
                  width={60}
                  height={60}
                  className="entity-image"
                />
              </div>
            )}
            <div className="flex-1 grid gap-0.5">
              <CardTitle className="text-md font-semibold">{degree}</CardTitle>
              <div className="flex-center-gap-1_5">
                <GraduationCap className="icon-xs text-muted-foreground" />
                <span className="text-meta">{college}</span>
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
      <div className="flex items-center gap-2">
        <GraduationCap className="size-5 text-primary" />
        <h2 className="text-md font-semibold">Education</h2>
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
