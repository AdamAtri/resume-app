// ReasonsView
//   description

module.exports = (function() {
  require('./_style.scss');
  const template = require('./template');
  const ReasonsView = Mn.View.extend({
    template: template,
    className: 'reasons-view',
    ui: {},
    regions: {},

    initialize() {

    },
    onAttach() {

    },


  });

  return ReasonsView;
})();
