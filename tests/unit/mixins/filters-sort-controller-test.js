import EmberObject from '@ember/object';
import FiltersSortControllerMixin from 'joda-core/mixins/filters-sort-controller';
import { module, test } from 'qunit';

module('Unit | Mixin | filters sort controller');

// Replace this with your real tests.
test('it works', function(assert) {
  let FiltersSortControllerObject = EmberObject.extend(FiltersSortControllerMixin);
  let subject = FiltersSortControllerObject.create();
  assert.ok(subject);
});
