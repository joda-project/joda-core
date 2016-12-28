import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  joda: Ember.inject.service(),

  displayErrorMessage: function(error) {
    switch (error) {
      case 'empty_username':
        this.set('errorMessage', 'Please enter your username');
        break;
      case 'empty_password':
        this.set('errorMessage', 'Please enter your password');
        break;
      case 'invalid_grant':
        this.set('errorMessage', 'User name or password is invalid');
        break;
      default:
        this.set('errorMessage', 'Unknown error');
        break;
    }
  },

  actions: {
    authenticate() {
      let {
        identification,
        password
      } = this.getProperties('identification', 'password');

      if (!identification) {
        this.displayErrorMessage('empty_username');
        return;
      } else if (!password) {
        this.displayErrorMessage('empty_password');
        return;
      }

      this.get('session').authenticate('authenticator:oauth2', identification, password).catch((reason) => {
        this.displayErrorMessage(reason.error || reason);
      });
    }
  }
});
