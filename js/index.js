$(window).scroll(function() {
    var hT = $('#my_skillsets').offset().top,
        hH = $('#my_skillsets').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
        $('.skillbar').skillbar({
      speed: 2000,
        });
    }
});
$('#mail').click(function(){
    window.location.href = "mailto:zeusleeck@gmail.com";
});