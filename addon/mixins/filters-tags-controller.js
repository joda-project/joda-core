import Mixin from '@ember/object/mixin';
import { observer } from '@ember/object';

export default Mixin.create({
  tags: null,
  tagsList: [],

  tagsObserver: observer('tags', function() {
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

  tagsListObserver: observer('tagsList', function() {
    let list = [];
    for (let tag of this.get('tagsList')) {
      if (tag) {
        list.push(tag.get('id'));
      }
    }
    this.set('tags', list.length ? list.join(',') : null);
  })
});
