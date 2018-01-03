import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { inject as service } from '@ember/service';
import { translationMacro as t } from "ember-i18n";

export default Route.extend({
  titleToken: t('common.manage'),
  i18n: service(),

  model() {
    return hash({
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
