import React from "react";
import "./Weather.css";

export default function Weather() {
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
        6°C
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
}