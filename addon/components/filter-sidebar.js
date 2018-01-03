import Component from '@ember/component';
import layout from '../templates/components/filter-sidebar';

export default Component.extend({
  layout,
  classNames: ['column', 'is-filter-panel'],

  actions: {
    reset: function() {
      this.get('reset')();
    }
  }
});
