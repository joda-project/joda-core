import Ember from 'ember';
import FiltersSearchRouteMixin from 'joda-core/mixins/filters-search-route';

export default Ember.Route.extend(FiltersSearchRouteMixin, {
  titleToken: 'Files',

  queryParams: {
    'file_type': {
      refreshModel: true,
      replace: true
    }
  }
});
