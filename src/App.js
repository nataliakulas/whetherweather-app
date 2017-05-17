import React, {Component} from 'react';
import $ from 'jquery';

import Grid from 'grid-styled'
import {Title, Wrapper, Button, Paragraph} from './components/styled';

import cities from '../public/data/cities.json'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cityName: '',
            weatherData: {
                'summary': '',
                'temperature': '',
                'humidity': '',
                'windSpeed': ''
            }
        };
    }

    handleClick(cityName) {
        $.ajax({
            url: "https://api.darksky.net/forecast/07b2a30b3f049c6c5472768beea2b2f9/" + "52.229,21.012",
            dataType: 'jsonp',
            context: this,
            success: function (result) {
                this.setState({
                    cityName: cityName,
                    weatherData: {
                        'summary': result['currently']['summary'],
                        'temperature': result['currently']['temperature'],
                        'humidity': result['currently']['humidity'],
                        'windSpeed': result['currently']['windSpeed']
                    }
                });
            }
        })
    }

    render() {
        const lastUpdate = new Date().toString();
        let weatherDetails;
            if (this.state.cityName) {
                console.log('inside if')
                weatherDetails = <Paragraph>
                                    Summary:&ensp;{this.state.weatherData.summary}&ensp;|&ensp;
                                    Temperature:&ensp;{this.state.weatherData.temperature}&ensp;|&ensp;
                                    Humidity:&ensp;{this.state.weatherData.humidity}&ensp;|&ensp;
                                    Wind Speed:&ensp;{this.state.weatherData.windSpeed}&ensp;|&ensp;
                                </Paragraph>
            }

        return (
            <div>
                <Grid>
                    <Wrapper>
                        <Title>This is Whether Weather App!</Title>
                        {
                            Object.keys(cities).map((cityName, index) => (
                                    <div>
                                        <Button onClick={(cityName) => this.handleClick(cityName)}>
                                            {cityName.toUpperCase()}
                                        </Button>
                                    </div>
                                )
                            )
                        }
                        <div>
                            <Paragraph>Weather Details: </Paragraph>
                            {weatherDetails}
                        </div>
                        <Paragraph>Last updated at: {lastUpdate}</Paragraph>
                    </Wrapper>
                </Grid>
            </div>
        );
    };
}

export default App;
