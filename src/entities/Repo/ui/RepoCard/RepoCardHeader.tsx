import { Link } from 'atomic-router-react';
import { memo } from 'react';
import { Container } from 'rsuite';

import { notFoundRoute } from '@/shared/config/routes';

type TRepoCardHeaderProps = {
  name: string;
  ownerName: string;
};

const RepoCardHeaderView = ({ name, ownerName }: TRepoCardHeaderProps) => {
  return (
    <Container>
      <Link to={notFoundRoute}>
        {ownerName}/{name}
      </Link>
    </Container>
  );
};

export const RepoCardHeader = memo(RepoCardHeaderView);
