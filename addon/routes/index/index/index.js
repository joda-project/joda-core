import Ember from 'ember';
import SessionLoginStayMixin from 'joda-core/mixins/session-login-stay';

export default Ember.Route.extend(SessionLoginStayMixin, {
  model: function(params) {
    Ember.$.extend(params, this.paramsFor('index.index'));

    var properties = {
      'include': 'files'
    };

    if (params.search) {
      properties['search'] = params.search;
    }

    if (params.tags) {
      properties['tags'] = params.tags;
    }

    return this.get('store').query('content', properties);
  }
});
