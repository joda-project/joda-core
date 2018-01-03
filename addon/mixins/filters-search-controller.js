import Mixin from '@ember/object/mixin';
import { observer } from '@ember/object';

export default Mixin.create({
  search: null,

  searchObserver: observer('search', function() {
    if (this.get('search') === '') {
      this.set('search', null);
    }
  })
});
