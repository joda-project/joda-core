import Ember from 'ember';
import FiltersSortRouteMixin from 'joda-core/mixins/filters-sort-route';
import {
  module,
  test
} from 'qunit';

module('Unit | Mixin | filters sort route');

// Replace this with your real tests.
test('it works', function(assert) {
  let FiltersSortRouteObject = Ember.Object.extend(FiltersSortRouteMixin);
  let subject = FiltersSortRouteObject.create();
  assert.ok(subject);
});
