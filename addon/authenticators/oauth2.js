import Ember from 'ember';
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import config from 'ember-get-config';

const {
  Joda
} = config;

export default OAuth2PasswordGrant.extend({
  clientId: Joda.authKey,

  _clientIdHeader: Ember.computed('clientId', function() {
    const clientId = this.get('clientId');

    if (!Ember.isEmpty(clientId)) {
      return {
        Authorization: `Basic ${clientId}`
      };
    }
  }),

  serverTokenEndpoint: Joda.backendUri + '/auth/token/',
  serverTokenRevocationEndpoint: Joda.backendUri + '/auth/revoke_token/'
});
