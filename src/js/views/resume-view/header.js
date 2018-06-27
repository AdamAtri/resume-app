// ResumeHeader
//   header for my resume

module.exports = (function() {

  const template = () => (`
    <div class="dev-name">K. Adam Atri</div>
    <div class="head-title">developer.</div>
    <div class="head-subtitle">Here's what I've been up to &mldr;</div>
  `);

  const ResumeHeader = Mn.View.extend({
    template: template,
    tagName: 'header',
    className: 'res-header'
  });

  return ResumeHeader;
})();
