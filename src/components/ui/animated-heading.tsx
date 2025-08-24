import { ReactNode } from "react";
import { BlurIn } from "@/components/motion-primitives/blur-in";
import { LucideIcon } from "lucide-react";

interface AnimatedHeadingProps {
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
  delay?: number;
  children?: ReactNode;
}

export function AnimatedHeading({
  icon: Icon,
  title,
  subtitle,
  delay = 0,
  children,
}: AnimatedHeadingProps) {
  return (
    <BlurIn delay={delay} duration={0.5}>
      <div className="grid">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="size-5 text-primary" />}
          <h1 className="text-lg font-semibold">{title}</h1>
        </div>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
        {children}
      </div>
    </BlurIn>
  );
}