import React, {Component} from 'react';

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
                <h1>This is Whether Weather App!</h1>
                <p>Last updated at: {lastUpdate}</p>
            </div>

        );
    }
}

export default App;
