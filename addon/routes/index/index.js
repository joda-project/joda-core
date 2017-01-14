import Ember from 'ember';
import SessionLoginStayMixin from 'joda-core/mixins/session-login-stay';

export default Ember.Route.extend(SessionLoginStayMixin, {
  queryParams: {
    'search': {
      refreshModel: true,
      replace: true
    },
    'tags': {
      refreshModel: true,
      replace: true
    }
  },

  model: function() {
    return Ember.RSVP.hash({
      tags: this.get('store').findAll('tag')
    });
  }
});
