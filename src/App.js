import React, {Component} from 'react';

import Grid from 'grid-styled'
import {Title, Wrapper, Button, Paragraph} from './components/styled';

import cities from '../public/data/cities.json'

const lastUpdate = new Date().toString();

class App extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Wrapper>
                        <Title>This is Whether Weather App!</Title>
                        {
                            Object.keys(cities).map((cityName, index) => (
                                    <div className="city-name">
                                        <Button onClick={''}>{cityName.toUpperCase()}</Button>
                                    </div>
                                )
                            )
                        }
                        <Paragraph>Last updated at: {lastUpdate}</Paragraph>
                    </Wrapper>
                </Grid>
            </div>
        );
    };
}

export default App;
