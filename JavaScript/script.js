$(document).ready(function () {
    $(".faq").each(function () {
        const chevronUp = $(this).find(".chevronUp");
        const chevronDown = $(this).find(".chevronDown");
        const content = $(this).find(".answer");

        chevronDown.on("click", function () {
            content.slideDown(300);
            chevronDown.hide();
            chevronUp.show();
        });

        chevronUp.on("click", function () {
            content.slideUp(300);
            chevronDown.show();
            chevronUp.hide();
        });
    });
});

$(document).ready(function () {
    // Toggle the navbar visibility on mobile
    $("button[data-collapse-toggle='navbar-default']").on("click", function () {
        $("#navbar-default").toggleClass("hidden");
    });
});
