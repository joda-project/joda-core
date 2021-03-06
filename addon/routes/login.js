import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { translationMacro as t } from "ember-i18n";

export default Route.extend({
  titleToken: t('account.login'),
  i18n: service()
});
