import { Card } from '@nextui-org/react';
import { PropsWithChildren } from 'react';

import { RepoCardBody } from './RepoCardBody';
import { RepoCardFooter } from './RepoCardFooter';
import { RepoCardHeader } from './RepoCardHeader';

type TRepoCardProps = PropsWithChildren;

const RepoCard = ({ children }: TRepoCardProps) => {
  return (
    <Card
      isHoverable
      as='li'
      css={{ height: '100%', pt: '$xs', pb: '$sm' }}
      variant='flat'
    >
      {children}
    </Card>
  );
};

RepoCard.Header = RepoCardHeader;
RepoCard.Body = RepoCardBody;
RepoCard.Footer = RepoCardFooter;

export { RepoCard };