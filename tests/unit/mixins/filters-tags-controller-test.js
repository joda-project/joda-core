import Ember from 'ember';
import FiltersTagsControllerMixin from 'joda-core/mixins/filters-tags-controller';
import {
  module,
  test
} from 'qunit';

module('Unit | Mixin | filters tags controller');

// Replace this with your real tests.
test('it works', function(assert) {
  let FiltersTagsControllerObject = Ember.Object.extend(FiltersTagsControllerMixin);
  let subject = FiltersTagsControllerObject.create();
  assert.ok(subject);
});
