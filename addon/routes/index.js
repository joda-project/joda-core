import Ember from 'ember';

export default Ember.Route.extend({
  joda: Ember.inject.service(),

  setupController: function(controller) {
    this._super(...arguments);

    controller.set('joda', this.get('joda'));
  }
});
