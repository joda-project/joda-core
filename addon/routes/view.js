import Route from '@ember/routing/route';
import SessionLoginStayMixin from 'joda-core/mixins/session-login-stay';

export default Route.extend(SessionLoginStayMixin, {
  titleToken: function(model) {
    return model.get('name');
  },

  model: function(params) {
    return this.store.findRecord('file', params.document_id);
  },
});
