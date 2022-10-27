import { PropsWithChildren } from 'react';
import { Container, Panel } from 'rsuite';

import { RepoCardBody } from './RepoCardBody';
import { RepoCardFooter } from './RepoCardFooter';
import { RepoCardHeader } from './RepoCardHeader';

type TRepoCardProps = PropsWithChildren;

const RepoCard = ({ children }: TRepoCardProps) => {
  return (
    <Panel shaded className='[&>div]:h-full [&>div]:py-4'>
      <Container className='h-full justify-between gap-4'>{children}</Container>
    </Panel>
  );
};

RepoCard.Header = RepoCardHeader;
RepoCard.Body = RepoCardBody;
RepoCard.Footer = RepoCardFooter;

export { RepoCard };
