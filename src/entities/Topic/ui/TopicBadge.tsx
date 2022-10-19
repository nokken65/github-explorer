import { Badge } from '@nextui-org/react';
import { memo } from 'react';

import { RepositoryTopic } from '@/shared/api/github';
import { Link } from '@/shared/components';

type TopicBadgeProps = Pick<RepositoryTopic['topic'], 'name'> &
  Pick<RepositoryTopic, 'url'>;

const TopicBadgeView = ({ name, url }: TopicBadgeProps) => {
  return (
    <Link to={url}>
      <Badge disableOutline color='primary' css={{ px: '$2', py: '$1' }}>
        {name}
      </Badge>
    </Link>
  );
};

export const TopicBadge = memo(TopicBadgeView);
