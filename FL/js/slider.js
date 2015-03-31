$("#slider").slider({
    orientation: "horizontal",
    min: 0,
    max: 10,
    change: switchSVG
});



function switchSVG(event, ui) {
    var level = $("#slider").slider("option", "value");
    if (level == 0) {
        level = 1
    };

    $("#fl-sea-level").attr("src", "assets/FL_" + level + "ft.svg");

    console.log("level: " + level);
}


