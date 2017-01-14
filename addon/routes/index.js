import Ember from 'ember';
import SessionLoginStayMixin from 'joda-core/mixins/session-login-stay';

export default Ember.Route.extend(SessionLoginStayMixin, {
  joda: Ember.inject.service(),

  setupController: function(controller) {
    this._super(...arguments);

    controller.set('joda', this.get('joda'));
  }
});
