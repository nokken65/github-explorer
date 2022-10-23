import { Badge, Text } from '@nextui-org/react';
import { memo } from 'react';

type TLangTextProps = {
  name: string;
  color?: string;
};

const LangTextView = ({ name, color }: TLangTextProps) => {
  return (
    <Text
      css={{
        display: 'inline-flex',
        flexWrap: 'nowrap',
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

export const LangText = memo(LangTextView);
