//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
    //$(".github-ribbon a img").removeClass "github-ribbon-top"
    //$(".github-ribbon a img").addClass "github-ribbon"
    $(".github-ribbon a img").fadeIn("slow", "swing");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
    $(".github-ribbon a img").fadeOut("slow", "swing");
  }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
//$(".github-ribbon a img").removeClass "github-ribbon"
//$(".github-ribbon a img").addClass "github-ribbon-top"
$(function() {
  $(".page-scroll a").bind("click", function(event) {
    var $anchor;
    $anchor = $(this);
    $("html, body").stop().animate({
      scrollTop: $($anchor.attr("href")).offset().top
    }, 700, "easeInOutExpo");
    event.preventDefault();
  });
});

$(document).ready(function() {
  // $( window ).load ->
  //$('nav').localScroll(800);
  // Recalculate for parallax
  //RepositionNav()
  //$(window).resize ->
  //   RepositionNav()
  //   return

  // blueimp.Gallery(
  //blueimp.Gallery(
  //    # [
  //    #     {
  //    #         title: 'Banana',
  //    #         href: '../img/intro.jpg',
  //    #         type: 'image/jpeg',
  //    #     }
  //    # ],
  //    document.getElementById('links').getElementsByTagName('a'),
  //    {
  //        container: '#blueimp-gallery',
  //        carousel: true
  //    }
  //)
  return $('.screenshot-link').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom',
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function(openerElement) {
        if (openerElement.is('img')) {
          return openerElement;
        } else {
          return openerElement.find('img');
        }
      }
    }
  });
});

// blueimp.Gallery([
//         {
//             title: 'Main page',
//             href: 'img/screenshot-main.gif',
//             poster: 'img/screenshot-main.gif'
//         },
//     ], {
//         container: '#blueimp-gallery',
//         carousel: true
//     });

//.parallax(xPosition, adjuster, inertia, outerHeight) options:
//xPosition - Horizontal position of the element
//adjuster - y position to start from
//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
//$('#intro').parallax(0, 700, 0.2, false);
//$('#sources').parallax(0, 2000, 0.4, true);

// deck = new $.scrolldeck({
//     slides: ".slide",
//     buttons: "nav li a",
//     easing: "easeInOutExpo",
//     offset: 0,
// })

// init controller
// controller = new ScrollMagic.Controller()
// scale_tween = TweenMax.to('#scale-animation', 1, {
//       transform: 'scale(.75)',
//       ease: Linear.easeNone
//     })

//  # create a scene
// new ScrollMagic.Scene({
//         triggerElement: '#scale-trigger'
//     })
//     .setTween(scale_tween)
//     .addTo(controller) #// assign the scene to the controller

/*$(function () {
    'use strict';
    // Initialize the Gallery as video carousel:
    blueimp.Gallery([
        {
            title: 'Sintel',
            href: 'http://hdnewwallpapers.com/wp-content/uploads/2014/04/Green-Eyes-Girls.jpg',
            type: 'image/jpeg',
            poster: 'http://hdnewwallpapers.com/wp-content/uploads/2014/04/Green-Eyes-Girls.jpg'
        }
    ], {
    container: '#blueimp-image-carousel',
    carousel: true
    });
});*/
/*
$(function () {
    'use strict';

    // Load demo images from flickr:
    $.ajax({
        // Flickr API is SSL only:
        // https://code.flickr.net/2014/04/30/flickr-api-going-ssl-only-on-june-27th-2014/
        url: 'https://api.flickr.com/services/rest/',
        data: {
            format: 'json',
            method: 'flickr.interestingness.getList',
            api_key: '7617adae70159d09ba78cfec73c13be3' // jshint ignore:line
        },
        dataType: 'jsonp',
        jsonp: 'jsoncallback'
    }).done(function (result) {
        var carouselLinks = [],
            linksContainer = $('#links'),
            baseUrl;
        // Add the demo images as links with thumbnails to the page:
        $.each(result.photos.photo, function (index, photo) {
            baseUrl = 'https://farm' + photo.farm + '.static.flickr.com/' +
                photo.server + '/' + photo.id + '_' + photo.secret;
            $('<a/>')
                .append($('<img>').prop('src', baseUrl + '_s.jpg'))
                .prop('href', baseUrl + '_b.jpg')
                .prop('title', photo.title)
                .attr('data-gallery', '')
                .appendTo(linksContainer);
            carouselLinks.push({
                href: baseUrl + '_c.jpg',
                title: photo.title
            });
        });
        // Initialize the Gallery as image carousel:
        blueimp.Gallery(carouselLinks, {
            container: '#blueimp-image-carousel',
            carousel: true
        });
    });

    // Initialize the Gallery as video carousel:
    blueimp.Gallery([
        {
            title: 'Sintel',
            href: 'https://archive.org/download/Sintel/sintel-2048-surround_512kb.mp4',
            type: 'video/mp4',
            poster: 'https://i.imgur.com/MUSw4Zu.jpg'
        },
        {
            title: 'Big Buck Bunny',
            href: 'https://upload.wikimedia.org/wikipedia/commons/7/75/' +
                'Big_Buck_Bunny_Trailer_400p.ogg',
            type: 'video/ogg',
            poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/' +
                'Big.Buck.Bunny.-.Opening.Screen.png/' +
                '800px-Big.Buck.Bunny.-.Opening.Screen.png'
        },
        {
            title: 'Elephants Dream',
            href: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/8/83/' +
                'Elephants_Dream_%28high_quality%29.ogv/' +
                'Elephants_Dream_%28high_quality%29.ogv.360p.webm',
            type: 'video/webm',
            poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/' +
                'Elephants_Dream_s1_proog.jpg/800px-Elephants_Dream_s1_proog.jpg'
        },
        {
            title: 'LES TWINS - An Industry Ahead',
            type: 'text/html',
            youtube: 'zi4CIXpx7Bg'
        },
        {
            title: 'KN1GHT - Last Moon',
            type: 'text/html',
            vimeo: '73686146',
            poster: 'https://secure-a.vimeocdn.com/ts/448/835/448835699_960.jpg'
        }
    ], {
        container: '#blueimp-video-carousel',
        carousel: true
    });

});
*/
