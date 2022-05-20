import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../components/Header/Header';
import ImageHeaderLite from '../components/ImageHeaderLite/ImageHeaderLite';
import UnderLineText from '../components/UnderLineText/UnderLineText';

import bg from '../assets/images/bg-code.png';
import vector1 from '../assets/images/vector1.svg';
import vector2 from '../assets/images/vector2.svg';
import vector3 from '../assets/images/vector3.svg';
import styles from '../assets/styles/Home.module.css';
import Vector from '../components/Vector/Vector';
import Footer from '../components/Footer/Footer';
import CodEditor from '../components/CodEditor/CodEditor';


const Home = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const location = useLocation();
  const navigate = useNavigate();

  const authState = useSelector((state) => state.auth);
  console.log(authState.isStudent);

  useEffect(() => {

    redirect();
  }, [location]);


  const redirect = () => {
    if(user === null || user === undefined){
      // navigate('/auth');
    }
  }


  return (
    <>
      <Header />
      
      <ImageHeaderLite image={bg} title="Commencez votre voyage de codage dès maintenant !"/>
      
      <UnderLineText text="CodEnligne Avantages"/>

      <div className={'container-fluid ' + styles.bg}>
        <div className='row justify-content-md-center'>
          <div className='col col-lg-4'>
            <Vector image={vector1} text="Coder en ligne" />
          </div>
          <div className='col col-lg-4'>
            <Vector image={vector2} text="Collaborer avec vos tuteurs" />
          </div>
          <div className='col col-lg-4'>
            <Vector image={vector3} text="Utiliser plusieurs langages de programmation" />
          </div>
        </div>
      </div>

      <UnderLineText text="Utiliser CodEnligne Maintenant"/>
      <CodEditor />
      <Footer />
    </>
  );
};

export default Home;
