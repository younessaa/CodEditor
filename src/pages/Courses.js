import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { io } from "socket.io-client";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CoursesTable from '../components/CoursesTable/CoursesTable';
import UsersOnligne from '../components/UsersOnligne/UsersOnligne';

const Courses = () => {
  const location = useLocation();
  const [users, setUsers] = useState('');
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  let socket;
    const ENDPOINT = 'http://localhost:5000/';

    useEffect(() => {
        socket = io(ENDPOINT);
    
        const { _id, name } = user.result;
        const courseID = user.result.sector + user.result.studentClass;

        socket.emit('join', { _id, name, courseID }, (error) => {
            
        }); 
      }, [ENDPOINT, location.path]);

    useEffect(() => {
        socket = io(ENDPOINT);

        socket.on("roomData", ({ users }) => {
          setUsers(users);
        });
    }, [location.path]);

  return (
    <>
      <Header />

      <div className='container-fliud mt-3'>
        <div className='row'>
          <div className='col-8 ml-5 mr-1'>
            <CoursesTable />
          </div>
          <div className='col-3'>
            <UsersOnligne users={users} />
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}

export default Courses
