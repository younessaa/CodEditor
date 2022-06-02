import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { io } from "socket.io-client";

import styles from "./UsersOnligne.module.css";
import avatar from '../../assets/images/profil-avatar.png';

const UsersOnligne = () => {
  const location = useLocation();
  const [users, setUsers] = useState('');
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [isStudent, setIsStudent] = useState(JSON.parse(localStorage.getItem('isStudent')));

  let socket;
  const ENDPOINT = "http://localhost:5000/"

  useEffect(() => {
      socket = io(ENDPOINT);
  
      const { _id, name } = user.result;
      const courseID = isStudent.result ? user.result.sector + user.result.studentClass : user.result._id;

      socket.emit('join', { _id, name, courseID }, (error) => {
          
      }); 
    }, [ENDPOINT, location]);

  useEffect(() => {
      socket = io(ENDPOINT);

      socket.on("roomDataByCourseID", ({ users }) => {
        setUsers(users);
      });
  }, [ENDPOINT, location]);

  return (
    <div className={styles.users}>
        <h5 className={'mb-2 ' + styles.title}>UTILISATEURS EN LIGNE</h5>
        <h6 className={'mb-3 ' + styles.title2}>{users.length} utilisateurs en ligne (5 dernières minutes)</h6>
      
        <div className='justify-content-md-center'>
        { users ? 
            users.map((user) => (
                    <div key={user._id} className='mb-2 ml-4'>
                        <img className={styles.avatar} src={avatar} alt='avatar'/>
                        <h6 className={styles.name}>{user.name.toUpperCase()}</h6>
                    </div>
                )
            ) : null
        }
        </div>
    </div>
  )
}

export default UsersOnligne
