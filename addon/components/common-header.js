import Component from '@ember/component';
import { inject as service } from '@ember/service';
import layout from '../templates/components/common-header';

export default Component.extend({
  layout,
  session: service(),
  currentUser: service(),
  joda: service(),

  tagName: 'section',
  classNames: ['hero', 'is-primary'],

  title: '',
  subtitle: '',

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },

    toggleHamburger() {
      this.$('.navbar-burger,.navbar-menu').toggleClass('is-active');
    }
  }
});
