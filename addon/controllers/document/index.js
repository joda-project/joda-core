import Ember from 'ember';
import FiltersSearchControllerMixin from 'joda-core/mixins/filters-search-controller';
import FiltersSortControllerMixin from 'joda-core/mixins/filters-sort-controller';
import FiltersTagsControllerMixin from 'joda-core/mixins/filters-tags-controller';

export default Ember.Controller.extend(FiltersSearchControllerMixin, FiltersSortControllerMixin, FiltersTagsControllerMixin, {
  filters: ['search', 'tags', 'sort'],

  actions: {
    resetFilters: function() {
      this.get('filters').forEach((filter) => {
        this.set(filter, null);
      });
    }
  }
});
