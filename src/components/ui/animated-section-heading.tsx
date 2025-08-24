import { ReactNode } from "react";
import { BlurIn } from "@/components/motion-primitives/blur-in";
import { LucideIcon } from "lucide-react";

interface AnimatedSectionHeadingProps {
  icon?: LucideIcon;
  title: string;
  delay?: number;
  children?: ReactNode;
}

export function AnimatedSectionHeading({
  icon: Icon,
  title,
  delay = 0,
  children,
}: AnimatedSectionHeadingProps) {
  return (
    <BlurIn delay={delay} duration={0.4}>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="size-5 text-primary" />}
          <h2 className="text-md font-semibold">{title}</h2>
        </div>
        {children}
      </div>
    </BlurIn>
  );
}