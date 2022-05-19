import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import * as actionType from '../../constants/actionTypes';
import Header from '../Header/Header';
import ImageHeaderLite from '../ImageHeaderLite/ImageHeaderLite';
import UnderLineText from '../UnderLineText/UnderLineText';

import bg from '../../assets/images/bg-code.png';
import vector1 from '../../assets/images/vector1.svg';
import vector2 from '../../assets/images/vector2.svg';
import vector3 from '../../assets/images/vector3.svg';
import styles from './Home.module.css'
import Vector from '../Vector/Vector';
import Footer from '../Footer/Footer';
import CodEditor from '../CodEditor/CodEditor';


const Home = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  console.log(user.result);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const authState = useSelector((state) => state.auth);
  console.log(authState.isStudent);

  useEffect(() => {

    redirect();
  }, [location]);


  const redirect = () => {
    if(user === null || user === undefined){
      navigate('/auth');
    }
  }

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    navigate('/auth');

    setUser(null);
  };

  return (
    <div className='container-fluid'>
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
    </div>
  );
};

export default Home;
