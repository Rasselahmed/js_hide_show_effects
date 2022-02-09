$(document).ready(function () {
    $('#hidebtn').click(function () {
        // $('.box').hide();
        // $('.box').hide("slow");
        $('.box').hide(3000);
    });

    $('#showbtn').click(function () {
        $('.box').show(3000);
    });
});