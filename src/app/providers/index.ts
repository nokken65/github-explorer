import { createHistoryRouter } from 'atomic-router';

import compose from '@/shared/utils/compose';

import { withNextUI } from './withNextUI';
import { withRouter } from './withRouter';
import { withTheme } from './withTheme';

type ProvidersProps = {
  router: ReturnType<typeof createHistoryRouter>;
};

export const withProviders = ({ router }: ProvidersProps) =>
  compose(withRouter(router), withTheme, withNextUI);
