import '@/shared/styles/index.less';

import { reflect } from '@effector/reflect';

import { langModel } from '@/entities/Lang';
import { Routing } from '@/pages';

import { withProviders } from './providers';

const AppView = () => {
  return <Routing />;
};

const App = reflect({
  view: AppView,
  bind: {},
  hooks: {
    mounted: () => {
      langModel.loadLangsFx();
    },
  },
});

export default withProviders(App);
