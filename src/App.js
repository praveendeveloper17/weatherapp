import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState("");
    const [city, setCity] = useState();

    const apikey = 'f13fa570ce253b9e714a8399970000dd';

    const getWeatherData = async () => {
        if (!search) return; // Prevent fetch if search is empty
        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apikey}&units=metric`
        );
        let result = await response.json();
        setCity(result);
    };

    useEffect(() => {
        getWeatherData(); // Call the function
    }, [search]);

  return (
    <div className="App">
            <div className="weather-card">
                <div className="search">
                    <input
                        type="search"
                        placeholder="enter city name"
                        spellCheck="true"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="weather">
                    <img
                        className="weather-icon"
                        src="https://static.vecteezy.com/system/resources/previews/024/825/182/non_2x/3d-weather-icon-day-with-rain-free-png.png"
                        alt="Weather icon representing rain"
                    />
                    <h1 className="temp">{city?.main?.temp}°C</h1>
                    <h2 className="city">{city?.name}</h2>
                    <div className="details">
                        <div style={{ display: "flex" }} className="col">
                            <img
                                className="humi"
                                src="https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png"
                                alt="Humidity icon"
                            />
                            <div className="info">
                                <p className="humidity">{city?.main?.humidity}%</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                        <div className="col">
                            <img
                                className="wind"
                                src="https://cdn-icons-png.flaticon.com/512/136/136712.png"
                                alt="Wind speed icon"
                            />
                            <div className="info">
                                <p className="wind">{city?.wind?.speed} km/h</p>
                                <p>Wind Speed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
  );
}

export default App;
