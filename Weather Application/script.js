async function fetchData() {
  const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d167922530msh9afa48e6ff9bde1p19e162jsnae93601369a4",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    cityName.innerHTML = city;
    const response = await fetch(url, options);
    const result = await response.json(); // Parse the JSON response
    console.log(result);

    // Now you can access the properties of the result object
    cloud_pct.innerHTML = result.cloud_pct;
    temp.innerHTML = result.temp;
    feels_like.innerHTML = result.feels_like;
    humidity.innerHTML = result.humidity;
    min_temp.innerHTML = result.min_temp;
    max_temp.innerHTML = result.max_temp;
    wind_speed.innerHTML = result.wind_speed;
    wind_degrees.innerHTML = result.wind_degrees;
    // sunrise.innerHTML = result.sunrise;
    // sunset.innerHTML = result.sunset;

    const sunriseTime = new Date(result.sunrise * 1000); // Multiply by 1000 to convert seconds to milliseconds
    const sunsetTime = new Date(result.sunset * 1000);

    // Format as HH:mm:ss
    const sunriseFormatted = sunriseTime.toLocaleTimeString();
    const sunsetFormatted = sunsetTime.toLocaleTimeString();

    // Now you can update the HTML
    sunrise.innerHTML = `Sunrise Time is ${sunriseFormatted}`;
    sunset.innerHTML = `Sunset Time is ${sunsetFormatted}`;
  
  } 
    catch (error) {
      console.error(error);
    }
  
}



// Call the async function
fetchData();
