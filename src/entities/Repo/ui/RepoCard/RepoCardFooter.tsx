import { memo, PropsWithChildren } from 'react';
import { Container } from 'rsuite';

type TRepoCardFooterProps = PropsWithChildren;

const RepoCardFooterView = ({ children }: TRepoCardFooterProps) => {
  return <Container className='gap-4'>{children}</Container>;
};

export const RepoCardFooter = memo(RepoCardFooterView);
