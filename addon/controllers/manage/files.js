import Ember from 'ember';
import { types } from 'joda-core/models/file';

export default Ember.Controller.extend({
  types: types,

  search: null,
  file_type: null,

  fileTypeItem: null,

  searchObserver: Ember.observer('search', function() {
    if (this.get('search') === "") {
      this.set('search', null);
    }
  }),

  fileTypeObserver: Ember.observer('file_type', function() {
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

  fileTypeItemObserver: Ember.observer('fileTypeItem', function() {
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
