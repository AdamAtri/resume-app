// ContactView
//   Provide contact information

module.exports = (function() {

  const template = () => (`
    <h2>Make Contact:</h2>
    <div class="contact-list">
      <div><div class="contact-type">Email:</div><a href="mailto:adam@atricoware.com">Adam@AtricoWare.com</a></div>
      <div><div class="contact-type">Cell:</div><a href="tel:919.623.8442">919.623.8442</a></div>
    </div>
  `);

  const ContactView = Mn.View.extend({
    template: template,
    tagName: 'section',
    id: 'contact',
  });

  return ContactView;
})();
