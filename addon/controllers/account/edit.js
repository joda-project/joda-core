import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  i18n: service(),
  locale: computed('model.locale', function() {
    const locales = this.get('locales');
    for (let l of locales) {
      if (l.id == this.get('model.locale')) {
        return l;
      }
    }
  }),

  locales: computed('i18n{locale,locales}', function() {
    const i18n = this.get('i18n');
    return this.get('i18n.locales').map(function(locale) {
      return {
        id: locale,
        text: i18n.t('common.language.' + locale)
      };
    });
  }),

  actions: {
    chooseLocale(locale) {
      this.get('model').set('locale', locale.id);
    }
  }
});
