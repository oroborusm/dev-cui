(function(){
  var form = $('.left-side')
  var winHeight = $(window).height();
  var backhead = $('body').height()
  $(window).scroll(function (){
    wScroll = $(this).scrollTop();
    var limit = $('footer').offset().top - winHeight - 20;
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

    if (limit < wScroll) {
      $('.asesoria').addClass('opacidad');
    }else{
      $('.asesoria').removeClass('opacidad');
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

  function modal (){
    $('.descubre-button').on('click', function(){
      $('.modal').addClass('active')
    })
  }
  modal();

  // checkboxes
  $("input.check-1-int").on( "click", function() {
    console.log('cloc');
    $( ".check-1" ).addClass("checkeado");
    if ($('.check-1.checked')) {
      $('.check-1.checkeado button').attr('disabled', false);
    }
  });
  $('.check-1 .button').on('click', function(){
    $('.check-1').parents('.modal-body').css('margin-left', '-100%')
  })

  $("input.check-2-int").on( "click", function() {
    $( ".check-2" ).addClass("checkeado");
    if ($('.check-2.checked')) {
      $('.check-2.checkeado button').attr('disabled', false);
    }
  });
  $('.check-2 .button').on('click', function(){
    $('.check-2').parents('.modal-body').css('margin-left', '-100%')
  })

  $("input.check-3-int").on( "click", function() {
    $( ".check-3" ).addClass("checkeado");
    if ($('.check-3.checked')) {
      $('.check-3.checkeado button').attr('disabled', false);
    }
  });
  $('.check-3 .button').on('click', function(){
    $('.check-3').parents('.modal-body').css('margin-left', '-100%')
  })

  $("input.check-4-int").on( "click", function() {
    $( ".check-4" ).addClass("checkeado");
    if ($('.check-4.checked')) {
      $('.check-4.checkeado button').attr('disabled', false);
    }
  });
  $('.check-4 .button').on('click', function(){
    $('.check-4').parents('.modal-body').css('margin-left', '-100%')
  })

  $("input.check-5-int").on( "click", function() {
    $( ".check-5" ).addClass("checkeado");
    if ($('.check-5.checked')) {
      $('.check-5.checkeado button').attr('disabled', false);
    }
  });
  $('.check-5 .button').on('click', function(){
    $('.check-5').parents('.modal-body').css('margin-left', '-100%')
  })

  $("input.check-6-int").on( "click", function() {
    $( ".check-6" ).addClass("checkeado");
    if ($('.check-6.checked')) {
      $('.check-6.checkeado button').attr('disabled', false);
    }
  });
  $('.check-6 .button').on('click', function(){
    $('.check-6').parents('.modal-body').css('margin-left', '-100%')
  })

  $("input.check-7-int").on( "click", function() {
    $( ".check-7" ).addClass("checkeado");
    if ($('.check-7.checked')) {
      $('.check-7.checkeado button').attr('disabled', false);
    }
  });
  $('.check-7 .button').on('click', function(){
    $('.check-7').parents('.modal-body').css('margin-left', '-100%')
  })

  $("input.check-8-int").on( "click", function() {
    $( ".check-8" ).addClass("checkeado");
    if ($('.check-8.checked')) {
      $('.check-8.checkeado button').attr('disabled', false);
    }
  });
  $('.check-8 .button').on('click', function(){
    $('.check-8').parents('.modal-body').css('margin-left', '-100%')
  })

  $('.cierra-cuestionario').on('click', function(){
    $('.modal').removeClass('active')
  });

  function calcscore(){
    var score = 0;
    $(".calc:checked").each(function(){
      score+=parseInt($(this).val(),10);
    });
    $("input[name=sum]").val(score)
    // debugger
    if (score <= 12) {
      console.log('conservador')
    }else if(score > 12 && score <= 17){
      console.log('moderado')
    }else if(score > 18 && score <= 22){
      console.log('balanceado')
    }else if(score > 22){
      console.log('agresivo')
    }
  }
  $("#click").on('click', function(){
    calcscore()
  });

  $("#click").submit(function(e){
    debugger
    if(!valid) {
      e.preventDefault();
    }
  });

  var test = $('.aa').scrollTop();
  console.log(test);
})();
