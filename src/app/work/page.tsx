import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import { StructuredData } from "@workspace/ui/components/structured-data";
import type { Metadata } from "next";

import { createPageMetadata } from "@/components/helpers/metadata";
import { URLS } from "@/components/helpers/urls";
import { getAllWorkSlugs } from "@/components/helpers/work";
import { WorkSummaryCard } from "@/components/work/work-summary-card";

export default function WorkPage() {
  const work = getAllWorkSlugs();

  return (
    <div>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `Work Experience`,
          description:
            "A comprehensive overview of my professional work experience and career journey.",
        }}
      />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={URLS.HOME()}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Work</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h3>Work Experience</h3>
      <div className="grid grid-cols-1 gap-8">
        {work.map((experience) => (
          <WorkSummaryCard key={experience.slug} experience={experience} />
        ))}
      </div>
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata = createPageMetadata({
    title: `Work Experience`,
    description:
      "A comprehensive overview of my professional work experience and career journey.",
    keywords: ["work", "experience", "career", "employment"],
    url: URLS.WORK_LIST(),
  });

  return metadata;
}
