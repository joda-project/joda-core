import Mixin from '@ember/object/mixin';

export default Mixin.create({
  queryParams: {
    'sort': {
      refreshModel: true,
      replace: true
    }
  }
});
