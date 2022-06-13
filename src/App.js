import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Auth from './components/Auth/Auth';
import Home from './pages/Home';
import Editor from './pages/Editor';
import Courses from './pages/Courses';
import Course from './pages/Course';
import Dashboard from './pages/Dashboard/Dashboard'
import Labs from './pages/Labs';
import Lab from './pages/Lab';
import RealTimeLab from './pages/RealTimeLab';
import Deliverables from './pages/Deliverables';
import Profil from './pages/Profil';

const App = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [])

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/profil" exact element={<Profil />} />
          <Route path="/labs" exact element={<Labs />} />
          <Route path="/labs/:id" exact element={<Lab />} />
          <Route path="/editor" exact element={<Editor />} />
          <Route path="/courses" exact element={<Courses />} />
          <Route path="/courses/:id/labs" exact element={<Course />} />
          <Route path="/courses/:id" exact element={<Course />} />
          <Route path="/courses/:idCourse/labs/:idLab" exact element={<RealTimeLab />} />
          <Route path="/courses/:idCourse/labs/:idLab/deliverables" exact element={<Deliverables />} />
          <Route path="/auth" exact element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
};

export default App;
