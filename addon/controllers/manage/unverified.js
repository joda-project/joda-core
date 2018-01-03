import Controller from '@ember/controller';
import FiltersSearchControllerMixin from 'joda-core/mixins/filters-search-controller';
import FiltersSortControllerMixin from 'joda-core/mixins/filters-sort-controller';

export default Controller.extend(FiltersSearchControllerMixin, FiltersSortControllerMixin, {
  actions: {
    resetFilters: function() {
      this.set('search', null);
      this.set('sort', null);
    }
  }
});
