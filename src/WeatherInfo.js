import React from "react";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1> {props.data.city}</h1>
            <ul>

                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src={props.data.iconUrl} alt={props.data.description} className="float-let" />
                    <spam className="temperature">{Math.round(props.data.temperature)}</spam>°C
                    </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity:{props.data.humidity}%</li>
                        <li>Wind:{Math.round(props.data.wind)}km/h</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}