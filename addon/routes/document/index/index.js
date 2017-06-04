import Ember from 'ember';
import SessionLoginStayMixin from 'joda-core/mixins/session-login-stay';

export default Ember.Route.extend(SessionLoginStayMixin, {
  model: function(params) {
    let root = this.get('pageRoot');
    let documentType = this.get('documentType');

    let properties = {
      'include': 'files'
    };

    Ember.$.extend(properties, params, this.paramsFor(`${root}.index`));
    Object.keys(properties).forEach((key) => (properties[key] == null) && delete properties[key]);

    return this.get('store').query(documentType, properties);
  }
});
