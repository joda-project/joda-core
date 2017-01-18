import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    Ember.$.extend(params, this.paramsFor('manage.files'));

    var properties = {
      'include': 'documents'
    };
    if (params.search) {
      properties['search'] = params.search;
    }

    if (params.file_type) {
      properties['file_type'] = params.file_type;
    }

    return this.get('store').query('file', properties);
  }
});
