import React, {useEffect} from 'react';
import styles from './TabContentUsers.module.css';
import './TabContentUsers.css';
import TabCardLab from './TabCardLab/TabCardLab';

import { getLabs } from '../../actions/lab';

import { useDispatch, useSelector } from "react-redux";

function TabContentLabs() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLabs());
    }, [dispatch]);

    const labs = useSelector((state) => state.labs);
    console.log(labs);



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
                        Student Name
                    </div>
                    <div className='col-sm-2'>
                        Lab Name
                    </div>
                    <div className='col-sm-2'>
                        Course ID
                    </div>
                    <div className='col-sm-2'>
                        Lab ID
                    </div>
                    <div className='col-sm-2'>
                    </div>
                </div>
                {
                    labs.length && 
                    labs.map( (lab) => (
                        <>
                            <div className={styles.TabBorder}></div>
                            <TabCardLab 
                                id={lab._id} 
                                name={lab.name}
                                tp={lab.name} 
                                idCourse={lab.idCourse}
                                idLab={lab.idLab}
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


export default TabContentLabs;
