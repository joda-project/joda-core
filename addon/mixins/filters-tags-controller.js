import Ember from 'ember';

export default Ember.Mixin.create({
  tags: null,
  tagsList: [],

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
  })
});
