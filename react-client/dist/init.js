$(document).ready(function() {
  $(window).scroll(function() {
    var fromTopPx = 800; // distance to trigger video off
    var scrolledFromtop = $(window).scrollTop();
    if (scrolledFromtop < fromTopPx) {
      $("#landingVideoPage").show();
    } else {
      $("#landingVideoPage").hide();
    }
  });
});
