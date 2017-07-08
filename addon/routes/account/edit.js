import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Settings',
  currentUser: Ember.inject.service(),

  model () {
    return this.get('currentUser.user');
  },

  actions: {
    save() {
      let controller = this.get('controller');
      let item = controller.get('model');

      item.save().then(() => {
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
