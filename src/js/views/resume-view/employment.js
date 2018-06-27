// EmploymentView
//   My previous work history

module.exports = (function() {

  const template = (data) => {
    function makeLink(name, href) {
      if (href)
        return `<a href="${href}" target="_blank class="emp-name"">${name},</a>`;
      return `<span class="emp-name"">${name},</span> `;
    }
    let emps = data.employers.map(emp => {
      let duties = emp.duties.map(d => `<li class="emp-duty">${d}</li>`);
      return (`
        <div class="employer">
          <div class="emp-description">
            <h6 class="emp-title">${emp.title}</h6>
            ${makeLink(emp.name, emp.website)}
            <span class="emp-dates">${emp.location}, ${emp.start} - ${emp.end}</span>
            <div class="emp-details">
              <p>${emp.description}</p>
              <ul>
                ${duties.join('\n')}
              </ul>
            </div>
          </div>
          <div class="emp-tech">
            <span class="tech-stack">Tech Stack:</span><br>
            <span class="technologies">${emp.technologies.join(', ')}</span>
          </div>
        </div>
      `);
    });

    return (`
      <div class="section-title">Work Experience</div>
      <div class="section-details employment-details">${emps.join('\n')}</div>
    `);
  };

  const EmploymentView = Mn.View.extend({
    template: template,
    templateContext() {
      return this.options;
    },
    tagName: 'section',
    id: 'work-experience',
    className: 'main-section',

  });

  return EmploymentView;
})();
