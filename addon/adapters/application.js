import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from 'ember-get-config';

const {
  Joda
} = config;

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  namespace: 'api',
  host: Joda.backendUri,
  authorizer: 'authorizer:oauth2'
});
