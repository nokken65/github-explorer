import { Card, Text } from '@nextui-org/react';
import { memo } from 'react';

import { Link } from '@/shared/components';
import { notFoundRoute } from '@/shared/config/routes';

type RepoCardHeaderProps = {
  name: string;
  ownerName: string;
};

const RepoCardHeaderView = ({ name, ownerName }: RepoCardHeaderProps) => {
  return (
    <Card.Header css={{ py: 0 }}>
      <Link
        underline
        css={{
          overflow: 'hidden',
        }}
        to={notFoundRoute}
      >
        <Text
          css={{
            fontSize: '$xl',
            whiteSpace: 'nowrap',
          }}
        >
          {ownerName}
        </Text>
        <Text
          css={{
            fontSize: '$xl',
          }}
        >
          /
        </Text>
        <Text
          color='primary'
          css={{
            fontSize: '$xl',
            fontWeight: '$bold',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          {name}
        </Text>
      </Link>
    </Card.Header>
  );
};

export const RepoCardHeader = memo(RepoCardHeaderView);
