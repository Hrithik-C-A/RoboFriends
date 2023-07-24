import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './containers/App'
import './index.css'
import 'tachyons'
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import {createLogger} from 'redux-logger'
import { Provider } from 'react-redux'
import { searchRobots } from './reducers'

const logger = createLogger();

const store = createStore(searchRobots, applyMiddleware(logger));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
)
