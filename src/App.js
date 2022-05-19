import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/auth" exact element={<Auth />} />
      </Routes>
    </Container>
  </BrowserRouter>
);

export default App;
