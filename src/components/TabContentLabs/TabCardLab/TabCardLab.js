import React, {useEffect} from 'react';
import styles from './TabCardUser.module.css';

import { deleteLab } from '../../../actions/lab';

import { useDispatch } from "react-redux";


function TabCardLab({id, name, idCourse, tp, idLab}) {

    const dispatch = useDispatch();
    const deleteU = () => {
        dispatch(deleteLab(id));
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
                    <pre>{tp}</pre>
                </div>
                <div className='col-sm-2'>
                    <pre>{idCourse}</pre>
                </div>
                <div className='col-sm-2'>
                    <pre>{idLab}</pre>
                </div>
                <div className='col-sm-2'>
                    <button onDoubleClick={ () => deleteU()} className={styles.deleteUser}>Delete</button>
                </div>
            </div>
        </div>
    );
}


export default TabCardLab;
