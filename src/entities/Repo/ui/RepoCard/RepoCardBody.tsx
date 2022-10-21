import { Card, Text } from '@nextui-org/react';
import { memo } from 'react';

type TRepoCardBodyProps = {
  description: string;
};

const RepoCardBodyView = ({ description }: TRepoCardBodyProps) => {
  return (
    <Card.Body css={{ overflowY: 'visible', py: 0 }}>
      <Text>{description}</Text>
    </Card.Body>
  );
};

export const RepoCardBody = memo(RepoCardBodyView);
