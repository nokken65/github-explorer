import { Text } from '@nextui-org/react';
import { memo } from 'react';

type TLicenseNameProps = { name: string };

const LicenseNameView = ({ name }: TLicenseNameProps) => {
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
