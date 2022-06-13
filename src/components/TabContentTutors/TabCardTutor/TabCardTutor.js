import React, {useEffect} from 'react';
import styles from './TabCardUser.module.css';

import { deleteTutor } from '../../../actions/tutor';

import { useDispatch } from "react-redux";


function TabCardTutor({id, name, email}) {

    const dispatch = useDispatch();
    const deleteU = () => {
        dispatch(deleteTutor(id));
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
                    <pre>{email}</pre>
                </div>
                <div className='col-sm-2'>
                    <button onDoubleClick={ () => deleteU()} className={styles.deleteUser}>Delete</button>
                </div>
            </div>
        </div>
    );
}


export default TabCardTutor;
