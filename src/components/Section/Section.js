import React from 'react';

import styles from './Section.module.css';
import pdf from '../../assets/images/pdf.svg'

const Section = ({number}) => {
  return (
    <div className={styles.Section}>
        <h6 className={styles.title}>Section {number}</h6>
        <div className={styles.tp}>
            <span className={styles.pdf}>
                <img  src={pdf} alt="pdf-icon" /> <span className='ml-3 mr-5'>TP {number}</span>
            </span>
            <button type="button" className={"btn " + styles.realiser}>Réaliser</button>
        </div>
    </div>
  )
}

export default Section
