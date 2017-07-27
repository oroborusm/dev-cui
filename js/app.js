(function(){
  var form = $('.left-side')
  var winHeight = $(window).height();
  var backhead = $('body').height()
  $(window).scroll(function (){
    wScroll = $(this).scrollTop();
    //pixels= 50 + (wScroll/8)
    //console.log(wScroll)

    if (wScroll >= winHeight / 2){
      $('.slider').addClass('nav-fixed')
    }
    else{
      $('.slider').removeClass('nav-fixed')
    }

    if (wScroll >= (winHeight - 120) ) {
      $('.asesoria').addClass('fixed')
    }else{
      $('.asesoria').removeClass('fixed')
    }
  });

  var menuBtn = $('.okayNav__menu-toggle');

  function menuLateral (){
    menuBtn.on('click', function(e){
      e.preventDefault();
      $('.nav-right').toggleClass('active')
    });
  }

  //scrolltop e indicador
  $('a.scroll').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			|| location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 100
				}, 1000);
				return false;
			}
		}
	});



  var sections = $('.content');
  var sectionLinks = $('.section-link');
  var navIndicators = $('.nav-indicator');

  var previousIndex = -1;
  var currentSectionIndex = 0;
  var currentSection;
  var currentLink;
  var currentIndicator;

  var MAX_WIDTH = 44;

  initNewSection();
  animateMarker();

  $(window).scroll(function() {
    animateMarker();
  });

  function animateMarker() {

    var currentScroll = $(this).scrollTop();

    sections.each(function(index, value) {

      var divPosition = $(this).offset().top -125;
      if (divPosition <= currentScroll) {

        currentSectionIndex = index;
      }
    });

    if (previousIndex != currentSectionIndex) {

      initNewSection();
    }

    if (currentIndicator.is(':animated')) {
      return;
    }

    var relativeScroll = currentScroll - currentSection.offset().top;
    var scrollProgress = MAX_WIDTH - ((relativeScroll / currentSection.width()) * MAX_WIDTH);

    var maxWidth = currentIndicator.css('max-width');

    currentIndicator.css({ width: "" + scrollProgress + "px"});
  }

  function initNewSection() {

    currentSection = sections.eq(currentSectionIndex);

    sectionLinks.removeClass('active');
    $('span').css({ width: "0%"});

    currentLink = sectionLinks.eq(currentSectionIndex);
    currentLink.addClass('active');

    currentIndicator = navIndicators.eq(currentSectionIndex);

    if (previousIndex < currentSectionIndex) {
      currentIndicator.animate({
        width: '' + MAX_WIDTH + 'px'
      }, 50, null);
    }

    previousIndex = currentSectionIndex;
  }
})();
