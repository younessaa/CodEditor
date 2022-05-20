import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Auth from './components/Auth/Auth';
import Home from './pages/Home';
import Editor from './pages/Editor';
import Courses from './pages/Courses';
import Course from './pages/Course';

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/editor" exact element={<Editor />} />
        <Route path="/course" exact element={<Courses />} />
        <Route path="/course/:id" exact element={<Course />} />
        <Route path="/auth" exact element={<Auth />} />
      </Routes>
    </Container>
  </BrowserRouter>
);

export default App;
