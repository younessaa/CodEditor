import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Auth from './components/Auth/Auth';
import Home from './pages/Home';
import Editor from './pages/Editor';
import Courses from './pages/Courses';
import Course from './pages/Course';
import Labs from './pages/Labs';
import Lab from './pages/Lab';
import RealTimeLab from './pages/RealTimeLab';

const App = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [])

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" exact element={user ? <Home /> : <Navigate to="/auth" replace />} />
          <Route path="/labs" exact element={user ? <Labs />: <Navigate to="/auth" replace />} />
          <Route path="/labs/:id" exact element={user ? <Lab /> : <Navigate to="/auth" replace />} />
          <Route path="/editor" exact element={user ? <Editor /> : <Navigate to="/auth" replace />} />
          <Route path="/courses" exact element={user ? <Courses /> : <Navigate to="/auth" replace />} />
          <Route path="/courses/:id" exact element={user ? <Course /> : <Navigate to="/auth" replace />} />
          <Route path="/courses/:idCourse/labs/:idLab" exact element={user ? <RealTimeLab /> : <Navigate to="/auth" replace />} />
          <Route path="/auth" exact element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
};

export default App;
