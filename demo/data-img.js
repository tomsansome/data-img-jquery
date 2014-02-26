$.fn.dataImg = function(options) {

  var settings = $.extend({
    sml: 400,
    med: 800,
    lrg: 1000,
    resize: false
  }, options );

  var This = $(this);

  function resize(size) {
    This.each(function() {
      This.attr('src', size);
    });
  }

  function breakpoints() {

    var screen = $(window).width();

    if (screen > settings.lrg) {
      var size = This.data('lrg');
      resize(size);
    }

    if (screen < settings.lrg) {
      var size = This.data('lrg');
      resize(size);
    }
    if (screen < settings.med) {
      var size = This.data('med');
      resize(size);
    }
    if (screen < settings.sml) {
      var size = This.data('sml');
      resize(size);
    }

  }breakpoints();

  if(settings.resize == true){
    $(window).resize(function(){
      breakpoints();
    });
  }

};