import Mixin from '@ember/object/mixin';

export default Mixin.create({
  queryParams: {
    'tags': {
      refreshModel: true,
      replace: true
    }
  }
});
