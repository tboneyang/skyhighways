var ready = function() {
  /*
  var vid = document.getElementById("bgvid");
  var pauseButton = document.getElementById("pauseb");

  function vidFade() {
    vid.classList.add("stopfade");
  }

  vid.addEventListener('ended', function()
  {
  // only functional if "loop" is removed
  vid.pause();
  // to capture IE10
  vidFade();

});


  pauseButton.addEventListener("click", function() {
    vid.classList.toggle("stopfade");
    if (vid.paused) {
      vid.play();
      pauseButton.innerHTML = "PAUSE";
    } else {
      vid.pause();
      pauseButton.innerHTML = "PAUSED";
    }
  })*/

  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
};


$(document).ready(ready);
$(document).on('page:load', ready);
