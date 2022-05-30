import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import { useSelector, useDispatch } from 'react-redux';
import { getCourses } from '../actions/course';

import styles from '../assets/styles/Course.module.css';
import vector from '../assets/images/right-vector.svg'
import Section from '../components/Section/Section';

const Course = () => {
  let { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getCourses());
  }, [dispatch]);

  const courses = useSelector((state) => state.courses.filter((item) => item._id === id));
  const course = courses[0];

  console.log(course.labs)

  return (
    <>
        <Header />

        <div className="container-fliud mr-5 ml-5 mt-5 mb-5">
            <h5 className={styles.title}>
                <span className='mr-2'><img src={vector} alt="right-vector" /></span>
                {course.title}
            </h5>
            { course.labs &&
              course.labs.map((lab) => (
                <Section id={id} lab={lab} number={1 + course.labs.findIndex(object => { return object === lab;})} />
              ))
            }
            {
              !course.labs.length && 
              (
                <>
                  <Section number={1}/>
                  <Section number={2}/>
                  <Section number={3}/>
                  <Section number={4}/>
                </>
              )
            }
        </div>

        <Footer />
    </>
  )
}

export default Course
