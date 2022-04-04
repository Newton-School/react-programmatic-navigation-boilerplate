import React, { useState } from 'react';
import { Route,Routes } from 'react-router';
import { BrowserRouter } from "react-router-dom";
import '../styles/App.css';
import { Counter } from './Counter';
import { Five } from './Five';

const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/five" element={<Five />} />
      </Routes>
    </BrowserRouter>

  )
}


export default App;
