function toggleExperienceDetail(element) {
  // This function will toggle the 'expanded' class on the parent .experience-entry
  var experienceEntry = element.parentElement;
  if (experienceEntry.classList.contains('expanded')) {
    experienceEntry.classList.remove('expanded');
  } else {
    experienceEntry.classList.add('expanded');
  }
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
