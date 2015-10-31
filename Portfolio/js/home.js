var mobileScreen = 760;
var fade = '.35';
var clicked = "data";
var galleryWidth = $(window).width() - $('.skills').width();
//

var divList = $("div.tile");
console.log("divList", divList);

//function reSort() { 
//    console.log("in reSort");
//    divList.sort(function(a, b) {
//        console.log($(a).data("sort").value - $(b).data("sort").value);
//       return ($(a).data("sort").value - $(b).data("sort").value);
//    });
//    $(".ftg-items").html(divList);
//}
//
//function reOrder() { 
//    $(".focused").before($(".after"));
//}

$(document).ready(function () {
    
//    $(".dataProj").data("sort", {value: 1});
//    console.log($(".dataProj").data("sort").value);
//    $(".dataProj").data("sort", {value: 0});
//    console.log($(".dataProj").data("sort").value);
//    console.log($(".posterProj").data("sort").value);
//console.log("parent 1", $(".dataProj").parent());
//console.log("parent 2", $(".dataProj").parent().parent());
    $('#gallery').finalTilesGallery({
        margin: 10,
        minTileWidth: 300,
    });
    
    $('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

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

$(window).resize(function () {
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

$(".data").click(function () {
    if ($(this).hasClass(clicked)) {
        console.log(this);
    }

    $(".data").addClass("selected");
    $(".visdesign").removeClass("selected");
    $(".code").removeClass("selected");
    
    $(".designProj").removeClass("focused").addClass("after");
    $(".codeProj").removeClass("focused").addClass("after");
    $(".dataProj").addClass("focused").removeClass("after");
    
    $(".designProj").parent().parent().data("sort", {value: 1});
    $(".codeProj").parent().parent().data("sort", {value: 1});
    $(".dataProj").parent().parent().data("sort", {value: 0});
    
//    reSort();
//    reOrder();
    
//    console.log("data-sort value", $(".dataProj").parent().parent().data("sort").value);
//    console.log("parent parent", $(".dataProj").parent().parent());
//    console.log("data", $(".dataProj").data("sort").value);

});

$(".visdesign").click(function () {
    if ($(this).hasClass(clicked)) {
        console.log(this);
    }
    $(".data").removeClass("selected");
    $(".visdesign").addClass("selected");
    $(".code").removeClass("selected");
    
    $(".dataProj").removeClass("focused").addClass("after");
    $(".codeProj").removeClass("focused").addClass("after");
    $(".designProj").addClass("focused").removeClass("after");
    
    $(".dataProj").parent().parent().data("sort", {value: 1});
    $(".codeProj").parent().parent().data("sort", {value: 1});
    $(".designProj").parent().parent().data("sort", {value: 0});
    
});

$(".code").click(function () {
    if ($(this).hasClass(clicked)) {
        console.log(this);
    }
    $(".data").removeClass("selected");
    $(".visdesign").removeClass("selected");
    $(".code").addClass("selected");
    
    $(".dataProj").removeClass("focused").addClass("after");
    $(".designProj").removeClass("focused").addClass("after");
    $(".codeProj").addClass("focused").removeClass("after");
    
    $(".dataProj").parent().parent().data("sort", {value: 1});
    $(".designProj").parent().parent().data("sort", {value: 1});
    $(".codeProj").parent().parent().data("sort", {value: 0});

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

$(".overlay").click(function (event) {
    if($(event.target).is(".overlay")) {
        $(".overlay").removeClass("show");
    }
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