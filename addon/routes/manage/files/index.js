import $ from 'jquery';
import Route from '@ember/routing/route';

export default Route.extend({
  model: function(params) {
    $.extend(params, this.paramsFor('manage.files'));

    var properties = {
      'include': 'documents'
    };
    if (params.search) {
      properties['search'] = params.search;
    }

    if (params.file_type) {
      properties['file_type'] = params.file_type;
    }

    if (params.sort) {
      properties['sort'] = params.sort;
    }

    return this.get('store').query('file', properties);
  }
});
