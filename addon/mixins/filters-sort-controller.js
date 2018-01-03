import Mixin from '@ember/object/mixin';
import { observer } from '@ember/object';

export default Mixin.create({
  sort: null,
  sortSelected: null,
  sortTypes: [
    {
      id: 'title',
      name: 'common.sort-title-ascending'
    },
    {
      id: '-title',
      name: 'common.sort-title-descending'
    },
    {
      id: 'created_at',
      name: 'common.sort-uploaded-ascending'
    },
    {
      id: '-created_at',
      name: 'common.sort-uploaded-descending'
    }
  ],

  sortObserver: observer('sort', function() {
    let sort = this.get('sort');
    if (!sort) {
      this.set('sort', null);
      return;
    }

    let result;
    for (let type of this.get('sortTypes')) {
      if (type.id == sort) {
        result = type;
        break;
      }
    }

    if (!result) {
      this.set('sort', null);
      return;
    }

    if (this.get('sortSelected') !== result) {
      this.set('sortSelected', result);
    }
  }),

  sortSelectedObserver: observer('sortSelected', function() {
    let selected = this.get('sortSelected');
    this.set('sort', selected ? selected.id : null);
  })
});
