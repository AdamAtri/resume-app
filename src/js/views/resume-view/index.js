// ResumeView
//   My resume builder.

module.exports = (function() {

  require('./_style.scss');
  const data = require('../../../data/resume.json');
  const resumeFile = require('../../../assets/AdamAtri_Resume.pdf');

  const ResumeHeader = require('./header');
  const EmploymentView = require('./employment');
  const EducationView = require('./education');
  const ContactView = require('./contact');

  const ResumeView = Mn.View.extend({
    template: require('./template'),
    id: 'my-resume',
    regions: {
      header: {
        el: '#res-header',
        replaceElement: true
      },
      work: {
        el: '#res-work',
        replaceElement: true
      },
      ed: {
        el: '#res-education',
        replaceElement: true
      },
      footer: '#res-footer',
    },

    onRender() {
      this.showChildView('header', new ResumeHeader({
        devName: data.name,
        title: data.title,
        subtitle: data.subtitle,
        social: data.social,
        contact: data.contact,
        resume: resumeFile
      }));
      this.showChildView('work', new EmploymentView({employers: data.employment}));
      this.showChildView('ed', new EducationView({education: data.education}));
      this.showChildView('footer', new ContactView());
    }

  });

  return ResumeView;
})();
