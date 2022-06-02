import React from 'react';

import styles from './CourseLable.module.css';

const CourseLable = ({course}) => {
  return (
    <div className={styles.courseCard + " row text-center"}>
        <div className='col-6 ml-4 mt-3'>
            {course.title}
        </div>
        <div className={'col-3'}></div>
        <div className={'col-2 ' + styles.right}>
            {">"}
        </div>
    </div>
  )
}

export default CourseLable
