
// Get all accordion buttons
var accButtons = document.querySelectorAll('.accordion-button');

// Loop through the buttons and add the click event listener
accButtons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    // Toggle between adding and removing the "active" class to highlight the button that controls the panel
    this.classList.toggle('active');

    // Toggle between hiding and showing the active panel
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null; // Panel is open, need to close it
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'; // Panel is closed, need to open it
    }
  });
});


function toggleHamburgerMenu() {
  var navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

$(document).ready(function () {

  setInterval(function () {
    var dateTime = moment().format("MMMM Do YYYY");
    $("#date-time").text(dateTime);
    dateTime = moment().format("h:mm:ss a")
    $("#date-hour").text(dateTime);
  }, 1000);
  // Fetch the weather for Vancouver
  var apiKey = "20d9814bf4msh84563c01c908c51p145503jsn624eb7491784";
  var apiUrl = "https://weatherapi-com.p.rapidapi.com/current.json?q=V5H";

  fetch(apiUrl, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Set the weather and temperature in the footer
      document.getElementById("weather").textContent = data.current.condition.text + ", " + data.current.temp_c + "°C";
    })
    .catch((error) => {
      // Show an error message if the weather could not be fetched
      document.getElementById("weather").textContent = "Error fetching weather.";
    });
});
