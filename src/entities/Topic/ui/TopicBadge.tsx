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
      <Tag
        className='rounded-full bg-[var(--rs-blue-700);] py-[1px] hover:opacity-80'
        color='blue'
      >
        {name}
      </Tag>
    </Link>
  );
};

export const TopicBadge = memo(TopicBadgeView);
