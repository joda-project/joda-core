import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Unverified resources',

  queryParams: {
    'search': {
      refreshModel: true,
      replace: true
    }
  }
});
