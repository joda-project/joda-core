import Ember from 'ember';
import FiltersSearchRouteMixin from 'joda-core/mixins/filters-search-route';

export default Ember.Route.extend(FiltersSearchRouteMixin, {
  titleToken: 'Unverified documents'
});
