import { Badge, Text } from '@nextui-org/react';
import { memo } from 'react';

import { Repository } from '@/shared/api/github';

type PrimaryLanguageProps = Pick<
  NonNullable<Repository['primaryLanguage']>,
  'color' | 'name'
>;

const PrimaryLanguageView = ({ name, color }: PrimaryLanguageProps) => {
  return (
    <Text
      css={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '$2',
        fontSize: '$sm',
      }}
    >
      {color && (
        <Badge
          disableOutline
          style={{ backgroundColor: color }}
          variant='dot'
        />
      )}
      {name}
    </Text>
  );
};

export const PrimaryLanguage = memo(PrimaryLanguageView);
