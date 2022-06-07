import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import DeliverablesPage from '../components/DeliverablesPage/DeliverablesPage';
import { useParams } from "react-router-dom";
    


const Deliverables = () => {
  let { idCourse, idLab } = useParams();

  return (
    <>
        <Header />

        <DeliverablesPage idCourse={idCourse} idLab={idLab} />

        <Footer />
    </>
  )
}

export default Deliverables
