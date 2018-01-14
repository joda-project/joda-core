import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import {
  startMirage
} from 'dummy/initializers/ember-cli-mirage';

import config from '../../../config/environment';

moduleForComponent('common-footer', 'Integration | Component | common footer', {
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

  this.render(hbs `{{common-footer}}`);

  let spacer = '                ';
  let render = '';
  render += 'Joda Test powered by Joda ' + config.Joda.versions['joda-core'] + '                            Administration';

  assert.equal(this.$().text().trim().replace(/\n+/g, ''), "© 2018 Tadej Novak" + spacer + render);

  // Template block usage:
  this.render(hbs `
    {{#common-footer}}
      template block text
    {{/common-footer}}
  `);

  assert.equal(this.$().text().trim().replace(/\n+/g, ''), 'template block text' + spacer + render);
});
