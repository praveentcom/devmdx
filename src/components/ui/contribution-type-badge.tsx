import { MicVocal, MonitorPlay, Presentation } from 'lucide-react';

import { cn } from '@/lib/utils';
import { EnumCommunityContributionType } from '@/types/community';

import { Badge } from './badge';

interface ContributionTypeBadgeProps {
  type: EnumCommunityContributionType;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  className?: string;
}

export function ContributionTypeBadge({
  type,
  variant = 'outline',
  className,
}: ContributionTypeBadgeProps) {
  const getTypeLabel = (value: EnumCommunityContributionType) => {
    switch (value) {
      case EnumCommunityContributionType.TALK_SESSION:
        return 'Talk Session';
      case EnumCommunityContributionType.WORKSHOP:
        return 'Workshop';
      case EnumCommunityContributionType.ONLINE_COURSE:
        return 'Online Course';
    }
  };

  const getTypeIcon = (value: EnumCommunityContributionType) => {
    switch (value) {
      case EnumCommunityContributionType.TALK_SESSION:
        return <MicVocal className="size-3 mr-1" />;
      case EnumCommunityContributionType.WORKSHOP:
        return <Presentation className="size-3 mr-1" />;
      case EnumCommunityContributionType.ONLINE_COURSE:
        return <MonitorPlay className="size-3 mr-1" />;
    }
  };

  return (
    <Badge variant={variant} className={cn('badge-container', className)}>
      {getTypeIcon(type)}
      {getTypeLabel(type)}
    </Badge>
  );
}
