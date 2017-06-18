import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';
import App from './App';

const theme = {
    breakpoints: {
        xs: 320,
        sm: 414,
        md: 768,
        lg: 1024,
        xl: 1920
    }
};

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);
