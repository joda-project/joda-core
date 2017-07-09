import Ember from 'ember';

export default Ember.Mixin.create({
  queryParams: {
    'sort': {
      refreshModel: true,
      replace: true
    }
  }
});
