import React, { useState } from 'react';
import axios from 'axios';

import './styles/App.scss';
import Region from './components/Region';
import Weather from './components/Weather';
import Indicators from './components/Indicators';

function App() {
    const [stateWeather, setStateWeather] = React.useState(0);
    const [temp, setTemp] = React.useState(0);
    const [humidity, setHumidity] = React.useState(0);
    const [pressure, setPressure] = React.useState(0);
    const [region, setRegion] = React.useState('')

    let coords = {
        lat: 45,
        lon: 67,
    };

    React.useEffect(() => {
        axios
            .get('https://api.openweathermap.org/data/2.5/weather', {
                params: {
                    lat: coords.lat,
                    lon: coords.lon,
                    units: 'metric',
                    appid: 'fafc1a809f76679e02340b442ca03ca8',
                },
            })
            .then(({ data }) => {
                setRegion(data.name)

                setStateWeather(data.weather[0].main.toString());

                setTemp(data.main.temp);
                setPressure(data.main.pressure);
                setHumidity(data.main.humidity);
            });
    }, [coords]);

    return (
        <div>
            <Region region={region}/>
            <Weather weather={stateWeather} />
            <Indicators temp={temp}  pressure={pressure} humidity={humidity} />
        </div>
    );
}

export default App;
