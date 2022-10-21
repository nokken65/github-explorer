import { Text } from '@nextui-org/react';
import { memo, useMemo } from 'react';

import { ReactComponent as StarIcon } from '@/shared/icons/star-icon.svg';
import { numberToShort } from '@/shared/utils';

type TStargazersCountProps = {
  count: number;
};

const StargazersCountView = ({ count }: TStargazersCountProps) => {
  const formattedCount = useMemo(() => numberToShort(count), []);

  return (
    <Text
      css={{
        fontSize: '$sm',
        whiteSpace: 'nowrap',
      }}
    >
      <StarIcon style={{ marginRight: '0.2rem' }} />
      {formattedCount}
    </Text>
  );
};

export const StargazersCount = memo(StargazersCountView);
