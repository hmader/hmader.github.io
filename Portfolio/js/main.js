$(document).ready(function(){
    $(this).scrollTop(0);
});

/*======================================================================
      Arrow Buttons
    ======================================================================*/
var firstClick = false;

$(window).scroll(function() {
if ($(window).scrollTop() >= $(".myWrap").height()) {
//    console.log($(window).scrollTop());
//    console.log(.5*$(".myWrap").height());
//    console.log("in");
  firstClick = true;  
};
});

$("img.down-arrow").click(function () {
    
     $(".down-arrow").css({
                'position': 'fixed',
                'left': '50%',
                'bottom': '45',
                'transform': 'translate(-50%, 0)'
            });
    
    if (!firstClick) {
        $("html, body").animate({
            scrollTop: ($(".first").position().top)
        }, 1000);
        //console.log($(".first").position().top);
        firstClick = true;
    } else if (firstClick) {
        console.log($(window).scrollTop());
     $("html, body").animate({
            scrollTop: ($(window).scrollTop() + $(".first").height())
        }, 1000);   
    }
});

$("img.left-arrow").click(function () {
    $(".backstretch-div").backstretch("pause");
    $(".backstretch-div").backstretch("prev");
});

$("img.right-arrow").click(function () {
    $(".backstretch-div").backstretch("pause");
    $(".backstretch-div").backstretch("next");
});

/*======================================================================
      Contact clickage
    ======================================================================*/
$(".contact-bubble").click( function() {
    console.log("click");
   $(".overlay").addClass("show"); 
});

$(".overlay-content>.button").click( function() {
    $(".overlay").removeClass("show");
});

/*======================================================================
      Waypoints
    ======================================================================*/

var arrowOffset = $(".myWrap").height() - .5 * $(".down-arrow").height();
var footerOffset = $(window).height();

var arrow = new Waypoint({
    element: $(".down-arrow"),
    handler: function (direction) {
        if (direction == 'down') {
            $(".down-arrow").css({
                'position': 'fixed',
                'left': '50%',
                'bottom': '45',
                'transform': 'translate(-50%, 0)'
            });
        } else {
            $(".down-arrow").css({
                'position': 'static',
                'transform': 'translate(0, 0)'
            })
        }
    },
    offset: arrowOffset
});

var hitFooter = new Waypoint({
    element: $("footer"),
    handler: function (direction) {
       $(".down-arrow").css({
                'position': 'static',
                'transform': 'translate(0, 0)'
            });
        firstClick = false;
    }, offset: footerOffset
});

var menubg = new Waypoint({
    element: $(".down-arrow"),
    handler: function (direction) {
        if (direction == 'down') {
            $(".home-button").css({
                    'background-color': '#282828',
                    'transition': '1s'
                }),
                $(".contact-bubble").css({
                    'fill': '#282828',
                    'transition': '1s'
                }),
                $("circle").css({
                    'fill': '#FFFFFF',
                    'transition': '1s'
                }),
                $("nav").css({
                    'background-color': 'rgba(255, 255, 255, 1)',
                    'transition': '1s'
                })
        } else {
            $(".home-button").css({
                    'background-color': 'transparent',
                    'transition': '.5s'
                }),
                $(".contact-bubble").css({
                    'fill': '#FFFFFF',
                    'transition': '1s'
                }),
                $("circle").css({
                    'fill': '#FFFFFF',
                    'transition': '1s'
                }),
                $("nav").css({
                    'background-color': 'transparent',
                    'transition': '.5s'
                })
        }
    },
    offset: 50
});

$('.descriptors-container').each(function () {
    var myElement = this;
    var inview = new Waypoint({
        element: myElement,
        handler: function (direction) {
            $(this.element).animate({
                'opacity': 1
            })
        },
        offset: '80%'
    });

});