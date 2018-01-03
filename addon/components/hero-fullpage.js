import Component from '@ember/component';
import { inject as service } from '@ember/service';
import layout from '../templates/components/hero-fullpage';

export default Component.extend({
  layout,
  joda: service(),

  tagName: 'section',
  classNames: ['hero', 'is-primary', 'is-fullheight', 'has-gradient'],
  classNameBindings: ['errorPage', 'loginPage'],
  errorPage: false,
  loginPage: false
});
