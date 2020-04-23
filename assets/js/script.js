const screenSizeSwitch = 993; // Size at which hamburger menu appears

$(document).ready(function () {
   $(".sidenav").sidenav({edge: "right"});
   $("li").click(pageDisplay);
});

// Shows correct section, hides other two
function pageDisplay() {
   // Update active status for menu items
   $(".active").removeClass("active");
   $(this).addClass("active");

   // Make selected section not hidden; hide other two
   if ($(this).text() === "Portfolio") {
      $('#portfolio').removeAttr("hidden");
      $('#contact').attr("hidden", true);
      $('#about').attr("hidden", true);
   }
   else if ($(this).text() === "Contact") {
      $('#contact').removeAttr("hidden");
      $('#portfolio').attr("hidden", true);
      $('#about').attr("hidden", true);
   }
   else {
      $('#about').removeAttr("hidden");
      $('#contact').attr("hidden", true);
      $('#portfolio').attr("hidden", true);
   }
}