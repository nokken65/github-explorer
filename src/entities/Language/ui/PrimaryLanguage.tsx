import { Badge, Text } from '@nextui-org/react';
import { memo } from 'react';

import { TLanguage } from '../model/models';

type TPrimaryLanguageProps = TLanguage;

const PrimaryLanguageView = ({ name, color }: TPrimaryLanguageProps) => {
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
