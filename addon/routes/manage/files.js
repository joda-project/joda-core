import Ember from 'ember';
import FiltersSearchRouteMixin from 'joda-core/mixins/filters-search-route';
import FiltersSortRouteMixin from 'joda-core/mixins/filters-sort-route';

export default Ember.Route.extend(FiltersSearchRouteMixin, FiltersSortRouteMixin, {
  titleToken: 'Files',

  queryParams: {
    'file_type': {
      refreshModel: true,
      replace: true
    }
  }
});
