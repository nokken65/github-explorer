import { Card } from '@nextui-org/react';
import { memo, PropsWithChildren } from 'react';

type RepoCardFooterProps = PropsWithChildren;

const RepoCardFooterView = ({ children }: RepoCardFooterProps) => {
  return (
    <Card.Footer css={{ pt: '$xs', pb: 0, mt: 'auto' }}>{children}</Card.Footer>
  );
};

export const RepoCardFooter = memo(RepoCardFooterView);
