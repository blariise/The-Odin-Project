export default async function fetchWeather(place) {
  const API_KEY = "LUX2XGEPM3AZ4EQSY8HMKG6WY";
  const baseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  const unitGroup = "metric";

  try {
    const response = await fetch(`${baseUrl}${place}?unitGroup=${unitGroup}&key=${API_KEY}&contentType=json`);
    if (response.status == 200) {
      const result = await response.json();
      return result;
    }
    throw new Error(`Response status: ${response.status}`);
  } catch (error) {
    console.log(error);
  }
}

