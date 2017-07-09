import Ember from 'ember';
import FiltersSearchRouteMixin from 'joda-core/mixins/filters-search-route';
import FiltersSortRouteMixin from 'joda-core/mixins/filters-sort-route';

export default Ember.Route.extend(FiltersSearchRouteMixin, FiltersSortRouteMixin, {
  titleToken: 'Unverified documents'
});
