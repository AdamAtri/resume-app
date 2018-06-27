
module.exports = (function() {

  require('./_style.scss');
  const ReasonsView = require('../reasons-view/index');
  const MoveOnView = require('../moveon/index');

  const RootView = Mn.View.extend({
    template: require('./template'),
    id: 'root-container',
    className: 'container',
    regions: {
      reasons: '#reasons-container',
      moveon: '#moveon-container',
      dev: '#dev-info'
    },

    onRender() {
      this.showChildView('reasons', new ReasonsView());
      this.moveon = new MoveOnView();
      this.showChildView('moveon', this.moveon);
      if (!IS_PROD) {
        window.moveon = this.moveon;
      }
    }
  });

  return RootView;
})();
