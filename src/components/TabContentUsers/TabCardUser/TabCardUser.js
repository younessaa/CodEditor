import React, {useEffect} from 'react';
import styles from './TabCardUser.module.css';

import { getStudents, deleteStudent } from '../../../actions/student';

import { useDispatch } from "react-redux";


function TabCardUser({id, name, email, sector}) {

    const dispatch = useDispatch();
    const deleteU = () => {
        dispatch(deleteStudent(id));
    }

    return (
        <div className={styles.TabCardUser}>
            <div className='row text-center'>
                <div className='col-sm-2'>
                    <pre>{id}</pre>
                </div>
                <div className='col-sm-2'>
                    <pre>{name}</pre>
                </div>
                <div className='col-sm-2'>
                    <pre>{sector}</pre>
                </div>
                <div className='col-sm-2'>
                    <pre>{email}</pre>
                </div>
                <div className='col-sm-2'>
                    <button onDoubleClick={ () => deleteU()} className={styles.deleteUser}>Delete</button>
                </div>
            </div>
        </div>
    );
}


export default TabCardUser;
