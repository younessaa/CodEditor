import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import styles from '../assets/styles/Course.module.css';
import vector from '../assets/images/right-vector.svg'
import Section from '../components/Section/Section';

const Course = () => {
  return (
    <>
        <Header />

        <div className="container-fliud mr-5 ml-5 mt-5 mb-5">
            <h5 className={styles.title}>
                <span className='mr-2'><img src={vector} alt="right-vector" /></span>
                JAVA & POO AVANCÉE
            </h5>
            <Section number={1} />
            <Section number={2} />
            <Section number={3} />
            <Section number={4} />
        </div>

        <Footer />
    </>
  )
}

export default Course
