import React from 'react';
import { useParams } from "react-router-dom";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import CoursePage from '../components/CoursePage/CoursePage';

const Course = () => {
  let { id } = useParams();

  return (
    <>
      <Header />

      <CoursePage id={id}/>

      <Footer />
    </>
  )
}

export default Course
