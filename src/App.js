import React, {Component} from 'react';

const lastUpdate = new Date().toString();

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
