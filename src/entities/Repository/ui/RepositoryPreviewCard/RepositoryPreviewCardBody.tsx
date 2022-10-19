import { Card, Text } from '@nextui-org/react';
import { memo } from 'react';

import { RepositoryPreviewFragment } from '@/shared/api/github';

type RepositoryPreviewCardBodyProps = Pick<
  RepositoryPreviewFragment,
  'description'
>;

const RepositoryPreviewCardBodyView = ({
  description,
}: RepositoryPreviewCardBodyProps) => {
  return (
    <Card.Body css={{ overflowY: 'visible', py: 0 }}>
      <Text>{description}</Text>
    </Card.Body>
  );
};

export const RepositoryPreviewCardBody = memo(RepositoryPreviewCardBodyView);
