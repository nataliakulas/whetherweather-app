import React, {Component} from 'react';
import Img from 'react-image';

import {Title, Subtitle, Wrapper, Box, Row, Button, Paragraph} from './assets/Styled';

import {url, key} from './ajax/Api.js';

import './assets/global.css';

import data from './assets/data/city-data.json';
import windData from './assets/data/wind-data';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city: '',
            weatherData: {
                "condition": '',
                "temp_c": '',
                'humidity': '',
                "wind_kph": '',
                "wind_dir": '',
                "pressure_mb": ''
            }
        };
    }

    handleClick(city) {
        fetch(
            url + key + "&q=" + city,
            {
                method: 'GET',
            }
        ).then(response => {
                if (response.ok) {
                    return response.json().then(result => {
                            this.setState({
                                city: city,
                                weatherData: {
                                    "condition": result['current']['condition']['text'],
                                    "temp_c": result['current']['temp_c'],
                                    'humidity': result['current']['humidity'],
                                    "wind_kph": result['current']['wind_kph'],
                                    "wind_dir": result['current']['wind_dir'],
                                    "pressure_mb": result['current']['pressure_mb']
                                }
                            })
                        }
                    )
                }
            }
        );
    }

    render() {
        const lastUpdate = new Date().toLocaleString();


        let windDir;
        switch (this.state.weatherData.wind_dir) {
            case 'N':
                windDir = windData.N;
                break;
            case 'NNE':
                windDir = windData.NNE;
                break;
            case 'NE':
                windDir = windData.NE;
                break;
            case 'ENE':
                windDir = windData.ENE;
                break;
            case 'E':
                windDir = windData.E;
                break;
            case 'ESE':
                windDir = windData.ESE;
                break;
            case 'SE':
                windDir = windData.SE;
                break;
            case 'SSE':
                windDir = windData.SSE;
                break;
            case 'S':
                windDir = windData.S;
                break;
            case 'SSW':
                windDir = windData.SSW;
                break;
            case 'SW':
                windDir = windData.SW;
                break;
            case 'WSW':
                windDir = windData.WSW;
                break;
            case 'W':
                windDir = windData.W;
                break;
            case 'WNW':
                windDir = windData.WNW;
                break;
            case 'NW':
                windDir = windData.NW;
                break;
            case 'NNW':
                windDir = windData.NNW;
                break;
            default:
                windDir = '';
        }

        let weatherDetails;
        if (this.state.city) {
            weatherDetails = <Paragraph>
                Summary:&nbsp;{this.state.weatherData.condition}&nbsp;|&nbsp;
                Temperature:&nbsp;{this.state.weatherData.temp_c}&nbsp;°C&nbsp;|&nbsp;
                Humidity:&nbsp;{this.state.weatherData.humidity}&nbsp;%&nbsp;|&nbsp;
                Wind Speed:&nbsp;{this.state.weatherData.wind_kph}&nbsp;km/h&nbsp;
                <Img src={windDir}/>&nbsp;|&nbsp;
                Pressure:&nbsp;{this.state.weatherData.pressure_mb}&nbsp;hPa
            </Paragraph>
        }

        return (
            <Wrapper>
                <Title>Whether Weather App</Title>

                <Subtitle>Displays local weather.<br/> Whether it's good or bad.</Subtitle>

                <Box>
                    {
                        data.map(
                            city => (
                                <Button key={city.id}
                                        onClick={this.handleClick.bind(this, city.name)}>
                                    {city.name.toUpperCase()}
                                </Button>
                            )
                        )
                    }
                </Box>

                <Row>
                    <Paragraph><strong>Actual weather Details: </strong></Paragraph>
                    {weatherDetails}
                </Row>

                <Paragraph>Last updated at: {lastUpdate}</Paragraph>
            </Wrapper>

        );
    };
}

export default App;
