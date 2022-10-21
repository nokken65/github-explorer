import { Text } from '@nextui-org/react';
import { memo } from 'react';

type LicenseNameProps = { name: string };

const LicenseNameView = ({ name }: LicenseNameProps) => {
  return (
    <Text
      css={{
        fontSize: '$sm',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      }}
    >
      {name}
    </Text>
  );
};

export const LicenseName = memo(LicenseNameView);
