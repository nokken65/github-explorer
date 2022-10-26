import { PropsWithChildren } from 'react';
import { Panel } from 'rsuite';

import { RepoCardBody } from './RepoCardBody';
import { RepoCardFooter } from './RepoCardFooter';
import { RepoCardHeader } from './RepoCardHeader';

type TRepoCardProps = PropsWithChildren;

const RepoCard = ({ children }: TRepoCardProps) => {
  return <Panel shaded>{children}</Panel>;
};

RepoCard.Header = RepoCardHeader;
RepoCard.Body = RepoCardBody;
RepoCard.Footer = RepoCardFooter;

export { RepoCard };
