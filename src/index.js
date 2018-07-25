import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Hero} from './components/Hero'
import { createStore } from 'redux'
// import the reducer
import reducer from './store/reducer'
import { Provider } from 'react-redux'

// create the store by passing the reducer
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <BrowserRouter>
  <Provider store = {store}>
    <App>
      <Switch>
        <Route exact path = "/" component = {Hero} />
      </Switch>
    </App>
  </Provider>
</BrowserRouter>


, document.getElementById('root'));
registerServiceWorker();
