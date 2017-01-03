import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Files',

  model: function() {
    return this.get('store').findAll('file');
  }
});
