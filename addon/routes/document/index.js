import Route from '@ember/routing/route';
import SessionLoginStayMixin from 'joda-core/mixins/session-login-stay';
import FiltersSearchRouteMixin from 'joda-core/mixins/filters-search-route';
import FiltersSortRouteMixin from 'joda-core/mixins/filters-sort-route';
import FiltersTagsRouteMixin from 'joda-core/mixins/filters-tags-route';

export default Route.extend(SessionLoginStayMixin, FiltersSearchRouteMixin, FiltersSortRouteMixin, FiltersTagsRouteMixin, {});
