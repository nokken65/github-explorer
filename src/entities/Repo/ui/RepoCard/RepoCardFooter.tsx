import { memo, PropsWithChildren } from 'react';
import { Container } from 'rsuite';

type TRepoCardFooterProps = PropsWithChildren;

const RepoCardFooterView = ({ children }: TRepoCardFooterProps) => {
  return <Container className='justify-end gap-2'>{children}</Container>;
};

export const RepoCardFooter = memo(RepoCardFooterView);
