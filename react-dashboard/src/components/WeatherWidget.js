import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../asset/css/WeatherWidget.css';

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
        //   `https://maps.googleapis.com/maps/api/geocode/json?address=Gorakhpur&key=AIzaSyBf8sGJSFw2GlIwYKPWlO-j3m6OBZLXvhc`
          `https://airquality.googleapis.com/v1/currentConditions:lookup?key=AIzaSyBf8sGJSFw2GlIwYKPWlO-j3m6OBZLXvhc`
        );
        setWeatherData(response?.data?.results[0]);
        // console.log(response?.data?.results[0])
        console.log(response)
      } catch (err) {
        setError(err.message);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="weather-widget" style={styles.widget}>
    <h2 style={styles.header}>Weather</h2>
    {error ? (
      <p style={styles.error}>Error: {error}</p>
    ) : !weatherData ? (
      <p style={styles.loading}>Loading weather data...</p>
    ) : (
      <div style={styles.content}>
        <p><strong>City:</strong> {weatherData.formatted_address}</p>
        {/* <p><strong>Temperature:</strong> {weatherData.main.temp}°C</p> */}
        {/* <p><strong>Weather:</strong> {weatherData.weather[0].description}</p> */}
        {/* <p><strong>Humidity:</strong> {weatherData.main.humidity}%</p> */}
        {/* <p><strong>Wind Speed:</strong> {weatherData.wind.speed} m/s</p> */}
      </div>
    )}
  </div>
);
};

const styles = {
widget: {
  maxWidth: "400px",
  padding: "20px",
  margin: "20px auto",
  border: "1px solid #ccc",
  borderRadius: "10px",
  backgroundColor: "#f9f9f9",
  fontFamily: "Arial, sans-serif",
},
header: {
  textAlign: "center",
  color: "#333",
},
error: {
  color: "red",
},
loading: {
  color: "#777",
  textAlign: "center",
},
content: {
  lineHeight: "1.6",
},
};



export default WeatherWidget;