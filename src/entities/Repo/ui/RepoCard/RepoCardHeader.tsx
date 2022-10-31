import { Link } from 'atomic-router-react';
import { memo } from 'react';
import { Container } from 'rsuite';

import { repoRoute } from '@/shared/config/routes';

type TRepoCardHeaderProps = {
  repo: string;
  owner: string;
};

const RepoCardHeaderView = ({ repo, owner }: TRepoCardHeaderProps) => {
  return (
    <Container as='h2'>
      <Link
        className='w-fit overflow-x-hidden text-ellipsis whitespace-nowrap text-lg font-bold'
        params={{ repo, owner }}
        to={repoRoute}
      >
        <b className='text-black dark:text-white'>{owner}</b>/{repo}
      </Link>
    </Container>
  );
};

export const RepoCardHeader = memo(RepoCardHeaderView);
