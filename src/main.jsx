import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './containers/App'
import './index.css'
import 'tachyons'
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux'
import {createLogger} from 'redux-logger'
import { Provider } from 'react-redux'
import { searchRobots, requestRobots } from './reducers'
import thunk from 'redux-thunk'

const logger = createLogger();

const rootReducer = combineReducers({searchRobots, requestRobots});

const store = createStore(rootReducer, applyMiddleware(thunk,logger));

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App/>
    </Provider>
)
