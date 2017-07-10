import Ember from 'ember';

export default Ember.Service.extend({
  session: Ember.inject.service(),
  store: Ember.inject.service(),
  i18n: Ember.inject.service(),

  load() {
    if (this.get('session.isAuthenticated')) {
      return this.get('store').queryRecord('user', {
        me: true
      }).then((user) => {
        this.set('user', user);
        this.set('i18n.locale', user.get('locale'));
      });
    }
  }
});
