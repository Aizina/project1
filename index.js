  function toggleNavBar() {
  var navbar = document.getElementById("hidden-navigation");
  var icon = document.getElementsByClassName("icon")[0];
  
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
    icon.innerHTML = "&#9776;"; // Change back to hamburger icon
  } else {
    navbar.style.display = "block";
    icon.innerHTML = "&#10006;"; // Change to X icon
  }
}



function toggleDropdown(contentId, iconId) {
  var dropdownContent = document.getElementById(contentId);
  var dropdownIcon = document.getElementById(iconId);

  dropdownContent.classList.toggle('show');
  dropdownIcon.classList.toggle('arrow');
}

// Close the dropdown menus if clicked outside
document.addEventListener('click', function (event) {
  var dropdownContent1 = document.getElementById("dropdown-content-1");
  var dropdownIcon1 = document.getElementById("drop-icon-1");
  var dropdownContent2 = document.getElementById("dropdown-content-2");
  var dropdownIcon2 = document.getElementById("drop-icon-2");
  var targetElement = event.target;

  if (!targetElement.classList.contains('dropdown-button')) {
    // Clicked outside the dropdowns, close them
    dropdownContent1.classList.remove('show');
    dropdownIcon1.classList.remove('arrow');
    dropdownContent2.classList.remove('show');
    dropdownIcon2.classList.remove('arrow');
  }
});


function toggleHiddenArticles() {
  var hiddenArticles = document.querySelectorAll('.hidden-articles');
  hiddenArticles.forEach(function(article) {
    article.classList.toggle('show');
  });
}

