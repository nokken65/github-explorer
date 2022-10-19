import { Card, Text } from '@nextui-org/react';
import { memo, useMemo } from 'react';

import { RepositoryPreviewFragment } from '@/shared/api/github';
import { Link } from '@/shared/components';

type RepositoryPreviewCardHeaderProps = Pick<
  RepositoryPreviewFragment,
  'nameWithOwner' | 'url'
>;

const RepositoryPreviewCardHeaderView = ({
  nameWithOwner,
  url,
}: RepositoryPreviewCardHeaderProps) => {
  const splittedName = useMemo(() => nameWithOwner.split('/'), [nameWithOwner]);

  return (
    <Card.Header css={{ py: 0 }}>
      <Link
        underline
        to={url}
        css={{
          overflow: 'hidden',
        }}
      >
        <Text
          css={{
            fontSize: '$xl',
            whiteSpace: 'nowrap',
          }}
        >
          {splittedName[0]}
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
          {splittedName[1]}
        </Text>
      </Link>
    </Card.Header>
  );
};

export const RepositoryPreviewCardHeader = memo(
  RepositoryPreviewCardHeaderView,
);
