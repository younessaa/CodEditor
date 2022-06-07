import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getLabs } from '../../actions/lab';
import TableTr from '../TableTr/TableTr';

const DeliverablesPage = ({ idCourse, idLab }) => {


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLabs());
        console.log(livrables)
    }, [dispatch]);


    const [livrables, setLivrables] = useSelector((state) => [state.labs.filter((lab) => lab.idCourse === idCourse && lab.idLab === idLab)]);

    return (
        <div className='container-fliud mt-3'>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Nom d'étudiant</th>
                        <th scope="col">Nom de livrable</th>
                        <th scope="col">Date</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>

                    { (livrables !== null && livrables !== undefined) &&
                        livrables.map((lab) => (
                            <TableTr key={lab._id} lab={lab}/>
                        ))
                    }
            
                </tbody>
                </table>
        </div>
    )
}

export default DeliverablesPage
