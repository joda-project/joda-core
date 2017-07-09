import Ember from 'ember';
import { translationMacro as t } from "ember-i18n";

export default Ember.Route.extend({
  titleToken: t('files.upload'),
  i18n: Ember.inject.service()
});
