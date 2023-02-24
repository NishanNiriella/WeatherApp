import React, { useState } from "react";
import api from '../../constants/apiDetails';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

function SearchForm() {
    const [longitude, setLongitude] = useState("");
    const [latitude, setLatitude] = useState("");
    const [weather, setWeather] = useState("");
    const [viewMore, setViewMore] = useState(false);
    const [forecast, setForecast] = useState("");

    function checkWeather() {
        fetch(`${api.api.base}weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api.api.key}`)
            .then((res) => res.json())
            .then((data) => {
                setWeather(data);
                console.log(data);
            });
    }

    function checkForecast() {
        fetch(`${api.api.base}forecast?lat=${latitude}&lon=${longitude}&units=metric&cnt=7&appid=${api.api.key}`)
            .then((res) => res.json())
            .then((data) => {
                setForecast(data);
                console.log('Forecasted Data as User',data);
            });
    }

    return(
        <div style={{margin: 10}}>
            <CardGroup>
                <Card style={{margin: 10}}>
                    <Card.Title style={{margin: 10}}>Search Weather</Card.Title>
                    <Card.Body>
                        <div className="form-group">
                            <label>Enter Logitude</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Enter Longitude"
                                onChange={(e) => {
                                    setLongitude(e.target.value);
                                }} 
                            />
                        </div>
                        <br></br>
                        <div className="form-group">
                            <label>Enter Latitude</label>
                            <input 
                                type="text" 
                                className="form-control"  
                                placeholder="Enter Latitude"
                                onChange={(e) => {
                                    setLatitude(e.target.value);
                                }} 
                            />
                        </div>
                        <br></br>
                        <Button onClick={() => {
                            checkWeather();
                            checkForecast();
                        }} variant='success'>Check Weather</Button>
                    </Card.Body>
                </Card>
                {weather.main ? 
                    <Card style={{margin: 10}}>
                        <Card.Title style={{margin: 10}}><h4>{weather.name}<img src={`${api.iconLink.link}${weather.weather[0].icon}.png`}/></h4></Card.Title>
                        <Card.Body>
                            <h5>Temperature: {weather.main.temp} °C</h5>
                            <p>Temperature Min: {weather.main.temp_min} °C</p>
                            <p>Temperature Max: {weather.main.temp_max} °C</p>
                            <p>Humidity: {weather.main.humidity} %</p>
                            <p>Condition: {weather.weather[0].main}/ {weather.weather[0].description}</p>
                            <Button onClick={() => {
                                if (viewMore) {
                                    setViewMore(false);
                                } else {
                                    setViewMore(true);
                                    checkForecast();
                                }
                            }} variant='success'> {viewMore? 'Hide' : 'View More'} </Button>
                        </Card.Body>
                        <Card.Footer>Feels Like: {weather.main.feels_like} °C</Card.Footer>
                    </Card>  
                : ''}
            </CardGroup>
            <CardGroup>
            {forecast.cnt? 
                <Card style={{margin: 10}}>
                <table style={{margin: 10}}>
                    <tbody>
                        <tr>
                            <td style={{paddingRight: 40, paddingBottom: 20}}>
                                <div>
                                    <h5 style={{textAlign: 'center'}}>Day 1 <img src={`${api.iconLink.link}${forecast.list[0].weather[0].icon}.png`}/></h5>
                                    <h6>Temperature: {forecast.list[0].main.temp}  °C</h6>
                                    <h6>Condition: {forecast.list[0].weather[0].main}/{forecast.list[0].weather[0].description}</h6>
                                </div>
                            </td>
                            <td style={{paddingRight: 40, paddingBottom: 20}}>
                                <div>
                                    <h5 style={{textAlign: 'center'}}>Day 2 <img src={`${api.iconLink.link}${forecast.list[1].weather[0].icon}.png`}/></h5>
                                    <h6>Temperature: {forecast.list[1].main.temp}  °C</h6>
                                    <h6>Condition: {forecast.list[1].weather[0].main}/{forecast.list[1].weather[0].description}</h6>
                                </div>
                            </td>
                            <td style={{paddingRight: 40, paddingBottom: 20}}>
                                <div>
                                    <h5 style={{textAlign: 'center'}}>Day 3 <img src={`${api.iconLink.link}${forecast.list[2].weather[0].icon}.png`}/></h5>
                                    <h6>Temperature: {forecast.list[2].main.temp}  °C</h6>
                                    <h6>Condition: {forecast.list[2].weather[0].main}/{forecast.list[2].weather[0].description}</h6>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </Card>
            : ''}
            {forecast.cnt? 
                viewMore ?
                <Card style={{margin: 10}}>
                <table style={{margin: 10}}>
                    <tbody>
                        <tr>
                            <td style={{paddingRight: 40, paddingBottom: 20}}>
                                <div>
                                    <h5 style={{textAlign: 'center'}}>Day 4 <img src={`${api.iconLink.link}${forecast.list[3].weather[0].icon}.png`}/></h5>
                                    <h6>Temperature: {forecast.list[3].main.temp}  °C</h6>
                                    <h6>Condition: {forecast.list[3].weather[0].main}/{forecast.list[3].weather[0].description}</h6>
                                </div>
                            </td>
                            <td style={{paddingRight: 40, paddingBottom: 20}}>
                                <div>
                                    <h5 style={{textAlign: 'center'}}>Day 5 <img src={`${api.iconLink.link}${forecast.list[4].weather[0].icon}.png`}/></h5>
                                    <h6>Temperature: {forecast.list[4].main.temp}  °C</h6>
                                    <h6>Condition: {forecast.list[4].weather[0].main}/{forecast.list[4].weather[0].description}</h6>
                                </div>
                            </td>
                            <td style={{paddingRight: 40, paddingBottom: 20}}>
                                <div>
                                    <h5 style={{textAlign: 'center'}}>Day 6 <img src={`${api.iconLink.link}${forecast.list[5].weather[0].icon}.png`}/></h5>
                                    <h6>Temperature: {forecast.list[5].main.temp}  °C</h6>
                                    <h6>Condition: {forecast.list[5].weather[0].main}/{forecast.list[5].weather[0].description}</h6>
                                </div>
                            </td>
                            <td style={{paddingRight: 40, paddingBottom: 20}}>
                                <div>
                                    <h5 style={{textAlign: 'center'}}>Day 7 <img src={`${api.iconLink.link}${forecast.list[6].weather[0].icon}.png`}/></h5>
                                    <h6>Temperature: {forecast.list[6].main.temp}  °C</h6>
                                    <h6>Condition: {forecast.list[6].weather[0].main}/{forecast.list[6].weather[0].description}</h6>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </Card>
            : '' : ''}
            </CardGroup>
        </div>
    );
}

export default SearchForm;