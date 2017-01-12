import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    'search': {
      refreshModel: true,
      replace: true
    },
    'tags': {
      refreshModel: true,
      replace: true
    }
  },

  model: function() {
    return Ember.RSVP.hash({
      tags: this.get('store').findAll('tag')
    });
  }
});
