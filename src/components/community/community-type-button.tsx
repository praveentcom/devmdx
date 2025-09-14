import { MicVocal, MonitorPlay, Presentation } from "lucide-react";
import Link from "next/link";
import { Button, ButtonProps } from "passport-ui/button";

import { URLS } from "@/components/helpers/urls";
import { EnumCommunityContributionType } from "@/types/community";

interface CommunityTypeButtonProps {
  type: EnumCommunityContributionType;
  variant?: ButtonProps["variant"];
  className?: string;
}

export const getCommunityTypeLabel = (value: EnumCommunityContributionType) => {
  switch (value) {
    case EnumCommunityContributionType.TALK_SESSION:
      return "Talk session";
    case EnumCommunityContributionType.WORKSHOP:
      return "Workshop";
    case EnumCommunityContributionType.ONLINE_COURSE:
      return "Online course";
    default:
      return "Generic contribution";
  }
};

export const getCommunityTypeIcon = (value: EnumCommunityContributionType) => {
  switch (value) {
    case EnumCommunityContributionType.TALK_SESSION:
      return <MicVocal className="size-3" />;
    case EnumCommunityContributionType.WORKSHOP:
      return <Presentation className="size-3" />;
    case EnumCommunityContributionType.ONLINE_COURSE:
      return <MonitorPlay className="size-3" />;
  }
};

export function CommunityTypeButton({
  type,
  variant = "outline",
  className,
}: CommunityTypeButtonProps) {
  return (
    <Link href={URLS.COMMUNITY_TYPE(type)}>
      <Button variant={variant} className={className}>
        {getCommunityTypeIcon(type)}
        {getCommunityTypeLabel(type)}
      </Button>
    </Link>
  );
}
