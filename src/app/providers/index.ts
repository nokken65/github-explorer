import compose from '@/shared/utils/compose';

import { router } from '../router';
import { withNextUI } from './withNextUI';
import { withRouter } from './withRouter';

export const withProviders = compose(withRouter(router), withNextUI);
