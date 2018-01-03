import EmberObject from '@ember/object';
import FiltersSearchControllerMixin from 'joda-core/mixins/filters-search-controller';
import { module, test } from 'qunit';

module('Unit | Mixin | filters search controller');

// Replace this with your real tests.
test('it works', function(assert) {
  let FiltersSearchControllerObject = EmberObject.extend(FiltersSearchControllerMixin);
  let subject = FiltersSearchControllerObject.create();
  assert.ok(subject);
});
