import { Text } from '@nextui-org/react';
import { memo, useMemo } from 'react';

import { formatUpdatedAtDate } from '@/shared/utils';

type TUpdatedAtTextProps = {
  date: Date;
};

const UpdatedAtTextView = ({ date }: TUpdatedAtTextProps) => {
  const formattedDate = useMemo(() => formatUpdatedAtDate(date), [date]);

  return (
    <Text
      css={{
        fontSize: '$sm',
        whiteSpace: 'nowrap',
        ml: 'auto',
      }}
    >
      {formattedDate}
    </Text>
  );
};

export const UpdatedAtText = memo(UpdatedAtTextView);
