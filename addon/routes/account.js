import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { translationMacro as t } from "ember-i18n";

import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  titleToken: t('account.my'),
  i18n: service()
});
