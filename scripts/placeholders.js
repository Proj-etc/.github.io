// Load and place page content to the placeholders
$(document).ready(function () {
  // Navigation bar
  $("#navigationPlaceholder").load("/structure/navigation.html");
  // Top bar
  $("#topPlaceholder").load("/structure/top.html");
  // Content
  $("#contentPlaceholder").load("/content/home.html", function () {
    // Replace browser history state with home info
    window.history.replaceState({ page: "home" }, "", "?home");
    // Page title
    document.title = window.history.state.page.toUpperCase();
  });
  // Bottom bar
  $("#bottomPlaceholder").load("/structure/bottom.html");
  // Footer bar
  $("#footerPlaceholder").load("/structure/footer.html");
});
