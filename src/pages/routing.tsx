import { Container, Loading } from '@nextui-org/react';
import { Route } from 'atomic-router-react';
import { lazy, PropsWithChildren, Suspense } from 'react';

import { homeRoute, notFoundRoute } from '@/shared/config/routes';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

const HomePage = lazy(() => import('./HomePage'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Container
      fluid
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: 0,
        m: 0,
        w: '100%',
        maxW: '100%',
        h: '100%',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Container
        as='main'
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          gap: '$lg',
          p: '2rem',
          m: 0,
          w: '100%',
          maxW: '100%',
          flexGrow: 1,
        }}
      >
        {children}
      </Container>
      <Footer />
    </Container>
  );
};

const Routing = () => {
  return (
    <Layout>
      <Suspense fallback={<Loading size='xl' />}>
        <Route route={homeRoute} view={HomePage} />
        <Route route={notFoundRoute} view={NotFoundPage} />
      </Suspense>
    </Layout>
  );
};

export { Routing };
