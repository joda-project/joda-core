import Ember from 'ember';
import {
  translationMacro as t
} from "ember-i18n";

export default Ember.Route.extend({
  titleToken: t('account.settings'),
  currentUser: Ember.inject.service(),
  i18n: Ember.inject.service(),

  model() {
    return this.get('currentUser.user');
  },

  actions: {
    save() {
      let controller = this.get('controller');
      let item = controller.get('model');

      item.save().then(() => {
        this.set('i18n.locale', item.get('locale'));
        controller.transitionToRoute('account.index');
      }).catch(() => {
        // TODO: handle the error
      });
    },

    cancel() {
      let controller = this.get('controller');
      let item = controller.get('model');
      item.rollbackAttributes();

      controller.transitionToRoute('account.index');
    }
  }
});
