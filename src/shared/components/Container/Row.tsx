import { Container, ContainerProps } from '@nextui-org/react';
import { memo } from 'react';

type RowProps = Partial<ContainerProps>;

const RowView = ({ children, css, ...props }: RowProps) => {
  return (
    <Container
      {...props}
      css={{
        display: 'flex',
        gap: '$sm',
        p: 0,
        m: 0,
        w: '100%',
        maxW: '100%',
        ...css,
        flexDirection: 'row',
      }}
    >
      {children}
    </Container>
  );
};

const Row = memo(RowView);

export { Row };
