import Ember from 'ember';
import SessionLoginStayMixin from 'joda-core/mixins/session-login-stay';

export default Ember.Route.extend(SessionLoginStayMixin, {
  titleToken: function(model) {
    return model.get('name');
  },

  model: function(params) {
    return this.store.findRecord('file', params.content_id);
  },
});
