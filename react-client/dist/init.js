

$(document).ready(function() {

  $(window).scroll(function() {
    var fromTopPx = 800; // distance to trigger
    var scrolledFromtop = $(window).scrollTop();
    if (scrolledFromtop < fromTopPx) {
      console.log('UPPPPPP')
                  $("#fml").show()


    } else {
            console.log("Down");

            $("#fml").hide()


    }
  });
})
