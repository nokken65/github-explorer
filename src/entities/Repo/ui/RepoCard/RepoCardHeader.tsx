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
    <Container
      as='h2'
      className='min-h-[28px] flex-row flex-nowrap overflow-x-hidden text-ellipsis whitespace-nowrap text-lg font-bold'
    >
      <Link
        className='overflow-x-hidden text-ellipsis whitespace-nowrap text-[var(--rs-text-primary);]'
        to={notFoundRoute}
      >
        {ownerName}
      </Link>
      /
      <Link
        className='overflow-x-hidden text-ellipsis whitespace-nowrap'
        to={notFoundRoute}
      >
        {name}
      </Link>
    </Container>
  );
};

export const RepoCardHeader = memo(RepoCardHeaderView);
