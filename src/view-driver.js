require('./css/view-test.scss');
require('./css/master.scss');
window.$ = $;

const VIEW = require(TESTVIEW);
const App = Mn.Application.extend({
  region: '#app-mount',
  onStart() {
    let args = VIEWARGS;
    let view = window['testview'] = new VIEW(args);
    window['viewargs'] = args;
    this.showView(view);
  }
});

const app = new App();
app.start();
