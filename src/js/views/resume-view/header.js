// ResumeHeader
//   header for my resume

module.exports = (function() {

  const template = (data) => {
    let devName = `${data.devName.first} ${data.devName.middle} ${data.devName.last}`;
    return (`
      <div class="dev-name">${devName}</div>
      <div class="head-title">${data.title}</div>
      <div class="head-subtitle">${data.subtitle}</div>
      <div class="media-nav">
        <a href="${data.resume}" download id="dl-btn" class="media-btn" role="button"></a>
        <div class="social">
          <a href="${data.social.github}" target="_blank" id="git-btn" class="media-btn" role="button"></a>
          <a href="${data.social.linkedin}" target="_blank" id="linked-btn" class="media-btn" role="button"></a>
        </div>
      </div>
      <div class="contact-info">
        <span class="contact-item email">${data.contact.email}</span>
        <span class="contact-item phone">${data.contact.mobile}</span>
      </div>
    `);
  };

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
      // set the height on the media-nav if we're not on a phone
      if (! this.isPhone()) {
        this.ui.nav.addClass('fixed');
        this.ui.nav.css({height: this.getRect().height - 10});
      }
      // set up listeners to size the media-nav dynamically
      window.addEventListener('scroll', this.onScroll.bind(this), false);
      window.addEventListener('resize', this.onResize.bind(this), false);
    },

    onScroll() {
      if (this.isPhone()) {
        // .fixed is for non-phone sized devices, so remove it.
        this.ui.nav.removeClass('.fixed');
        // pin or release the phone-sized media-nav based on page offset
        if(window.pageYOffset >= this.getRect().height - 50) {
          this.ui.nav.addClass('fixed-mobile');
        }
        else {
          this.ui.nav.removeClass('fixed-mobile');
        }
      }
      else {
        let newHeight = Math.max(this.getRect().height - (window.pageYOffset + 10), 150);
        window.requestAnimationFrame(() => { this.ui.nav.css({height: newHeight+'px'}); });
      }
    },

    onResize() {
      if ( this.isPhone() ) {
        // remove the .fixed class if on phone-sized device
        this.ui.nav.removeClass('fixed');
        // phone-based media-nav is always 50px tall
        this.ui.nav.css({height: '50px'});
      }
      else {
        // on devices larger than phones, the media-nav is always fixed
        this.ui.nav.addClass('fixed');
        this.ui.nav.removeClass('fixed-mobile');
        let newHeight = Math.max(this.getRect().height - (window.pageYOffset + 10), 150);
        window.requestAnimationFrame(() => { this.ui.nav.css({height: newHeight+'px'}); });
      }
    }
  });

  return ResumeHeader;
})();
