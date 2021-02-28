import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {

    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,

            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",

        });
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">

                <form>
                    <div className="row">
                        <div className="col-9">
                            <input
                                type="search"
                                placeholder="Enter a city.."
                                className="form-control"
                                autoFocus="on"
                            />
                        </div>
                        <div className="col-3">
                            <input
                                type="submit"
                                value="Search"
                                className="btn btn-primary w-100"
                            />
                        </div>
                    </div>
                </form>

                <h1> {weatherData.city}</h1>
                <ul>

                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                <div className="row">
                    <div className="col-6">
                        <img src={weatherData.iconUrl} alt={weatherData.description} className="float-let" />
                        <spam className="temperature">{Math.round(weatherData.temperature)}</spam>°C
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Precipitation:15%</li>
                            <li>Humidity:{weatherData.humidity}%</li>
                            <li>Wind:{weatherData.wind}km/h</li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    } else {

        const apiKey = "3ad13e184308fdcf4ae098a37ba13c6b";
        let city = "New York"
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}