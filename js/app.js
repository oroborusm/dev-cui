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

  function scroll () {
    $('a.scroll').on('click', function (e) {
      var href = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(".objetivo").offset().top
      }, 'slow');
      e.preventDefault();
    });
  }
})();
