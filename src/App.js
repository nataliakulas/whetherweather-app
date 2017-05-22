import React, {Component} from 'react';
import Img from 'react-image';

import Grid from 'grid-styled'
import {Title, Subtitle, Wrapper, Box, Row, Button, Paragraph} from './components/styled';

import {url, key} from './ajax/Api.js'

import './assets/global.css'

import data from '../public/data/cities.json'

import N from '../public/images/icons/wind/N.png'
import NNE from '../public/images/icons/wind/NNE.png'
import NE from '../public/images/icons/wind/NE.png'
import ENE from '../public/images/icons/wind/ENE.png'
import E from '../public/images/icons/wind/E.png'
import ESE from '../public/images/icons/wind/ESE.png'
import SE from '../public/images/icons/wind/SE.png'
import SSE from '../public/images/icons/wind/SSE.png'
import S from '../public/images/icons/wind/S.png'
import SSW from '../public/images/icons/wind/SSW.png'
import SW from '../public/images/icons/wind/SW.png'
import WSW from '../public/images/icons/wind/WSW.png'
import W from '../public/images/icons/wind/W.png'
import WNW from '../public/images/icons/wind/WNW.png'
import NW from '../public/images/icons/wind/NW.png'
import NNW from '../public/images/icons/wind/NNW.png'

class App extends Component {
    constructor() {
        super();

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
        const lastUpdate = new Date().toString();

        let windDir;
        switch (this.state.weatherData.wind_dir) {
            case 'N':
                windDir = N;
                break;
            case 'NNE':
                windDir = NNE;
                break;
            case 'NE':
                windDir = NE;
                break;
            case 'ENE':
                windDir = ENE;
                break;
            case 'E':
                windDir = E;
                break;
            case 'ESE':
                windDir = ESE;
                break;
            case 'SE':
                windDir = SE;
                break;
            case 'SSE':
                windDir = SSE;
                break;
            case 'S':
                windDir = S;
                break;
            case 'SSW':
                windDir = SSW;
                break;
            case 'SW':
                windDir = SW;
                break;
            case 'WSW':
                windDir = WSW;
                break;
            case 'W':
                windDir = W;
                break;
            case 'WNW':
                windDir = WNW;
                break;
            case 'NW':
                windDir = NW;
                break;
            case 'NNW':
                windDir = NNW;
                break;
            default:
                windDir = '';
        }

        let weatherDetails;
        if (this.state.city) {
            weatherDetails = <Paragraph>
                Summary:&ensp;{this.state.weatherData.condition}&ensp;|&ensp;
                Temperature:&ensp;{this.state.weatherData.temp_c}&ensp;°C&ensp;|&ensp;
                Humidity:&ensp;{this.state.weatherData.humidity}&ensp;%&ensp;|&ensp;
                Wind Speed:&ensp;{this.state.weatherData.wind_kph}&ensp;km/h&ensp;
                <Img src={windDir}/>&ensp;|&ensp;
                Pressure:&ensp;{this.state.weatherData.pressure_mb}&ensp;hPa
            </Paragraph>
        }

        return (
            <Grid>
                <Wrapper>
                    <Title>Whether Weather App</Title>

                    <Subtitle>Displays local weather. Whether it's good or bad.</Subtitle>

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
                        <Paragraph>Actual weather Details: </Paragraph>
                        {weatherDetails}
                    </Row>

                    <Paragraph>Last updated at: {lastUpdate}</Paragraph>
                </Wrapper>
            </Grid>
        );
    };
}

export default App;
