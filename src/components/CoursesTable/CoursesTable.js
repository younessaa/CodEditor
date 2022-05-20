import React from 'react';
import CourseCard from '../CourseCard/CourseCard';
import { Link } from 'react-router-dom';

import styles from './CoursesTable.module.css'

const CoursesTable = () => {


    const courses = [{id: "1", title: "JAVA", idTutor: "abahba"}, 
    {id: "2", title: "JAVA", idTutor: "abahba"}, 
    {id: "3", title: "JAVA", idTutor: "abahba"}, 
    {id: "4", title: "JAVA", idTutor: "abahba"}]

  return (
    <div className={styles.courses}>
      <h5 className={'pb-2 ' + styles.title}>VUE D'ENSEMBLE DES COURS</h5>
      <div>
          <div className='row'>
            {
                courses.map((course) => (
                        <div key={course.id} className='col-md-5 mb-3 mr-2 ml-4'>
                            <Link className={styles.link} to={`/course/${course.id}`}><CourseCard title={course.title}/></Link>
                        </div>
                    )
                )
            }
          </div>
      </div>
    </div>
  )
}

export default CoursesTable
