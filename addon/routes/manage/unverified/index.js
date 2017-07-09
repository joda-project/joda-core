import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    Ember.$.extend(params, this.paramsFor('manage.unverified'));

    var properties = {
      'include': 'files',
      'verified': false
    };
    if (params.search) {
      properties['search'] = params.search;
    }

    if (params.sort) {
      properties['sort'] = params.sort;
    }

    return this.get('store').query('document', properties);
  }
});
