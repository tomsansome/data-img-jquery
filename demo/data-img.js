$.fn.dataImg = function (options) {

    var settings = $.extend({
        sml: 400,
        med: 800,
        lrg: 1000,
        resize: false
    }, options);

    This = $(this);

    function resize(size) {
        This.each(function (i, v) {
            var e = $(v);
            if (e.is('img')) {
                e.attr('src', size);
            } else {
                e.css('background-image', 'url(' + size + ')');
            }
        });
    }

    function breakpoints() {

        var screen = $(window).width();
        var size;
        if (screen > settings.med) {
            size = This.data('lrg');
        }
        else if (screen <= settings.med && screen > settings.sml) {
            size = This.data('med');
        }
        else {
            size = This.data('sml');
        }
        if (size !== undefined) {
            resize(size);
        }

    } breakpoints();

    if (settings.resize == true) {
        $(window).resize(function () {
            breakpoints();
        });
    }
};