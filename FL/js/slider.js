var increments = 10;


$("#slider").slider({
    orientation: "horizontal",
    min: 0,
    max: 100,
    change: switchSVG
});



function switchSVG(event, ui) {
    var level = $("#slider").slider("option", "value");
    level = Math.round(level/increments);
    if (level == 0) {
        $("#fl-sea-level > img").attr("src", "assets/FL-base.svg");
    } else {

    $("#fl-sea-level > img").attr("src", "assets/FL_" + level + "ft.svg");
    }
    console.log("level: " + level);
}


