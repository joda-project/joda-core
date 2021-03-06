import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import {
  startMirage
} from 'dummy/initializers/ember-cli-mirage';

moduleForComponent('common-header', 'Integration | Component | common header', {
  integration: true,
  beforeEach() {
    this.server = startMirage();
  },
  afterEach() {
    this.server.shutdown();
  }
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs `{{common-header}}`);

  assert.equal(this.$().text().trim().replace(/\n+/g, ''),
"Joda Test                                                                              Manage              Login");

  // TODO: authentication
  // TODO: title
  // TODO: submenu
});
