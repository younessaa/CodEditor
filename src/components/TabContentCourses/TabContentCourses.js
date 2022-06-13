import React, {useEffect} from 'react';
import styles from './TabContentUsers.module.css';
import './TabContentUsers.css';
import TabCardCourse from './TabContentCourse/TabContentCourse';

import { getCourses } from '../../actions/course';

import { useDispatch, useSelector } from "react-redux";

function TabCardTutors() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCourses());
    }, [dispatch]);

    const courses = useSelector((state) => state.courses);
    console.log(courses);



    return (
    <div className={styles.TabContent}>
        <ul className="nav nav-tabs nav-tabs-users" id="myTab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#allUsers" role="tab" aria-controls="home" aria-selected="true">All Tutors</a>
            </li>
        </ul>

        <div class="tab-content">
            <div className="tab-pane active" id="allUsers" role="tabpanel" aria-labelledby="home-tab">
            <div className={styles.TabContentCard}>
                <div className='row text-center'>
                    
                    <div className='col-sm-2'>
                        ID
                    </div>
                    <div className='col-sm-2'>
                        Name
                    </div>
                    <div className='col-sm-2'>
                        Tutor ID
                    </div>
                    <div className='col-sm-2'>
                        participants
                    </div>
                    <div className='col-sm-2'>
                    </div>
                </div>
                {
                    courses.length && 
                    courses.map( (course) => (
                        <>
                            <div className={styles.TabBorder}></div>
                            <TabCardCourse 
                                id={course._id} 
                                name={course.title}
                                idTutor={course.idTutor} 
                                participant={course.participant ? course.participant.length : 0}
                            />
                        </>
                    ) )
                } 
            </div>
            </div>
        </div>
    </div>
    );
}


export default TabCardTutors;
