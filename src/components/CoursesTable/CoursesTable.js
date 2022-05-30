import React, { useState, useEffect } from 'react';
import CourseCard from '../CourseCard/CourseCard';
import { Link } from 'react-router-dom';

import styles from './CoursesTable.module.css'
import FormAddCourse from '../FromAddCourse/FormAddCourse';

import { useSelector, useDispatch } from 'react-redux';
import { getCourses } from '../../actions/course';

const CoursesTable = () => {

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getCourses());
  }, [dispatch]);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [isStudent, setIsStudent] = useState(JSON.parse(localStorage.getItem('isStudent')));
  const idUser = user.result._id;
  const courses_list = useSelector((state) => state.courses);

  const courses = isStudent.result ? courses_list.filter((course) => {
    if(course.participant.includes(idUser)) {
      return course;
    }
  }) :
  courses_list.filter((course) => {
    if(course.idTutor === idUser) {
      return course;
    }
  });

  

  console.log(courses_list)


  return (
    <div className={styles.courses}>
      <h5 className={'pb-2 ' + styles.title}>VUE D'ENSEMBLE DES COURS</h5>
      <div className='text-center'>
          { courses.length ?
            <div className='row'>
          { 
              courses.map((course) => (
                      <div key={course._id} className='col-md-5 mb-3 mr-2 ml-4'>
                          <Link className={styles.link} to={`/courses/${course._id}`}><CourseCard title={course.title}/></Link>
                      </div>
                  )
              )
            }
          </div>
          :
          <div className="text-center">
            <div className="spinner-border text-secondary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
          }
      </div>
      <div className='text-center'>
            {!isStudent.result && <FormAddCourse />} 
      </div>
    </div>
  )
}

export default CoursesTable
