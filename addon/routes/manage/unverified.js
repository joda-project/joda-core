import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Unverified documents',

  queryParams: {
    'search': {
      refreshModel: true,
      replace: true
    }
  }
});
