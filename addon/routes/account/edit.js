import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { translationMacro as t } from "ember-i18n";

export default Route.extend({
  titleToken: t('account.settings'),
  currentUser: service(),
  i18n: service(),

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
