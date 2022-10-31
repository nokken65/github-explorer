import { Link } from 'atomic-router-react';
import { memo } from 'react';
import { Tag } from 'rsuite';

import { notFoundRoute } from '@/shared/config/routes';

type TTopicBadgeProps = {
  name: string;
};

const TopicBadgeView = ({ name }: TTopicBadgeProps) => {
  return (
    <Link to={notFoundRoute}>
      <Tag>{name}</Tag>
    </Link>
  );
};

export const TopicBadge = memo(TopicBadgeView);
