import Ember from 'ember';
import FiltersSearchControllerMixin from 'joda-core/mixins/filters-search-controller';
import FiltersTagsControllerMixin from 'joda-core/mixins/filters-tags-controller';

export default Ember.Controller.extend(FiltersSearchControllerMixin, FiltersTagsControllerMixin, {
  filters: ['search', 'tags'],

  actions: {
    resetFilters: function() {
      this.get('filters').forEach((filter) => {
        this.set(filter, null);
      });
    }
  }
});
