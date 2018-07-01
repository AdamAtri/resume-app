// EducationView
//   Display my education info

module.exports = (function() {

  const template = (data) => {
    let eds = data.education.map(ed => {
      return (`
        <hr>
        <div class="educator">
          <h6 class="ed-degree">${ed.degree}</h6>
          <div class="ed-details">
            ${ed.school}, ${ed.location}, ${ed.start} - ${ed.end}
          </div>
        </div>
      `);
    });

    return (`
      <div class="section-title">Education</div>
      <div class="section-details education-details">${eds.join('\n')}</div>
    `);
  };

  const EducationView = Mn.View.extend({
    template: template,
    templateContext() {
      return this.options;
    },
    tagName: 'section',
    id: 'education',
    className: 'main-section',

  });

  return EducationView;
})();
