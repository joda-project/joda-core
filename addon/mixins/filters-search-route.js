import Mixin from '@ember/object/mixin';

export default Mixin.create({
  queryParams: {
    'search': {
      refreshModel: true,
      replace: true
    }
  }
});
