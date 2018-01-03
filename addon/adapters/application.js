import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from 'ember-get-config';

const {
  Joda
} = config;

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  namespace: 'api',
  authorizer: 'authorizer:oauth2',

  init() {
    this._super(...arguments);
    this.host = Joda.backendUri ? Joda.backendUri : '';
  }
});
