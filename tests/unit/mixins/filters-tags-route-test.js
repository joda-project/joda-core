import EmberObject from '@ember/object';
import FiltersTagsRouteMixin from 'joda-core/mixins/filters-tags-route';
import { module, test } from 'qunit';

module('Unit | Mixin | filters tags route');

// Replace this with your real tests.
test('it works', function(assert) {
  let FiltersTagsRouteObject = EmberObject.extend(FiltersTagsRouteMixin);
  let subject = FiltersTagsRouteObject.create();
  assert.ok(subject);
});
