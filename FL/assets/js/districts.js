$(document).ready(function () {

    $('path').each(function () {
        $(this).on("click", function () {
            this.path.css({
                fill: "red"
            });
        });
    });

});