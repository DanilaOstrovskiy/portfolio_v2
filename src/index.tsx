import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalStyle} from "./styles/GlobalStyled";
import {HashRouter} from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <HashRouter>
            <I18nextProvider i18n={i18n}>
            <GlobalStyle/>
            <App/>
            </I18nextProvider>
        </HashRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
