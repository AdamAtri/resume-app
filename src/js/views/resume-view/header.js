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

    initialize() {
      this.getRect = () => { return $('header.res-header')[0].getBoundingClientRect(); };
      this.isPhone = () => { return this.getRect().width <= 500; };
    },

    onAttach() {
      if (! this.isPhone()) {
        this.ui.nav.addClass('fixed');
        this.ui.nav.css({height: this.getRect().height - 10});
      }
      window.addEventListener('scroll', this.onScroll.bind(this), false);
      window.addEventListener('resize', this.onResize.bind(this), false);
    },

    onScroll() {
      if (this.isPhone()) {
        this.ui.nav.removeClass('.fixed');
        if(window.pageYOffset >= this.getRect().height - 50) {
          this.ui.nav.addClass('fixed-mobile');
        }
        else {
          this.ui.nav.removeClass('fixed-mobile');
        }
      }
      else {
        let newHeight = this.getRect().height - (window.pageYOffset + 10);
        window.requestAnimationFrame(() => { this.ui.nav.css({height: newHeight+'px'}); });
      }
    },

    onResize() {
      if ( this.isPhone() ) {
        this.ui.nav.removeClass('fixed');
        this.ui.nav.css({height: '50px'});
      }
      else {
        this.ui.nav.addClass('fixed');
        let newHeight = Math.max(this.getRect().height - (window.pageYOffset + 10), 150);
        window.requestAnimationFrame(() => { this.ui.nav.css({height: newHeight+'px'}); });
      }
    }
  });

  return ResumeHeader;
})();
