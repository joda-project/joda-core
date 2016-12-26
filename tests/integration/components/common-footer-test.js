import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import config from '../../../config/environment';

moduleForComponent('common-footer', 'Integration | Component | common footer', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs `{{common-footer}}`);

  let render = '';
  render += 'Joda Test powered by Joda'.replace(/\s+/g, '') + config.Joda.versions['joda-core'];

  assert.equal(this.$().text().replace(/\s+/g, ''), "©2004-2016TadejNovak" + render);

  // Template block usage:
  this.render(hbs `
    {{#common-footer}}
      template block text
    {{/common-footer}}
  `);

  assert.equal(this.$().text().replace(/\s+/g, ''), 'template block text'.replace(/\s+/g, '') + render);
});
