$(document).ready(function() {
  /*Scroll on buttons*/
  $(".js--scroll-to-destinations").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--sections-destinations").offset().top },
      1000
    );
  });

  $(".js--scroll-to-cuisines").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--sections-cuisines").offset().top },
      1000
    );
  });

  $(".js--scroll-to-city-guide").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--sections-city-guide").offset().top },
      1000
    );
  });

  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title');
      }
    }
  });
});

document.getElementById('learn-more-btn').addEventListener('click', function () {
  var button = this;
  if (button.getAttribute('aria-expanded') !== 'true') {
      button.innerHTML = 'Read Less';
  } else {
      button.innerHTML = 'Learn More';
  }
});