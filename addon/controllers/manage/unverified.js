import Ember from 'ember';
import FiltersSearchControllerMixin from 'joda-core/mixins/filters-search-controller';

export default Ember.Controller.extend(FiltersSearchControllerMixin, {
  actions: {
    resetFilters: function() {
      this.set('search', null);
    }
  }
});
