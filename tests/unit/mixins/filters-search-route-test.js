import EmberObject from '@ember/object';
import FiltersSearchRouteMixin from 'joda-core/mixins/filters-search-route';
import { module, test } from 'qunit';

module('Unit | Mixin | filters search route');

// Replace this with your real tests.
test('it works', function(assert) {
  let FiltersSearchRouteObject = EmberObject.extend(FiltersSearchRouteMixin);
  let subject = FiltersSearchRouteObject.create();
  assert.ok(subject);
});
