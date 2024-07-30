
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  $(".js-hamburger, .js-drawer").click(function() {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
  })
});


      // resizeイベント
  $(window).resize(function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
      closeDrawer();
    }
  });

  // 新しい関数: openDrawer
  function openDrawer() {
    $(".js-drawer").fadeIn();
    $(".js-hamburger").addClass("is-active");
  }

  // 新しい関数: closeDrawer
  function closeDrawer() {
    $(".js-drawer").fadeOut();
    $(".js-hamburger").removeClass("is-active");
  }

  var topBtn = $('.cycle__button');
  topBtn.hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });

  $(function () {
    var box = $('.js-slide'),
        speed = 700;
  
    box.each(function(){
      $(window).on('scroll', function() {
        box.each(function() {
          if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
            $(this).addClass('is-inview');
          }
        });
      });
    });
  });
  



  const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
    },
  });