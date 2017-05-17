import React, {Component} from 'react';

import Grid from 'grid-styled'
import {Title, Wrapper, Button, Paragraph} from './components/styled';

import cities from '../public/data/cities.json'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cityName: ''
        };

    }

    handleClick(cityName) {
        console.log('this is:', this);
        this.setState({
            cityName: cityName
        });
    }

    render() {
        const lastUpdate = new Date().toString();

        return (
            <div>
                <Grid>
                    <Wrapper>
                        <Title>This is Whether Weather App!</Title>
                        {
                            Object.keys(cities).map((cityName, index) => (
                                    <div className="city-name">
                                        <Button className="primary"
                                                onClick={(cityName) => this.handleClick(cityName)}>
                                            {cityName.toUpperCase()}
                                        </Button>
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
