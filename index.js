
$(document).ready(function() {
    $(".toggle-paragraph").click(function() {
        $(this).next(".toggle-paragraph-content").slideToggle();
    });
});
