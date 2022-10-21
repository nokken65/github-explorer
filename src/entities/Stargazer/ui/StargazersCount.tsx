import { Text } from '@nextui-org/react';
import { memo } from 'react';

import { ReactComponent as StarIcon } from '@/shared/icons/star-icon.svg';
import { numberToShort } from '@/shared/utils';

type StargazersCountProps = {
  count: number;
};

const StargazersCountView = ({ count }: StargazersCountProps) => {
  return (
    <Text
      css={{
        fontSize: '$sm',
        whiteSpace: 'nowrap',
      }}
    >
      <StarIcon style={{ marginRight: '0.2rem' }} />
      {numberToShort(count)}
    </Text>
  );
};

export const StargazersCount = memo(StargazersCountView);
