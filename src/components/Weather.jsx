import React from 'react';
import Sun from '../assets/meteocons-icons/2.svg';
import Clouds from '../assets/meteocons-icons/25.svg'
import Rain from '../assets/meteocons-icons/18.svg'
import Snow from '../assets/meteocons-icons/23.svg'

function Weather({weather}) {

    return (
        <div id="weather">
            <img src={Sun} alt="weather-icon" />
            <p>{weather}</p>
        </div>
    );
}

export default Weather;
