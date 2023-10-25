// Get the button that toggles the menu
const toggleBtn = document.querySelector('[data-collapse-toggle="navbar-sticky"]');

// Get the menu element
const menu = document.getElementById('navbar-sticky');

// Add a click event listener to the button
toggleBtn.addEventListener('click', function () {
  // Toggle the aria-expanded attribute of the button
  const expanded = toggleBtn.getAttribute('aria-expanded') === 'true' || false;
  toggleBtn.setAttribute('aria-expanded', !expanded);

  // Toggle the hidden class of the menu
  menu.classList.toggle('hidden');
});
