import Ember from 'ember';
import { translationMacro as t } from "ember-i18n";

export default Ember.Route.extend({
  titleToken: t('common.error.404'),
  i18n: Ember.inject.service()
});
