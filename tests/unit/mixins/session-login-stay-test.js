import EmberObject from '@ember/object';
import SessionLoginStayMixin from 'joda-core/mixins/session-login-stay';
import { module, test } from 'qunit';

module('Unit | Mixin | session login stay');

// Replace this with your real tests.
test('it works', function(assert) {
  let SessionLoginStayObject = EmberObject.extend(SessionLoginStayMixin);
  let subject = SessionLoginStayObject.create();
  assert.ok(subject);
});
