var mobileScreen = 760;
var fade = '.35';
//var firstClick = false;
//
$(document).ready(function () {

    $(this).scrollTop(0);


    $("a.aProject").each(function () {
        var myText = $(this).find(".projectText");
        var imgHeight = $(this).find(".projectImg").height();
        //    var imgHeight = myImage.height();
        //    console.log(myText);
        //    console.log(myImage.height());
        $(this).css({
            'height': imgHeight
        });

        myText.css({
            'height': imgHeight
        });

    });

});

$( window ).resize(function() {
    $("a.aProject").each(function () {
        var myText = $(this).find(".projectText");
        var imgHeight = $(this).find(".projectImg").height();
        //    var imgHeight = myImage.height();
        //    console.log(myText);
        //    console.log(myImage.height());
        $(this).css({
            'height': imgHeight
        });

        myText.css({
            'height': imgHeight
        });

    });
});

$(".dvSection").click(function () {

    $(".dvSection").addClass("selected");
    $(".pdSection").removeClass("selected");
    $(".wdSection").removeClass("selected");
    $(".dataViz>.projectWrap>.projectText").addClass("focused");
    $(".printDesign>.projectWrap>.projectText").removeClass("focused");
    $(".webDesign>.projectWrap>.projectText").removeClass("focused");

});

$(".pdSection").click(function () {

    $(".dvSection").removeClass("selected");
    $(".pdSection").addClass("selected");
    $(".wdSection").removeClass("selected");
    $(".dataViz>.projectWrap>.projectText").removeClass("focused");
    $(".printDesign>.projectWrap>.projectText").addClass("focused");
    $(".webDesign>.projectWrap>.projectText").removeClass("focused");

});

$(".wdSection").click(function () {

    $(".dvSection").removeClass("selected");
    $(".pdSection").removeClass("selected");
    $(".wdSection").addClass("selected");
    $(".dataViz>.projectWrap>.projectText").removeClass("focused");
    $(".printDesign>.projectWrap>.projectText").removeClass("focused");
    $(".webDesign>.projectWrap>.projectText").addClass("focused");

});

/*======================================================================
      Contact clickage
    ======================================================================*/
$(".contact-bubble").click(function () {
    console.log("click");
    $(".overlay").addClass("show");
});

$(".overlay-content>.button").click(function () {
    $(".overlay").removeClass("show");
});

///*======================================================================
//      Waypoints
//    ======================================================================*/
//
//var arrowOffset = $(".myWrap").height() - .5 * $(".down-arrow").height();
//var footerOffset = $(window).height();
//
//
///*  down arrow position adjustments  */
//
//$(document).ready(function () {
//    if ($(window).width() >= mobileScreen) {
//        var arrow = new Waypoint({
//            element: $(".down-arrow"),
//            handler: function (direction) {
//                if (direction == 'down') {
//                    $(".down-arrow").css({
//                        'position': 'fixed',
//                        'left': '50%',
//                        'bottom': '45',
//                        'transform': 'translate(-50%, 0)'
//                    });
//                } else {
//                    $(".down-arrow").css({
//                        'position': 'static',
//                        'transform': 'translate(0, 0)'
//                    })
//                }
//            },
//            offset: arrowOffset
//        });
//    }
//
//});
//
//var hitFooter = new Waypoint({
//    element: $("footer"),
//    handler: function (direction) {
//        $(".down-arrow").css({
//            'position': 'static',
//            'transform': 'translate(0, 0)'
//        });
//        firstClick = false;
//    },
//    offset: footerOffset
//});
//
///*  Descriptors fade-in upon scroll  */
//
//$('.descriptors-container').each(function () {
//    var myElement = this;
//    var inview = new Waypoint({
//        element: myElement,
//        handler: function (direction) {
//            $(this.element).animate({
//                'opacity': 1
//            })
//        },
//        offset: '80%'
//    });
//
//});