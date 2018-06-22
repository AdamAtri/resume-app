
module.exports = (function() {

  const RootView = require('../views/root/index.js');

  const BaseController = Mn.Object.extend({
    initialize() {
      const app = this.getOption('app');
      this.root = app.root = new RootView();
      app.showView(app.root);
    },

    default() {
      this.home.apply(this);
    },

    home() {
      console.log('home');
    },
  });

  const Router = Mn.AppRouter.extend({
    appRoutes: {
      '': 'default',
      'home': 'home'
    },

    initialize() {
      this.controller = new BaseController(this.options);
    }
  });

  return Router;

})();
