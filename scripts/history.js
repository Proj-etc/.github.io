// Update etc browser history
$(document).ready(function () {
  // Update history when using back and forward
  $(window).on("popstate", function (event) {
    $("#" + window.history.state.page + "")[0].click();
  });
  // Listen click events and change content when necessary
  document.addEventListener("click", async (event) => {
    if (
      // If you clicked on an A-nchor tag (link)
      event.target.tagName === "A" &&
      // And links target origin is same as current origin (same domain)
      event.target.origin === location.origin
    ) {
      // Don't ask the server for that resource!
      event.preventDefault();
      // Event target id is same as page content
      var page = event.target.id;
      // If event target's class list contains "homeId" then target is "home"
      if (event.target.classList.contains("homeId")) {
        page = "home";
      }
      // Load content
      $("#contentPlaceholder").load(
        "/content/" + page + ".html",
        function (response, status, xhr) {
          if (status == "error") {
            $(".nav-link.active").removeClass("active");
            $("#contentPlaceholder").load("/content/404.html");
          } else if (
            window.history.length == 1 &&
            event.target.classList.contains("home-id")
          ) {
            $(".nav-link.active").removeClass("active");
            $("#" + page).addClass("active");
          } else {
            $(".nav-link.active").removeClass("active");
            $("#" + page).addClass("active");
            if (window.history.state.page != page) {
              window.history.pushState({ page: page }, "", "?" + page);
            }
          }
          // Load data
        }
      );
    }
  });
});
