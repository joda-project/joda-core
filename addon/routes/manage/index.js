import Ember from 'ember';
import { translationMacro as t } from "ember-i18n";

export default Ember.Route.extend({
  titleToken: t('common.manage'),
  i18n: Ember.inject.service(),

  model() {
    return Ember.RSVP.hash({
      documents: this.get('store').query('document', {
        'include': 'files',
        'verified': false,
        'page_size': 5
      }),
      files: this.get('store').query('file', {
        'document_count': 0,
        'page_size': 5
      }),
    });
  }
});
