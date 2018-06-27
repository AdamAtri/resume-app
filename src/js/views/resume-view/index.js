// ResumeView
//   My resume builder.

module.exports = (function() {

  require('./_style.scss');
  const data = require('../../../data/resume.json');

  const ResumeHeader = require('./header');
  const EmploymentView = require('./employment');

  const ResumeView = Mn.View.extend({
    template: require('./template'),
    id: 'my-resume',
    regions: {
      header: {
        el: '#res-header',
        replaceElement: true
      },
      main: {
        el: '#res-main',
        replaceElement: true
      },
      aside: {
        el: '#res-aside',
        replaceElement: true
      },
      footer: {
        el: '#res-footer',
        replaceElement: true
      },
    },

    onRender() {
      this.showChildView('header', new ResumeHeader());
      this.showChildView('main', new EmploymentView({employers: data.employment}));
    }

  });

  return ResumeView;
})();
