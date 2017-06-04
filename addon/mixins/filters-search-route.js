import Ember from 'ember';

export default Ember.Mixin.create({
  queryParams: {
    'search': {
      refreshModel: true,
      replace: true
    }
  }
});
