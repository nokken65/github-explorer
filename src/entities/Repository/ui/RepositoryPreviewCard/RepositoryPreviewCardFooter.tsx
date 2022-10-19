import { Card } from '@nextui-org/react';
import { memo, PropsWithChildren } from 'react';

type RepositoryPreviewCardFooterProps = PropsWithChildren;

const RepositoryPreviewCardFooterView = ({
  children,
}: RepositoryPreviewCardFooterProps) => {
  return (
    <Card.Footer css={{ pt: '$xs', pb: 0, mt: 'auto' }}>{children}</Card.Footer>
  );
};

export const RepositoryPreviewCardFooter = memo(
  RepositoryPreviewCardFooterView,
);
