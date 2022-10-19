import { Text } from '@nextui-org/react';
import { memo } from 'react';

import { License } from '@/shared/api/github';

type LicenseNameProps = Pick<License, 'name'>;

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
