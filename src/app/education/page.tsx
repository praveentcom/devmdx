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

import { EducationSummaryCard } from "@/components/education/education-summary-card";
import { getAllEducationSlugs } from "@/components/helpers/education";
import { createPageMetadata } from "@/components/helpers/metadata";
import { URLS } from "@/components/helpers/urls";

export default function EducationPage() {
  const education = getAllEducationSlugs();

  return (
    <div>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `Education`,
          description: "My academic background and educational qualifications.",
        }}
      />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={URLS.HOME()}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Education</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h3>Education</h3>
      <div className="grid grid-cols-1 gap-8">
        {education.map((edu) => (
          <EducationSummaryCard key={edu.slug} education={edu} />
        ))}
      </div>
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata = createPageMetadata({
    title: `Education`,
    description: "My academic background and educational qualifications.",
    keywords: [
      "education",
      "academic",
      "university",
      "degree",
      "qualifications",
    ],
    url: URLS.EDUCATION_LIST(),
  });

  return metadata;
}
