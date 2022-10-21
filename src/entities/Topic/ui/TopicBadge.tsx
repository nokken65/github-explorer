import { Badge } from '@nextui-org/react';
import { memo } from 'react';

import { Link } from '@/shared/components';
import { notFoundRoute } from '@/shared/config/routes';

type TTopicBadgeProps = {
  name: string;
};

const TopicBadgeView = ({ name }: TTopicBadgeProps) => {
  return (
    <Link to={notFoundRoute}>
      <Badge disableOutline color='primary' css={{ px: '$2', py: '$1' }}>
        {name}
      </Badge>
    </Link>
  );
};

export const TopicBadge = memo(TopicBadgeView);
