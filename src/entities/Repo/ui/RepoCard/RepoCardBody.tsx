import { memo } from 'react';
import { Container } from 'rsuite';

type TRepoCardBodyProps = {
  description: string;
};

const RepoCardBodyView = ({ description }: TRepoCardBodyProps) => {
  return (
    <Container>
      <p>{description}</p>
    </Container>
  );
};

export const RepoCardBody = memo(RepoCardBodyView);
