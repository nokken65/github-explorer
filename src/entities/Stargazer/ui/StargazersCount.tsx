import { Text } from '@nextui-org/react';
import { memo } from 'react';

import { Repository } from '@/shared/api/github';
import { ReactComponent as StarIcon } from '@/shared/icons/star-icon.svg';
import { numberToShort } from '@/shared/utils';

type StargazersCountProps = Pick<Repository, 'stargazerCount'>;

const StargazersCountView = ({ stargazerCount }: StargazersCountProps) => {
  return (
    <Text
      css={{
        fontSize: '$sm',
        whiteSpace: 'nowrap',
      }}
    >
      <StarIcon style={{ marginRight: '0.2rem' }} />
      {numberToShort(stargazerCount)}
    </Text>
  );
};

export const StargazersCount = memo(StargazersCountView);
