import Controller from '@ember/controller';
import { observer } from '@ember/object';
import FiltersSearchControllerMixin from 'joda-core/mixins/filters-search-controller';
import FiltersSortControllerMixin from 'joda-core/mixins/filters-sort-controller';
import { types } from 'joda-core/models/file';

export default Controller.extend(FiltersSearchControllerMixin, FiltersSortControllerMixin, {
  types: types,

  init() {
    this.sortTypes = [
      {
        id: 'created_at',
        name: 'common.sort-uploaded-ascending'
      },
      {
        id: '-created_at',
        name: 'common.sort-uploaded-descending'
      }
    ];
    this._super(...arguments);
  },

  file_type: null,
  fileTypeItem: null,

  fileTypeObserver: observer('file_type', function() {
    let file_type = this.get('file_type');
    if (!file_type) {
      this.set('fileTypeItem', null);
      return;
    }

    for (let type of types) {
      if (type.value === file_type) {
        this.set('fileTypeItem', type);
      }
    }
  }),

  fileTypeItemObserver: observer('fileTypeItem', function() {
    let fileType = this.get('fileTypeItem');
    this.set('file_type', fileType ? fileType.value : null);
  }),

  actions: {
    resetFilters: function() {
      this.set('search', null);
      this.set('file_type', null);
    }
  }
});
