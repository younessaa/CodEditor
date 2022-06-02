import React from 'react';
import { useParams } from "react-router-dom";

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import LabPage from '../components/LabPage/LabPage';

const Lab = () => {
  let { id } = useParams();
  return (
    <>
      <Header />

      <LabPage id={id} />

      <Footer />
    </>
  )
}

export default Lab
