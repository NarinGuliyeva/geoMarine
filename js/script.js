$(window).on("scroll", function () {
  let navh = $("nav").height();
  if ($(window).scrollTop() > navh) {
    $("nav").addClass("head-active");
  } else {
    $("nav").removeClass("head-active");
  }
});

$(".navbar-toggler").click(function () {
  $(".navbar-collapse").toggleClass("active");
  $(".navbar-toggler i").toggleClass("fa-times text-white");
  $("body").toggleClass("overflow-hidden");
});

$(".drop-menu").click(function () {
  $(this).siblings().find(".dropdown").slideUp();
  $(this).find(".dropdown").slideToggle();
});
if ($(window).width() < 991) {
  $(".footer-language,.language").click(function () {
    $(this).find(".dropdown").toggleClass("lang-active");
  });
}

$(document).ready(function () {
  $(window).scroll(function () {
     $(window).scrollTop() > 200
      ? $(".back-to-top").addClass("show")
      : $(".back-to-top").removeClass("show");
  }),
    $(".back-to-top").click(function () {
    $(window).animate( {
      scrollTop:"0"
    }  )
    });
});

const swiper = new Swiper(".slider-swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '"><span class="bullet-inner"></span></span>'
      );
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
$(".slider-arrow-down").click(function () {
  let h = $("#slider").height();
  window.scrollTo({ top:h , behavior:"smooth"});
});
$(".swiper-text-container").each(function () {
  $(this).css({  "paddingLeft" : $(".logo").offset().left + 4 });
});

// xidmetler
$(document).ready(function () {
  $(".col-btn").click(function () {
    $(".col-hid").addClass("col-active");
    $(".col-xl-3 , .col-xl-6").addClass("animate__pulse");
    $(".col-btn ").addClass("col-btn-dnone");
  });
});
// Haqqimizda swiper

var swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});

// hamburger menu

$(document).ready(function () {
  $(".btn-ham").click(function () {
    $(".navbar-collapse").toggleClass("navbar-collapse-active");
  });
});


