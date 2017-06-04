import Ember from 'ember';
import FiltersTagsRouteMixin from 'joda-core/mixins/filters-tags-route';
import {
  module,
  test
} from 'qunit';

module('Unit | Mixin | filters tags route');

// Replace this with your real tests.
test('it works', function(assert) {
  let FiltersTagsRouteObject = Ember.Object.extend(FiltersTagsRouteMixin);
  let subject = FiltersTagsRouteObject.create();
  assert.ok(subject);
});
