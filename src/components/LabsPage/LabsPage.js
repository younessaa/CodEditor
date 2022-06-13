import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './LabsPage.module.css';
import { getCourses } from '../../actions/course';
import UsersOnligne from '../UsersOnligne/UsersOnligne';
import CourseLable from '../CourseLable/CourseLable';
import { Link } from 'react-router-dom';

const LabsPage = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCourses());
    }, [dispatch]);

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [isStudent, setIsStudent] = useState(JSON.parse(localStorage.getItem('isStudent')));
    const idUser = user.result._id;

    const courses_list = useSelector((state) => state.courses);

    const courses = isStudent.result ? courses_list.filter((course) => {
        if(course.participant.includes(idUser)) {
        return course;
        }
    }) :
    courses_list.filter((course) => {
        if(course.idTutor === idUser) {
        return course;
        }
    });

    return (
        <div className='container-fliud mt-3'>
            <div className='row'>
                <div className={'col-8 ml-5 mr-1 ' + styles.LabsPage}>
                    <h5 className={'pb-2 ' + styles.title}>{"choisir une COURS".toUpperCase()}</h5>
                    {
                        courses.map((course) => (
                            <Link key={course._id} className={styles.link} to={`/labs/${course._id}`}> <CourseLable  course={course}/> </Link>
                        ))
                    }
                </div>
                <div className='col-3'>
                    <UsersOnligne />
                </div>
            </div>
        </div>
    )
}

export default LabsPage
