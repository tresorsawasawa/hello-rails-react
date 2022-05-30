import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

//import configureStore from './configureStore';

import HelloWorld from './HelloWorld';
//const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HelloWorld greeting="Friends" />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
//import { composeWithDevTools } from 'redux-devtools-extension';

import helloReducer from './helloworld/hello';

const reducer = combineReducers({
  helloReducer,
});

const store = createStore(reducer);

export default App;
