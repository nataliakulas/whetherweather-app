import React, {Component} from 'react';

import Grid from 'grid-styled'
import {Title, Subtitle, Wrapper, Box, Row, Button, Paragraph} from './components/styled';

import {url, key} from './ajax/Api.js'

import './assets/global.css'

import data from '../public/data/cities.json'

class App extends Component {
    constructor() {
        super();

        this.state = {
            className: '',
            city: '',
            weatherData: {
                "condition": '',
                "temp_c": '',
                'humidity': '',
                "wind_kph": '',
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
                                className: 'selected',
                                city: city,
                                weatherData: {
                                    "condition": result['current']['condition']['text'],
                                    "temp_c": result['current']['temp_c'],
                                    'humidity': result['current']['humidity'],
                                    "wind_kph": result['current']['wind_kph'],
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
        let weatherDetails;
        if (this.state.city) {
            weatherDetails = <Paragraph>
                Summary:&ensp;{this.state.weatherData.condition}&ensp;|&ensp;
                Temperature:&ensp;{this.state.weatherData.temp_c}&ensp;°C&ensp;|&ensp;
                Humidity:&ensp;{this.state.weatherData.humidity}&ensp;%&ensp;|&ensp;
                Wind Speed:&ensp;{this.state.weatherData.wind_kph}&ensp;km/h&ensp;|&ensp;
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
                                    <Button className={this.state.className}
                                            key={city.id}
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
