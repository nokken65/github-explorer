import { Text } from '@nextui-org/react';
import { memo } from 'react';

import { formatUpdatedAtDate } from '@/shared/utils';

type UpdatedAtTextProps = {
  date: Date;
};

const UpdatedAtTextView = ({ date }: UpdatedAtTextProps) => {
  return (
    <Text
      css={{
        fontSize: '$sm',
        whiteSpace: 'nowrap',
        ml: 'auto',
      }}
    >
      {formatUpdatedAtDate(date)}
    </Text>
  );
};

export const UpdatedAtText = memo(UpdatedAtTextView);
