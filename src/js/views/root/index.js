
module.exports = (function() {

  require('./_style.scss');
  const ReasonsView = require('../reasons-view/index');

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
    }
  });

  return RootView;
})();
