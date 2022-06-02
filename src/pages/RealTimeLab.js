import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { io } from "socket.io-client";

import { getCourses } from '../actions/course';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CodEditor from '../components/CodEditor/CodEditor';

const RealTimeLab = () => {
    const { idCourse, idLab } = useParams();

    // State variable to set users source code
	const [userCode, setUserCode] = useState(``);
    // State variable to set users input
    const [userInput, setUserInput] = useState("");
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
    const ENDPOINT = "http://localhost:5000/"

    useEffect(() => {
        socket = io(ENDPOINT);

        const { _id, name } = user.result;
        const courseID = course.idTutor;

        socket.emit('join', { _id, name, userCode, userInput, courseID }, (error) => {
            
        });
    }, [userCode, userInput]);

    

    // useEffect(() => {
    //     socket = io(ENDPOINT);

    //     socket.on("codeDataInRoom", ({ codes }) => {
    //     setUsers(codes);
    //     });
    // }, [userCode]);

  return (
    <>
        <Header />

        <CodEditor 
                readOnly={false}
                userCode={userCode} setUserCode={setUserCode} 
                userInput={userInput} setUserInput={setUserInput}/>

        <Footer />
    </>
  )
}

export default RealTimeLab
