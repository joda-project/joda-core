import Ember from 'ember';

export default Ember.Controller.extend({
  search: null,
  tags: null,

  tagsList: [],

  searchObserver: Ember.observer('search', function() {
    if (this.get('search') === "") {
      this.set('search', null);
    }
  }),

  tagsObserver: Ember.observer('tags', function() {
    let tags = this.get('tags');
    if (!tags) {
      this.set('tagsList', []);
      return;
    }

    let result = [];
    for (let index of tags.split(',')) {
      if (index) {
        result.push(this.store.peekRecord('tag', index));
      }
    }
    this.set('tagsList', result);
  }),

  tagsListObserver: Ember.observer('tagsList', function() {
    let list = [];
    for (let tag of this.get('tagsList')) {
      if (tag) {
        list.push(tag.get('id'));
      }
    }
    this.set('tags', list.length ? list.join(',') : null);
  }),

  actions: {
    resetFilters: function() {
      this.set('search', null);
      this.set('tags', null);
    }
  }
});
