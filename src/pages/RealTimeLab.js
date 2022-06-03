import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { io } from "socket.io-client";

import { getCourses } from '../actions/course';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CodEditor from '../components/CodEditor/CodEditor';

import { ENDPOINT } from '../constants/API';

const RealTimeLab = () => {
    const { idCourse, idLab } = useParams();

    // State variable to set users source code
	const [userCode, setUserCode] = useState(``);
    // State variable to set users input
    const [userInput, setUserInput] = useState("");
    // State variable to set editors default language
	const [userLang, setUserLang] = useState("python");
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    // const [codes, setCodes] = useState('');

    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourses());
    }, [dispatch]);

    const courses = useSelector((state) => state.courses.courses.filter((item) => item._id === idCourse));
    const [course, setCourse] = useState(courses[0]);

    let socket;

    useEffect(() => {
        socket = io(ENDPOINT);

        const { _id, name } = user.result;
        const courseID = course._id;

        socket.emit('join', { _id, name, userCode, userInput, userLang, courseID }, (error) => {
            
        });
    }, [userCode, userInput, userLang]);

  return (
    <>
        <Header />

        <CodEditor 
                readOnly={false}
                userLang={userLang} setUserLang={setUserLang} 
                userCode={userCode} setUserCode={setUserCode} 
                userInput={userInput} setUserInput={setUserInput}/>

        <Footer />
    </>
  )
}

export default RealTimeLab
