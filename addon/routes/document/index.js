import Ember from 'ember';
import SessionLoginStayMixin from 'joda-core/mixins/session-login-stay';
import FiltersSearchRouteMixin from 'joda-core/mixins/filters-search-route';
import FiltersTagsRouteMixin from 'joda-core/mixins/filters-tags-route';

export default Ember.Route.extend(SessionLoginStayMixin, FiltersSearchRouteMixin, FiltersTagsRouteMixin, {});
