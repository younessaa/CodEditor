import React from 'react';
import styles from './Vector.module.css';

const Vector = (props) => (
  <>
    <img className={styles.image} src={props.image} alt="Coder en ligne"/>
    <p className={styles.text}>{props.text}</p>
  </>
);

export default Vector;