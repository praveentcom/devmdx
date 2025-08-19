import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { StructuredData } from "@/components/seo/StructuredData";
import { LucideIcon } from "lucide-react";

export function PageWithStructuredData({
  structuredData,
  children,
}: {
  structuredData: object;
  children: ReactNode;
}) {
  return (
    <>
      <StructuredData data={structuredData} />
      {children}
    </>
  );
}

export function BackButton({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: LucideIcon;
}) {
  return (
    <div className="mb-4">
      <Button variant="outline" size="sm" asChild>
        <Link href={href} className="flex items-center gap-2">
          <Icon className="icon-sm" />
          {label}
        </Link>
      </Button>
    </div>
  );
}

/**
 * Common entity header (for projects, work, education)
 */
export function EntityHeader({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  fallbackIcon: FallbackIcon,
  size = "medium",
}: {
  imageSrc?: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  fallbackIcon: LucideIcon;
  size?: "small" | "medium" | "large";
}) {
  const sizeClasses = {
    small: "h-12 w-12",
    medium: "h-14 w-14",
    large: "h-16 w-16",
  };

  const imageSizes = {
    small: { width: 48, height: 48 },
    medium: { width: 56, height: 56 },
    large: { width: 64, height: 64 },
  };

  return (
    <div className="flex gap-3 items-start">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageSizes[size].width}
          height={imageSizes[size].height}
          className="rounded-md border object-cover"
        />
      ) : (
        <div
          className={`${sizeClasses[size]} rounded-md border flex items-center justify-center bg-muted`}
        >
          <FallbackIcon className="size-5 text-muted-foreground" />
        </div>
      )}
      <div className="grid gap-1 h-min">
        <h1 className="text-xl font-semibold leading-tight">{title}</h1>
        <p className="text-sm text-muted-foreground leading-tight">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

/**
 * Common bullet list component
 */
export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="bullet-list">
      {items.map((item, index) => (
        <li key={index} className="bullet-item">
          <div className="bullet-dot" />
          <span className="bullet-text">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Common section card wrapper
 */
export function SectionCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <Card>
      <CardContent>
        <div className="grid gap-1.5">
          <h2 className="text-sm font-semibold">{title}</h2>
          {children}
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * Date range display component
 */
export function DateRange({
  startDate,
  endDate,
  Icon,
}: {
  startDate: Date;
  endDate?: Date;
  Icon: LucideIcon;
}) {
  return (
    <div className="flex items-center gap-1.5">
      <Icon className="icon-xs text-muted-foreground" />
      <span className="text-muted-foreground text-xs font-medium">
        {format(startDate, "LLLL yyyy")} -{" "}
        {endDate ? format(endDate, "LLLL yyyy") : "Present"}
      </span>
    </div>
  );
}
