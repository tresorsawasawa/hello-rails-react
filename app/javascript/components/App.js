import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const API_URL = 'http://localhost:3000/api/v1/helloworld';

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

import HelloWorld from './HelloWorld';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HelloWorld greeting="Friends" />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
