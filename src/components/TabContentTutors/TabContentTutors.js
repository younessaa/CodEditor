import React, {useEffect} from 'react';
import styles from './TabContentUsers.module.css';
import './TabContentUsers.css';
import TabCardTutor from './TabCardTutor/TabCardTutor';

import { getTutors } from '../../actions/tutor';

import { useDispatch, useSelector } from "react-redux";
import AddTutor from '../AddTutor/AddTutor'

function TabCardTutors() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTutors());
    }, [dispatch]);

    const tutors = useSelector((state) => state.tutors);
    console.log(tutors);



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
                        Email
                    </div>
                    <div className='col-sm-2'>
                    </div>
                </div>
                {
                    tutors.length && 
                    tutors.map( (tutor) => (
                        <>
                            <div className={styles.TabBorder}></div>
                            <TabCardTutor 
                                id={tutor._id} 
                                name={tutor.name}
                                email={tutor.email}
                            />
                        </>
                    ) )
                } 
            </div>
            <div className="tab-pane" id="addUser" role="tabpanel" aria-labelledby="add-user">
                <div className='text-center'>
                    <AddTutor />
                </div>
            </div>
            </div>
        </div>
    </div>
    );
}


export default TabCardTutors;
