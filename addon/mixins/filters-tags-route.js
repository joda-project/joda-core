import Ember from 'ember';

export default Ember.Mixin.create({
  queryParams: {
    'tags': {
      refreshModel: true,
      replace: true
    }
  }
});
