// Initialize top button to scroll back top of site
$(document).ready(function () {
  // Variables, elements etc
  // Check if element's top is in the viewport
  function topIsInViewport(elem) {
    var rect = elem.offset();
    return rect.top < $(window).scrollTop() + $(window).height();
  }
  // Check if element is in the viewport
  function isInViewport(elem) {
    var rect = elem.offset();
    return (
      rect.top + elem.outerHeight() > $(window).scrollTop() &&
      rect.top < $(window).scrollTop() + $(window).height()
    );
  }
  // Show button after scrolling 20px down otherwise hide
  function topButtonDisp() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      $("#topButton").show();
    } else {
      $("#topButton").hide();
    }
  }
  //Scroll back to the top of site
  function topFunc() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  // Listen when topButton is clicked
  $("#topButton").click(function () {
    topFunc();
  });
  // Define location of the topButton
  // If footer is visible in the viewport button is placed 10px on top of the bottom bar
  function topButtonLoc() {
    if (topIsInViewport($("footer"))) {
      $("#topButton").css("position", "absolute");
      $("#topButton").css("bottom", "auto");
      $("#topButton").css("top", $("footer").offset().top - 35 + "px");
    } else {
      $("#topButton").css("position", "fixed");
      $("#topButton").css("bottom", "15px");
      $("#topButton").css("top", "auto");
    }
  }
  // Execute a JavaScript when window is being scrolled
  window.onscroll = function () {
    topButtonDisp();
    topButtonLoc();
  };
});
