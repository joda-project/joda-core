import Controller from '@ember/controller';
import FiltersSearchControllerMixin from 'joda-core/mixins/filters-search-controller';
import FiltersSortControllerMixin from 'joda-core/mixins/filters-sort-controller';
import FiltersTagsControllerMixin from 'joda-core/mixins/filters-tags-controller';

export default Controller.extend(FiltersSearchControllerMixin, FiltersSortControllerMixin, FiltersTagsControllerMixin, {
  init() {
    this.filters = ['search', 'tags', 'sort'];
    this._super(...arguments);
  },

  actions: {
    resetFilters: function() {
      this.get('filters').forEach((filter) => {
        this.set(filter, null);
      });
    }
  }
});
