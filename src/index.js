import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store'
import './index.css';
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux";
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <ChakraProvider>
                <App/>
            </ChakraProvider>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
