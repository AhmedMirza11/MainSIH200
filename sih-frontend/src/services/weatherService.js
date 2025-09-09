export async function getLocalWeather() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ location: "Sample Village", temp: 29, desc: "Partly Cloudy" }), 400);
  });
}
