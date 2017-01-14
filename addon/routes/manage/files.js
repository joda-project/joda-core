import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Files',

  queryParams: {
    'search': {
      refreshModel: true,
      replace: true
    },
    'file_type': {
      refreshModel: true,
      replace: true
    }
  }
});
