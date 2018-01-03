import EmberObject from '@ember/object';
import FiltersSortRouteMixin from 'joda-core/mixins/filters-sort-route';
import { module, test } from 'qunit';

module('Unit | Mixin | filters sort route');

// Replace this with your real tests.
test('it works', function(assert) {
  let FiltersSortRouteObject = EmberObject.extend(FiltersSortRouteMixin);
  let subject = FiltersSortRouteObject.create();
  assert.ok(subject);
});
