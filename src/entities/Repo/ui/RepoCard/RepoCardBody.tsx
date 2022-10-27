import { memo } from 'react';
import { Container } from 'rsuite';

type TRepoCardBodyProps = {
  description: string;
};

const RepoCardBodyView = ({ description }: TRepoCardBodyProps) => {
  return (
    <Container className='h-full'>
      <p>{description}</p>
    </Container>
  );
};

export const RepoCardBody = memo(RepoCardBodyView);
