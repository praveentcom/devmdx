import { WorkExperience } from "@/types/work";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Building2, Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import EmptyPlaceholderCard from "@/components/ui/empty-placeholder-card";
import { DateRange } from "@/components/ui/common";
import { AnimatedSectionHeading } from "@/components/ui/animated-section-heading";

interface WorkExperienceSectionProps {
  workExperience: WorkExperience[];
}

function ExperienceCard({ experience }: { experience: WorkExperience }) {
  const { role, company, companyImagePath, startDate, endDate, bulletPoints } =
    experience;

  return (
    <Link href={`/work/${experience.slug}`} className="block">
      <Card className="mb-4 card-hover-shadow cursor-pointer transition-shadow">
        <CardHeader>
          <div className="card-header-layout">
            {companyImagePath && (
              <div className="card-image-container">
                <Image
                  src={companyImagePath}
                  alt={`${company} logo`}
                  width={60}
                  height={60}
                  className="company-logo"
                />
              </div>
            )}
            <div className="flex-1 grid gap-0.5">
              <CardTitle className="text-md font-semibold">{role}</CardTitle>
              <div className="flex-center-gap-1_5">
                <Building2 className="icon-xs text-muted-foreground" />
                <span className="text-meta">{company}</span>
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

export function WorkExperienceSection({
  workExperience,
}: WorkExperienceSectionProps) {
  return (
    <section
      role="region"
      aria-label="Work experience"
      className="w-full grid gap-4 h-min"
    >
      <AnimatedSectionHeading
        icon={Briefcase}
        title="Work"
        delay={0.1}
      />
      {workExperience.length > 0 ? (
        <div className="space-y-4">
          {workExperience.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      ) : (
        <EmptyPlaceholderCard
          title="None added yet"
          subtitle="Check back in a while, due for an update."
        />
      )}
    </section>
  );
}
