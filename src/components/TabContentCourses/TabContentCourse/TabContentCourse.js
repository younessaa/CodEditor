import React, {useEffect} from 'react';
import styles from './TabCardUser.module.css';

import { deleteCourse } from '../../../actions/course';

import { useDispatch } from "react-redux";


function TabCardTutor({id, name, idTutor, participant}) {

    const dispatch = useDispatch();
    const deleteU = () => {
        dispatch(deleteCourse(id));
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
                    <pre>{idTutor}</pre>
                </div>
                <div className='col-sm-2'>
                    <pre>{participant}</pre>
                </div>
                <div className='col-sm-2'>
                    <button onDoubleClick={ () => deleteU()} className={styles.deleteUser}>Delete</button>
                </div>
            </div>
        </div>
    );
}


export default TabCardTutor;
