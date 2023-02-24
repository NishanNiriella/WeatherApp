import React, { useEffect, useState } from 'react';
import SearchForm from '../forms/searchForm';
import api from '../../constants/apiDetails';
import Button from 'react-bootstrap/esm/Button';

function HomePage() {
    const [weather, setWeather] = useState("");
    const [forecast, setForecast] = useState("");
    const [viewMore, setViewMore] = useState(false);

    useEffect(() => {
        function getColomboTemps() {
            fetch(`${api.api.base}weather?q=Colombo&units=metric&appid=${api.api.key}`)
            .then((res) => res.json())
            .then((data) => {
                setWeather(data);
            });
        }
        function loadThreeDays() {
            fetch(`${api.forecastApi.base}?q=Colombo&cnt=7&units=metric&appid=${api.forecastApi.key}`)
            .then((res) => res.json())
            .then((data) => {
                setForecast(data);
                console.log('Forecast Data',data);
            });
        }
        getColomboTemps();
        loadThreeDays();
    }, []);

    return(
        <>
        <div>
        <div className="bg-image" style={{backgroundImage: `url('https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, height: '600px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
            <div className="card mx-4 mx-md-5 shadow-5-strong" style={{marginTop: '-500px', marginBottom: '80px'}}>
                <SearchForm/>
            </div>
        </div>
        <hr></hr>
        <div className='container' style={{marginTop: 180, height: 600}}>
            <div className='row'>
                <div className='col'>
                    {weather.main ? 
                        <div>
                            <table>
                                <tr>
                                    <td>
                                        <h4>{weather.name} <img src={`${api.iconLink.link}${weather.weather[0].icon}.png`}/></h4>
                                    </td>
                                    <td>
                                        <h6>Temperature:</h6> <h4>{weather.main.temp} °C</h4>
                                    </td>
                                </tr>
                            <h6>Condition:</h6> <h4>{weather.weather[0].main}/ {weather.weather[0].description}</h4> 
                            <h6>Feels Like:</h6> <h4>{weather.main.feels_like} °C</h4> 
                            </table>
                            {
                                forecast.cnt ? 
                                <>
                                <h5 style={{paddingTop: 40}}>Weather for next 3 Days</h5>
                                <table>
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
                                </table>
                                </>
                            : '' }
                        </div>
                        : ''
                    }
                </div>
                <div className='col'>
                    {
                        viewMore ?
                        <>
                        <h4>Weekly Weather Forecast in Colombo</h4>
                            {
                                forecast.cnt ? 
                                <>
                                <table>
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
                                        <td style={{paddingBottom: 20}}>
                                            <div>
                                                <h5 style={{textAlign: 'center'}}>Day 3 <img src={`${api.iconLink.link}${forecast.list[2].weather[0].icon}.png`}/></h5>
                                                <h6>Temperature: {forecast.list[2].main.temp}  °C</h6>
                                                <h6>Condition: {forecast.list[2].weather[0].main}/{forecast.list[2].weather[0].description}</h6>
                                            </div>
                                        </td>
                                    </tr>
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
                                    </tr>
                                    <tr>
                                        <td style={{paddingRight: 40, paddingBottom: 20}}>
                                            <div>
                                                <h5 style={{textAlign: 'center'}}>Day 7 <img src={`${api.iconLink.link}${forecast.list[6].weather[0].icon}.png`}/></h5>
                                                <h6>Temperature: {forecast.list[6].main.temp}  °C</h6>
                                                <h6>Condition: {forecast.list[6].weather[0].main}/{forecast.list[6].weather[0].description}</h6>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                                <Button variant='success' onClick={() => setViewMore(false)}>Hide</Button>
                                </>
                                : ''
                            }
                        </>
                        : <Button
                            variant='success'
                            onClick={() => {
                                setViewMore(true);
                            }}>
                            View More
                        </Button>
                    }   
                </div>
            </div>
        </div>
        </>
    )
}

export default HomePage;