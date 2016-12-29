import Ember from 'ember';
import ApplicationMainMixin from 'joda-core/mixins/application-main';
import { module, test } from 'qunit';

module('Unit | Mixin | application main');

// Replace this with your real tests.
test('it works', function(assert) {
  let ApplicationMainObject = Ember.Object.extend(ApplicationMainMixin);
  let subject = ApplicationMainObject.create();
  assert.ok(subject);
});
