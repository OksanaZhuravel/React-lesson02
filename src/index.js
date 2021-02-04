import  React from 'react';
import ReactDom from 'react-dom';
import Router from "./containers/Router";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import initStore from "./utils/store";


ReactDom.render(
    <Provider store={ initStore() }>
    <BrowserRouter>
    <Router/>
    </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
    );