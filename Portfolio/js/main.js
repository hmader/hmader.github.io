/*======================================================================
      Arrow Buttons
    ======================================================================*/

$("img.down-arrow").click(function () {
    $("html, body").animate({
        scrollTop: ($(".first").position().top)
    }, 1000);
    //console.log($(".first").position().top);
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
      Waypoints
    ======================================================================*/
var menubg = new Waypoint({
    element: $(".down-arrow"),
    handler: function (direction) {
        if (direction == 'down') {
            $(".home-button").css({
                    'background-color': 'black',
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