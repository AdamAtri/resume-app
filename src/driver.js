require('./css/master.scss');
require('./js/something');

const Router = require('./js/router/index.js');

const App = Mn.Application.extend({

  region: '#app-mount',

  onStart() {
    this.router = new Router({app: this});
    Bb.history.start();
  }
});

const app = new App();
app.start();
