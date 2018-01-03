import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';
import config from 'ember-get-config';

const {
  Joda
} = config;

export default OAuth2PasswordGrant.extend({
  clientId: Joda.authKey,

  _clientIdHeader: computed('clientId', function() {
    const clientId = this.get('clientId');

    if (!isEmpty(clientId)) {
      return {
        Authorization: `Basic ${clientId}`
      };
    }
  }),

  serverTokenEndpoint: (Joda.backendUri ? Joda.backendUri : '') + '/auth/token/',
  serverTokenRevocationEndpoint: (Joda.backendUri ? Joda.backendUri : '') + '/auth/revoke_token/'
});
