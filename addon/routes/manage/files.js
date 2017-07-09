import Ember from 'ember';
import { translationMacro as t } from "ember-i18n";

import FiltersSearchRouteMixin from 'joda-core/mixins/filters-search-route';
import FiltersSortRouteMixin from 'joda-core/mixins/filters-sort-route';

export default Ember.Route.extend(FiltersSearchRouteMixin, FiltersSortRouteMixin, {
  titleToken: t('files.files'),
  i18n: Ember.inject.service(),

  queryParams: {
    'file_type': {
      refreshModel: true,
      replace: true
    }
  }
});
