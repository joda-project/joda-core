import Ember from 'ember';

export default Ember.Mixin.create({
  currentUser: Ember.inject.service(),
  joda: Ember.inject.service(),

  title: function(tokens) {
    const base = 'Joda';

    return tokens && tokens.length ? tokens.reverse().join(' - ') + ' - ' + base : base;
  },

  beforeModel() {
    return this._loadCurrentUser();
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser().catch(() => this.get('session').invalidate());
  },

  _loadCurrentUser() {
    return this.get('currentUser').load();
  }
});
