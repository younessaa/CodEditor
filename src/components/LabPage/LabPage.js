import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { io } from "socket.io-client";
import Select from 'react-select';

import styles from './LabPage.module.css';
import { getCourses } from '../../actions/course';
import CodEditor from '../CodEditor/CodEditor';

const LabPage = ({id}) => {

    // State variable to set users source code
	const [userCode, setUserCode] = useState(``);
    // State variable to set users input
    const [userInput, setUserInput] = useState("");
    const [userName, setUserName] = useState("");
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const [tutor, setTutor] = useState(JSON.parse(localStorage.getItem('profile')));

    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCourses());
    }, [dispatch]);

    const courses = useSelector((state) => state.courses.courses.filter((item) => item._id === id));
    const [course, setCourse] = useState(courses[0]);
    const [users, setUsers] = useState([]);
    const [users_list, setUsers_list] = useState([]);
    const [userId, setUserId] = useState("");

    let socket;
    const ENDPOINT = "http://localhost:5000/";

    useEffect(() => {
        socket = io(ENDPOINT);

        const { _id, name } = user.result;
        const courseID = user.result._id;

        socket.emit('join', { _id, name, courseID }, (error) => {
            
        }); 
        }, [ENDPOINT, location.path]);

    useEffect(() => {
        socket = io(ENDPOINT);
  
        socket.on("roomDataByCourseID", ({ users }) => {
          setUsers(users.filter((user) => user._id !== user.courseID));
        });
    }, [ENDPOINT, location.path]);

    useEffect(() => {
        let list = [];
        users.map((user) => (
            list.push({value: user._id, label: user.name.toUpperCase()})
        ));
        
        if(users[0]) {
            setUserId(users[0]._id)
        }
        setUsers_list(list);  
    }, [users]);

    useEffect(() => {
        let data = users.find((item) => item._id === userId);
        if(data !== undefined) {
            setUserCode(data.userCode);
            setUserName(data.name);
        }
    }, [userId])

    return (
        <div className={'m-2 ' + styles.LabPage}>
            <div className='row mb-2'>
                <h5 className={'col-5 pb-2 ' + styles.title}>
                    {userName !== "" ? `l’ÉDITEUR DE ${userName}`.toUpperCase() : "Aucun utilisateur dans ce cours"}
                </h5>
                <p className={"col-3 text-center mt-1 " + styles.selectionner}>
                    Sélectionnez un étudiant
                </p>
                <Select className='col-3' options={users_list} defaultValue={users_list[0]}
					onChange={(e) => {
						setUserId(e.value);
					}}
					placeholder={users_list[userId]} />
            </div>
            <CodEditor 
                readOnly={true}
                userCode={userCode} setUserCode={setUserCode} 
                userInput={userInput} setUserInput={setUserInput}/>
        </div>
    )
}

export default LabPage
