
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


//要素の取得とスピードの設定
var box = $('.colorbox'),
    speed = 700;  
 
//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
    image = $(this).find('img');
    var counter = 0;
 
    image.css('opacity','0');
    color.css('width','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
        if(counter == 0){
          $(this).delay(200).animate({'width':'100%'},speed,function(){
                   image.css('opacity','1');
                   $(this).css({'left':'0' , 'right':'auto'});
                   $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
          }
     });
});

var swiper = new Swiper('.swiper-container', {
  loop: true, // 無限ループ
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});

//要素の取得とスピードの設定
var box = $('.colorbox'),
    speed = 700;  

//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
  $(this).append('<div class="color"></div>')
  var color = $(this).find('.color'),
      image = $(this).find('img');
  var counter = 0;

  image.css('opacity','0');
  color.css('width','0%');

  // スクロール時にアニメーションを実行
  $(window).on('scroll', function() {
    var boxOffset = $(box).offset().top;
    var windowScroll = $(window).scrollTop() + $(window).height();

    if (windowScroll > boxOffset && counter == 0) {
      counter = 1; // アニメーションを一度だけ実行
      color.delay(200).animate({'width':'100%'}, speed, function(){
        image.css('opacity','1');
        $(this).css({'left':'auto', 'right':'0'});
        $(this).animate({'width':'0%'}, speed);
      });
    }
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

  console.log(typeof jQuery);