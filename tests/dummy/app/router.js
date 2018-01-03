import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import routerHelper from 'joda-core/utils/router-helper';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  routerHelper(this);
});

export default Router;
