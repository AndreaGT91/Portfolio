const about = "About";
const portfolio = "Portfolio";
const contact = "Contact";
var screenSizeSwitch = 993; // Size at which hamburger menu appears

$(document).ready(function () {
   $(".sidenav").sidenav({edge: "right"});
   $("li").click(clickMenu);
   $("#brand").click(clickBrand);
});

function clickMenu() {
   pageDisplay($(this));
}

function clickBrand() {
   // If screen is small enough for hamburger menu, use that list item; otherwise, use main list item
   if ($(document).width() < screenSizeSwitch) {
      pageDisplay($("#side-about"));
   }
   else {
      pageDisplay($("#main-about"));
   }
}

// On click handler for list items
function pageDisplay(listItem) {
   // Update active status for menu items
   $(".active").removeClass("active");
   listItem.addClass("active");

   // Make selected section not hidden; hide other two
   if (listItem.text() === portfolio) {
      $('#portfolio').removeAttr("hidden");
      $('#contact').attr("hidden", true);
      $('#about').attr("hidden", true);
   }
   else if (listItem.text() === contact) {
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