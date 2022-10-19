import { Container, ContainerProps } from '@nextui-org/react';
import { memo } from 'react';

type ColumnProps = Partial<ContainerProps>;

const ColumnView = ({ children, css, ...props }: ColumnProps) => {
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
        flexDirection: 'column',
      }}
    >
      {children}
    </Container>
  );
};

const Column = memo(ColumnView);

export { Column };
