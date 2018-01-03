import $ from 'jquery';
import Route from '@ember/routing/route';
import SessionLoginStayMixin from 'joda-core/mixins/session-login-stay';

export default Route.extend(SessionLoginStayMixin, {
  model: function(params) {
    let root = this.get('pageRoot');
    let documentType = this.get('documentType');

    let properties = {
      'include': 'files'
    };

    $.extend(properties, params, this.paramsFor(`${root}.index`));
    Object.keys(properties).forEach((key) => (properties[key] == null) && delete properties[key]);

    return this.get('store').query(documentType, properties);
  }
});
