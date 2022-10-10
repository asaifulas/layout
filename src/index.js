import { ThemeProvider } from '@emotion/react';
import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import theme from './Theme'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <React.StrictMode>
            {/* <ThemeProvider theme={theme}> */}
                <App />
            {/* </ThemeProvider> */}
        </React.StrictMode>
    </BrowserRouter>
);