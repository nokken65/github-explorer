import { Container, Text } from '@nextui-org/react';

import { Link } from '@/shared/components';

const Footer = () => {
  return (
    <Container
      as='footer'
      css={{
        display: 'flex',
        justifyContent: 'center',
        gap: '$xs',
      }}
    >
      <Text>Powered with ❤️ from</Text>
      <Link rel='noreferrer' target='_blank' to='https://github.com/nokken65'>
        nokken65
      </Link>
    </Container>
  );
};

export { Footer };
