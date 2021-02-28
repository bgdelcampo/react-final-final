import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    const [ready, setReady] = useState(false);
    const [temperature, setTemperature] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setTemperature(response.data.main.temp);
        setReady(true);
    }

    if (ready) {
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

                <h1> New York</h1>
                <ul>
                    <li>Wednesday 7:00 </li>
                    <li>Monstly Cloudy</li>
                </ul>
                <div className="row">
                    <div className="col-6">
                        <p>img here</p>
                        <spam className="temperature">{Math.round(temperature)}</spam>°C
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Precipitation:15%</li>
                            <li>Humidity:7%</li>
                            <li>Wind:7km/h</li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    } else {

        const apiKey = "38c9293a2365a91b362e3d61894095ed";
        let city = "New York";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}