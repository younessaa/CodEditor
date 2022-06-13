import React, {useEffect} from 'react';
import styles from './TabContentUsers.module.css';
import './TabContentUsers.css';
import TabCardUser from './TabCardUser/TabCardUser';

import { getStudents } from '../../actions/student';

import { useDispatch, useSelector } from "react-redux";
import AddStudent from '../AddStudent/AddStudent';

function TabContentUsers() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStudents());
    }, [dispatch]);

    const users = useSelector((state) => state.students);
    console.log(users);



    return (
    <div className={styles.TabContent}>
        <ul className="nav nav-tabs nav-tabs-users" id="myTab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#allUsers" role="tab" aria-controls="home" aria-selected="true">All Students</a>
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
                        Sector
                    </div>
                    <div className='col-sm-2'>
                        Email
                    </div>
                    <div className='col-sm-2'>
                    </div>
                </div>
                {
                    users.length && 
                    users.map( (user) => (
                        <>
                            <div className={styles.TabBorder}></div>
                            <TabCardUser 
                                id={user._id} 
                                name={user.name}
                                sector={user.sector}
                                email={user.email}
                            />
                        </>
                    ) )
                } 
            </div>
            <div className="tab-pane" id="addUser" role="tabpanel" aria-labelledby="add-user">
                <div className='text-center'>
                    <AddStudent />
                </div>
            </div>
            </div>
        </div>
    </div>
    );
}


export default TabContentUsers;
