import compose from '@/shared/utils/compose';

import { router } from '../router';
import { withRouter } from './withRouter';
import { withTheme } from './withTheme';

export const withProviders = compose(withRouter(router), withTheme);
