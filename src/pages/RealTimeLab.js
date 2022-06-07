import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { io } from "socket.io-client";

import { getCourses } from '../actions/course';
import { getLabs, updateLab, createLab } from '../actions/lab';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CodEditor from '../components/CodEditor/CodEditor';

import { ENDPOINT } from '../constants/API';
import styles from '../components/LabPage/LabPage.module.css';

const RealTimeLab = () => {
    const { idCourse, idLab } = useParams();

    // State variable to set users source code
	const [userCode, setUserCode] = useState(``);
    // State variable to set users input
    const [userInput, setUserInput] = useState("");
    // State variable to set editors default language
	const [userLang, setUserLang] = useState("python");
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [toggle, setToggle] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourses());
        dispatch(getLabs());
    }, [dispatch]);

    const courses = useSelector((state) => state.courses.courses.filter((item) => item._id === idCourse));
    const myLabs = useSelector((state) => state.labs.filter((item) => item.idStudent === user.result._id && item.idCourse === idCourse));
    const myLab = myLabs.find((object) => object.idLab === idLab);
    const [course, setCourse] = useState(courses[0]);
    const lab = course.labs.find((lab) => lab._id === idLab);
    const [fileName, setFileName] = useState(myLab ? myLab.name : `${lab.name.split(".")[0]}-${user.result.name}`)
    

    useEffect(() => {
        if(myLab && toggle) {
            setUserCode(myLab.code);
            setUserLang(myLab.lang);
            setToggle(false);
        }
    }, [myLabs])

    let socket;

    useEffect(() => {
        socket = io(ENDPOINT);

        const { _id, name } = user.result;
        const courseID = course._id;

        socket.emit('join', { _id, name, userCode, userInput, userLang, courseID }, (error) => {
            
        });
    }, [userCode, userInput, userLang, courses]);

    const handleChange = (e) => {
		console.log(fileName);
		setFileName(e.target.value)
	}

    const saveLab = () => {
        const labData = {idCourse, idStudent: user.result._id, studentName: user.result.name, idTutor: course.idTutor, idLab, name: fileName, code: userCode, lang: userLang};
        console.log(labData.code)
        if(myLab && myLab._id && labData.code) {
            dispatch(updateLab(myLab._id, labData)); 
            alert("Le fichier a été mis à jour avec succès");
        }
        else{
            if(labData.code) {
                alert("Fichier enregistré avec succès");
                dispatch(createLab(labData));
            }
            else
            alert("Écrivez quelque chose pour le sauvegarder");
        }
    }



  return (
    <>
        <Header />
        
        <h5 className={'text-center ' + styles.title}>
            {"TP"+` en temps réel : ${course.title}`.toUpperCase()} <br />
            {`  ${lab.name.split(".")[0]}`.toUpperCase()}
        </h5>

        <CodEditor 
                readOnly={false}
                userLang={userLang} setUserLang={setUserLang} 
                userCode={userCode} setUserCode={setUserCode} 
                userInput={userInput} setUserInput={setUserInput}/>

        <div className='container-fliud text-center'>
            <div className='row justify-content-md-center mt-2'>
                <div className='col-md-auto'>
                <div className="input-group mb-3">
                    <input onChange={handleChange} value={fileName} type="text" className="form-control" placeholder="Le nom de fichier" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                    <button onClick={() => saveLab()} className="btn btn-info" type="button">Enregistrer le fichier</button>
                    </div>
                </div>
                </div>
            </div>
        </div>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Fichier enregistré avec succès</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                {':)'}
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
            </div>
            </div>
        </div>
        </div>

        <Footer />
    </>
  )
}

export default RealTimeLab
