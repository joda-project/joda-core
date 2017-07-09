import Ember from 'ember';
import { translationMacro as t } from "ember-i18n";

import SessionLoginStayMixin from 'joda-core/mixins/session-login-stay';

export default Ember.Route.extend(SessionLoginStayMixin, {
  titleToken: t('common.about'),
  i18n: Ember.inject.service()
});
