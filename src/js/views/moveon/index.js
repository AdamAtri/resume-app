// MoveOnView
//   description

module.exports = (function() {

  require('./_style.scss');

  const MoveOnView = Mn.View.extend({
    template: () => `<div id="move-stamp"></div>`,
    className: 'move-on-view',
    ui: {
      stamp: '#move-stamp'
    },

    stamp(msg) {
      this.ui.stamp.text(msg);
      this.ui.stamp.addClass('showing');
    }

  });

  return MoveOnView;
})();
