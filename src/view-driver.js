require('./css/master.scss');
window.$ = $;

const VIEW = require(TESTVIEW);
const App = Mn.Application.extend({
  region: '#app-mount',
  onStart() {
    let args = VIEWARGS;
    let view = new VIEW(args);
    if (! IS_PROD) {
      window['viewargs'] = args;
      window['testview'] = view;
    }
    this.showView(view);
  }
});

const app = new App();
app.start();
