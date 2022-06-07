import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { io } from "socket.io-client";
import Select from 'react-select';

import styles from './LabPage.module.css';
import { getCourses } from '../../actions/course';
import CodEditor from '../CodEditor/CodEditor';

import { ENDPOINT } from '../../constants/API';

const LabPage = ({id}) => {

    // State variable to set users source code
	const [userCode, setUserCode] = useState(``);
    // State variable to set users input
    const [userInput, setUserInput] = useState("");
    // State variable to set editors default language
	const [userLang, setUserLang] = useState("python");

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

    useEffect(() => {
        socket = io(ENDPOINT);

        const { _id, name } = user.result;
        const courseID = id;

        socket.emit('join', { _id, name, courseID }, (error) => {
            
        }); 
        }, [ENDPOINT, location.path]);

    useEffect(() => {
        socket = io(ENDPOINT);
  
        socket.on("roomDataByCourseID", ({ users }) => {
          setUsers(users.filter((user) => user._id !== course.idTutor && user.courseID == course._id));
        });
    }, [ENDPOINT, location.path]);

    useEffect(() => {
        let list = [];
        users.map((user) => (
            list.push({value: user._id, label: user.name.toUpperCase()})
        ));
        
        setUsers_list(list);  
    }, [users]);

    useEffect(() => {
        let data = users.find((item) => item._id === userId);
        if(data !== undefined) {
            setUserCode(data.userCode);
            setUserName(data.name);
            setUserLang(data.userLang);
        }
    }, [userId, users])

    return (
        <>
            <h5 className={'text-center mb-2 ' + styles.title}>
                {"TPs"+` en temps réel : ${course.title}`.toUpperCase()}
            </h5>
            <div className={'m-2 ' + styles.LabPage}>
                <div className='row '>
                    <h5 className={'col-6 pb-2 ' + styles.title}>
                        {userName !== "" ? `l’ÉDITEUR DE ${userName}`.toUpperCase() : ""}
                    </h5>
                    <p className={"col-2 text-center " + styles.selectionner}> 
                        <span className='text-success '>{users_list.length + " Utilisateurs connectés"}</span> 
                    </p>
                    <Select className='col-3' options={users_list} defaultValue={users_list[0]}
                        onChange={(e) => {
                            setUserId(e.value);
                        }}
                        placeholder={userId ? users_list[userId] : "Sélectionner un utilisateur"} />
                </div>
                <CodEditor 
                    readOnly={true}
                    userLang={userLang} setUserLang={setUserLang} 
                    userCode={userCode} setUserCode={setUserCode} 
                    userInput={userInput} setUserInput={setUserInput}/>
            </div>
        </>
    )
}

export default LabPage
