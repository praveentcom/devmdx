import { Badge } from "./badge";
import { EnumCommunityContributionType } from "@/types/community";
import { MicVocal, Presentation, MonitorPlay } from "lucide-react";

interface ContributionTypeBadgeProps {
  type: EnumCommunityContributionType;
  variant?: "default" | "secondary" | "destructive" | "outline";
  className?: string;
}

export function ContributionTypeBadge({
  type,
  variant = "outline",
  className = "text-xs",
}: ContributionTypeBadgeProps) {
  const getTypeLabel = (value: EnumCommunityContributionType) => {
    switch (value) {
      case EnumCommunityContributionType.TALK_SESSION:
        return "Talk Session";
      case EnumCommunityContributionType.WORKSHOP:
        return "Workshop";
      case EnumCommunityContributionType.ONLINE_COURSE:
        return "Online Course";
    }
  };

  const getTypeIcon = (value: EnumCommunityContributionType) => {
    switch (value) {
      case EnumCommunityContributionType.TALK_SESSION:
        return <MicVocal className="w-3 h-3 mr-1" />;
      case EnumCommunityContributionType.WORKSHOP:
        return <Presentation className="w-3 h-3 mr-1" />;
      case EnumCommunityContributionType.ONLINE_COURSE:
        return <MonitorPlay className="w-3 h-3 mr-1" />;
    }
  };

  return (
    <Badge variant={variant} className={className}>
      {getTypeIcon(type)}
      {getTypeLabel(type)}
    </Badge>
  );
}
