import React from 'react';

import styles from './CourseCard.module.css';

const CourseCard = ({title}) => {
  return (
    <div className={styles.CourseCard}>
      <div className={styles.colored}>
         <br /> 
         <br /> 
         <br /> 
      </div>
      <div className={'text-center ' + styles.title}>{title}</div>
    </div>
  )
}

export default CourseCard
