import  React from 'react';
import ReactDom from 'react-dom';
import Router from "./containers/Router";
import {Provider} from "react-redux";
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import initStore, {history} from "./utils/store";

const {store, persistent} = initStore();

ReactDom.render(
    <Provider store={ store }>
        <PersistGate loading={ null } persistent={persistent}>
            <ConnectedRouter history={history}>
                <Router/>
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
    );