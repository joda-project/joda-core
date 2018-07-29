import { isPresent } from '@ember/utils';
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from 'ember-get-config';

const { Joda } = config;

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  namespace: 'api',

  authorize(xhr) {
    let { access_token } = this.get('session.data.authenticated');
    if (isPresent(access_token)) {
      xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
    }
  },

  init() {
    this._super(...arguments);
    this.host = Joda.backendUri ? Joda.backendUri : '';
  }
});
