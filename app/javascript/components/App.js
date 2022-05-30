import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3000/api/v1/helloworld';

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

import HelloWorld from './HelloWorld';

function App() {
  const [hello, setHello] = useState('');

  useEffect(() => {
    console.log('usefecf');
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setHello(items.message);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HelloWorld greeting={hello} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
