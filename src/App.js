import React, {Component} from 'react';

import styled from 'styled-components';
import Grid from 'grid-styled'


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  text-align: center;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Paragraph = styled.p`
  font-size: 1em;
  text-align: center;
  color: palevioletred;
`

const lastUpdate = new Date().toString();

const cities = {
    'warszawa': '52.229, 21.012',
    'gdansk': '54.352, 18.646',
    'sopot': '54.441, 18.560',
    'gdynia': '54.519, 18.530',
    'bydgoszcz': '53.123, 18.008',
    'torun': '53.014, 18.598',
    'poznan': '52.406, 16.925',
    'szczecin': '53.428, 14.553',
    'swinoujscie': '53.910, 14.247'
}

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
