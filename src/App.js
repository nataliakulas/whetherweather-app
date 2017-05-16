import React, {Component} from 'react';

import Grid from 'grid-styled'
import {Title, Wrapper, Button, Paragraph} from './components/styled';

const lastUpdate = new Date().toString();

const cities = {
    'warszawa': '52.229, 21.012',
    'gdansk': '54.352, 18.646',
    'sopot': '54.441, 18.560',
    'gdynia': '54.519, 18.530',
    'bydgoszcz': '53.123, 18.008',
    'poznan': '52.406, 16.925',
    'torun': '53.014, 18.598',
    'szczecin': '53.428, 14.553',
    'swinoujscie': '53.910, 14.247'
};

class App extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Wrapper>
                        <Title>This is Whether Weather App!</Title>
                        {
                            Object.keys(cities).map(function (cityName, index) {
                                    return (
                                        <div className="city-name"><Button>{cityName.toUpperCase()}</Button></div>
                                    )
                                }
                            )
                        }
                        <Paragraph>Last updated at: {lastUpdate}</Paragraph>
                    </Wrapper>
                </Grid>
            </div>
        );
    }
}

export default App;
