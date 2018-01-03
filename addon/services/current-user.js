import Service, { inject as service } from '@ember/service';

export default Service.extend({
  session: service(),
  store: service(),
  i18n: service(),

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
