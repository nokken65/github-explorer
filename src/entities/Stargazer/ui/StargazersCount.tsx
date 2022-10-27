import { memo, useMemo } from 'react';

import { ReactComponent as StarIcon } from '@/shared/icons/star-icon.svg';
import { numberToShort } from '@/shared/utils';

type TStargazersCountProps = {
  count: number;
};

const StargazersCountView = ({ count }: TStargazersCountProps) => {
  const formattedCount = useMemo(() => numberToShort(count), []);

  return (
    <span className='whitespace-nowrap'>
      <StarIcon style={{ marginRight: '0.2rem' }} />
      {formattedCount}
    </span>
  );
};

export const StargazersCount = memo(StargazersCountView);
