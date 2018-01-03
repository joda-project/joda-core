import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import SessionLoginStayMixin from 'joda-core/mixins/session-login-stay';

export default Route.extend(SessionLoginStayMixin, {
  joda: service(),

  setupController: function(controller) {
    this._super(...arguments);

    controller.set('joda', this.get('joda'));
  }
});
