// Load and initialize navigation links
$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "https://proj-etc-db.up.railway.app/api/v1/links/navigation",
        success: function (response) {
            $(response).each(function (i, val) { 
                var navItem = document.createElement("li");
                navItem.className = "nav-item";
                var navLink = document.createElement("a");
                navLink.id = val.id;
                navLink.className = "nav-link";
                navLink.href = "";
                navLink.innerHTML = val.id;
                navItem.append(navLink);
                if(val.align == "left"){
                    $("#navMiddle").before(navItem);
                }else{
                    $("#nav ul").append(navItem);
                };
            });
            // Add active class to the current content page
            $("#"+window.history.state.page).addClass("active");
        }
    });
});