import React from 'react';
import styles from './UnderLineText.module.css';

const UnderLineText = (props) => (
  <div className='text-center'>
    <div className={styles.UnderLineText}>
        <h5> {props.text} </h5>
    </div>
  </div>
);


export default UnderLineText;
