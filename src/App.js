import React, {Component} from 'react';

import Grid from 'grid-styled'
import {Title, Subtitle, Wrapper, Box, Row, Button, Paragraph} from './components/styled';

import './assets/global.css'

// import data from '../public/data/cities.json'

import data from './data'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cityName: '',
            weatherData: {
                'summary': '',
                'temperature': '',
                'humidity': '',
                'windSpeed': '',
                'pressure': ''
            }
        };
    }

    handleClick(cityName) {
        fetch(
            "https://api.darksky.net/forecast/07b2a30b3f049c6c5472768beea2b2f9/" + "52.229,21.012" + "?units=si",
            {
                method: 'GET',
            }
        ).then(response => {
                if (response.ok) {
                    return response.json().then(result => {
                            this.setState({
                                cityName: cityName,
                                weatherData: {
                                    'summary': result['currently']['summary'],
                                    'temperature': result['currently']['temperature'],
                                    'humidity': result['currently']['humidity'],
                                    'windSpeed': result['currently']['windSpeed'],
                                    'pressure': result['currently']['pressure']
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
        if (this.state.cityName) {
            weatherDetails = <Paragraph>
                Summary:&ensp;{this.state.weatherData.summary}&ensp;|&ensp;
                Temperature:&ensp;{this.state.weatherData.temperature}&ensp;°C&ensp;|&ensp;
                Humidity:&ensp;{this.state.weatherData.humidity * 100}&ensp;%&ensp;|&ensp;
                Wind Speed:&ensp;{this.state.weatherData.windSpeed}&ensp;m/s&ensp;|&ensp;
                Pressure:&ensp;{this.state.weatherData.pressure}&ensp;hPa&ensp;|&ensp;
            </Paragraph>
        }

        return (
            <Grid>
                <Wrapper>
                    <Title>Whether Weather App</Title>

                    <Subtitle>Displays local weather. Whether it's good or bad.</Subtitle>

                    <Box>
                        {
                            data.cities.map(
                                city => (
                                    <Button key={city.id}
                                            onClick={(cityName) => this.handleClick(cityName)}>
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
