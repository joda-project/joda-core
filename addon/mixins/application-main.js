import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';
import config from 'ember-get-config';

const {
  Joda
} = config;

export default Mixin.create({
  currentUser: service(),
  joda: service(),

  title: function(tokens) {
    const base = Joda.appName;

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
