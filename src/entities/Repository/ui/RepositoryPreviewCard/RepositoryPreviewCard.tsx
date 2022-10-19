import { Card } from '@nextui-org/react';
import { PropsWithChildren } from 'react';

import { RepositoryPreviewCardBody } from './RepositoryPreviewCardBody';
import { RepositoryPreviewCardFooter } from './RepositoryPreviewCardFooter';
import { RepositoryPreviewCardHeader } from './RepositoryPreviewCardHeader';

const RepositoryPreviewCard = ({ children }: PropsWithChildren) => {
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

RepositoryPreviewCard.Header = RepositoryPreviewCardHeader;
RepositoryPreviewCard.Body = RepositoryPreviewCardBody;
RepositoryPreviewCard.Footer = RepositoryPreviewCardFooter;

export { RepositoryPreviewCard };
