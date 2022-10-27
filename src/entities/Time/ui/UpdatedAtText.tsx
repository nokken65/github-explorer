import { memo, useMemo } from 'react';

import { formatUpdatedAtDate } from '@/shared/utils';

type TUpdatedAtTextProps = {
  date: Date;
};

const UpdatedAtTextView = ({ date }: TUpdatedAtTextProps) => {
  const formattedDate = useMemo(() => formatUpdatedAtDate(date), [date]);

  return <p className='ml-auto whitespace-nowrap'>{formattedDate}</p>;
};

export const UpdatedAtText = memo(UpdatedAtTextView);
