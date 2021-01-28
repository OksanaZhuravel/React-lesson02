import  React from 'react';
import ReactDom from 'react-dom';
import Router from "./components/Layout/Router";
import { BrowserRouter } from "react-router-dom";
/*import Layout from "./components/Layout/Layout";*/


ReactDom.render(
    <BrowserRouter>
    <Router/>
    </BrowserRouter>,
    document.getElementById('root'),
    );