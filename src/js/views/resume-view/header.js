// ResumeHeader
//   header for my resume

module.exports = (function() {

  const template = (data) => (`
    <div class="dev-name">K. Adam Atri</div>
    <div class="head-title"> developer.</div>
    <div class="head-subtitle">Here's what I've been up to &mldr;</div>
    <div class="media-nav">
      <a href="#" id="dl-btn" class="media-btn" role="button"></a>
      <div class="social">
        <a href="${data.github}" target="_blank" id="git-btn" class="media-btn" role="button"></a>
        <a href="${data.linkedin}" target="_blank" id="linked-btn" class="media-btn" role="button"></a>
      </div>
    </div>
  `);

  const ResumeHeader = Mn.View.extend({
    template: template,
    templateContext() {
      return this.options;
    },
    ui: {
      nav: '.media-nav'
    },
    tagName: 'header',
    className: 'res-header',

    onAttach() {
      function getRect() {
        return $('header.res-header')[0].getBoundingClientRect();
      }
      let isPhone = getRect().width <= 500;
      if (! isPhone) {
        this.ui.nav.addClass('fixed');
        this.ui.nav.css({height: getRect().height - 10});
      }

      $(window).scroll(() => {
        if (isPhone) {
          if (window.pageYOffset >= getRect().height - 50) {
            this.ui.nav.addClass('fixed-mobile');
          }
          else {
            this.ui.nav.removeClass('fixed-mobile');
          }
        }
        else {
          window.requestAnimationFrame(() => this.ui.nav.css({height: (getRect().height - (window.pageYOffset + 10)) + 'px'}));
        }
      });
    }
  });

  return ResumeHeader;
})();
