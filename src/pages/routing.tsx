import { Route } from 'atomic-router-react';
import { lazy, PropsWithChildren, Suspense } from 'react';
import { Container, Content, Loader } from 'rsuite';

import { homeRoute, notFoundRoute } from '@/shared/config/routes';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

const HomePage = lazy(() => import('./HomePage'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Container className='min-h-screen'>
      <Header />
      <Content className='flex items-center flex-col my-6 px-5'>
        {children}
      </Content>
      <Footer />
    </Container>
  );
};

const Routing = () => {
  return (
    <Layout>
      <Suspense fallback={<Loader size='lg' speed='fast' />}>
        <Route route={homeRoute} view={HomePage} />
        <Route route={notFoundRoute} view={NotFoundPage} />
      </Suspense>
    </Layout>
  );
};

export { Routing };
