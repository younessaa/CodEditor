import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCourse, getCourses} from '../../actions/course';

import styles from './Section.module.css';
import pdfImage from '../../assets/images/pdf.svg'
import PdfForm from '../PdfForm/PdfFrom';
import { Link } from 'react-router-dom';

const Section = ({labs, setLabs, course, setCourse, id, lab, number}) => {

  const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCourses());
	}, [dispatch]);

  const [pdf, setPdf] = useState(lab);
  const [deleted, setDeleted] = useState(false);

  const [isStudent, setIsStudent] = useState(JSON.parse(localStorage.getItem('isStudent')));


  const deletePdf = () => {
    console.log(pdf._id)
    setLabs(labs.filter((lab) => lab._id !== pdf._id));
    
    setDeleted(true)

    setCourse({ ...course, ["labs"]: labs.filter((lab) => lab._id !== pdf._id)})
  }

  useEffect(() => {
    if(deleted) {
      setPdf(null);
    }
    dispatch(updateCourse(id, course));
	}, [id, course]);

  return (
    <div className={styles.Section + " clearfix"}>
        <h6 className={styles.title}>Section {number}</h6>
        <div className={styles.tp}>
            { (pdf !== null && pdf !== undefined && pdf.path !== "" && pdf.name !== "") ?
              <div className='row'>
                <div className={"col-6 " + styles.pdf}>
                  <a className={styles.link} href={pdf.path} target='_blank'><img  src={pdfImage} alt="pdf-icon" /> <span className='ml-3 mr-5'>{pdf.name}</span></a>
                </div>
                <div className='col-3'>{ isStudent.result ? <Link className={styles.link} to={`/courses/${id}/labs/${pdf._id}`}><button type="button" className={"btn " + styles.realiser}>Réaliser</button></Link> : <button onClick={deletePdf} className="btn btn-outline-danger">Supprimer</button>}</div>
              </div>
              : isStudent.result ? <></> :
              <div className='p-1'>
                <PdfForm course={course} setCourse={setCourse} idCourse={id} number={number} pdf={pdf} setPdf={setPdf}/>
              </div>
            }
        </div>
        {
          (lab !== null && lab !== undefined && !isStudent.result) && 
          <Link className={styles.link} to={`/courses/${id}/labs/${lab._id}/deliverables`}>
            <button type="button" className="btn btn-outline-dark float-right">
              Voir Les livrables
            </button>
          </Link>
        }
    </div>
  )
}

export default Section
