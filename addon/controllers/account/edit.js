import Ember from 'ember';

export default Ember.Controller.extend({
  i18n: Ember.inject.service(),
  locale: Ember.computed('model.locale', function() {
    const locales = this.get('locales');
    for (let l of locales) {
      if (l.id == this.get('model.locale')) {
        return l;
      }
    }
  }),

  locales: Ember.computed('i18n.locale', 'i18n.locales', function() {
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
