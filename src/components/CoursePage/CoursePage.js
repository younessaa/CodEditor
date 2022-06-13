import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getCourses, updateCourse } from '../../actions/course';

import styles from '../../assets/styles/Course.module.css';
import vector from '../../assets/images/right-vector.svg'
import Section from '../../components/Section/Section';

const CoursePage = ({id}) => {

  const [isStudent, setIsStudent] = useState(JSON.parse(localStorage.getItem('isStudent')));
  const courses = useSelector((state) => state.courses.filter((item) => item._id === id));
  const dispatch = useDispatch();
  useEffect(() => {
      if(!courses){

        dispatch(getCourses());
      }
  }, [dispatch]);
  
  const [course, setCourse] = useState(courses[0]);

  const [sections, setSections] = useState(parseInt(course.sections));
  const [labs, setLabs] = useState(course.labs);

  let { title, participant, sector} = course;

	const [formData, setFormData] = useState({ title, participant, labs, sector, sections });

  

  const getLabBySection = (index) => {
    if(labs.length > 0) {
      let i;
      for(i = 0; i < labs.length; i++) {
        if(labs[i].section === index)
          return labs[i];
      }
    }
    return null;
  }

  const sectionsDiv = () => {
    let i, div = [];
    for(i = 1; i <= sections; i++) {
      div.push(<Section key={i} course={course} setCourse={setCourse} labs={labs} setLabs={setLabs} id={id} lab={getLabBySection(i)} number={i}/>)
    }
    return div;
  }

  const addSection = async () => {
    setSections(sections + 1);
    setFormData((prev) => ({ ...prev, sections: sections + 1 }));
  }

  useEffect(() => {
    dispatch(updateCourse(id, formData));
  }, [sections, dispatch, id, formData]);

  

  return (
    <>
        <div className="container-fliud mr-5 ml-5 mt-5 mb-5">
            <div className='row'>
              <div className='col-9'>
                <h5 className={styles.title}>
                  <span className='mr-2'><img src={vector} alt="right-vector" /></span>
                  {course.title}
                </h5>
              </div>
              { !isStudent.result &&
                <div className='col-3'>
                  <button onClick={() => addSection()} className='btn btn-outline-primary btn-sm'>Ajouter une section</button>
                </div>
              }
            </div>

            {
              sectionsDiv()
            }  
        </div>
    </>
  )
}

export default CoursePage
