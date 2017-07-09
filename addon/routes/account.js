import Ember from 'ember';
import { translationMacro as t } from "ember-i18n";

import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  titleToken: t('account.my'),
  i18n: Ember.inject.service()
});
