import React, {useState} from 'react';
import { Link} from 'react-router-dom';
import styles from './Footer.module.css';


import logo from '../../assets/images/codEditor-logo.png';

const Footer = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  return (
    <footer className={'text-center ' + styles.Footer}>
      <div className={styles.foo}>
        <div className='container-fliud'>
            <div className='row'>
                <div className='col-4'>
                    <Link to={'/'}>
                        <img className={styles.logo} src={logo} alt="CodEditor-logo" />
                    </Link>
                </div>
                {
                  (user !== null && user !== undefined) && 
                  <div className='col-4'>
                      <h5>Liens rapides</h5>
                      <Link to={'/editor'} className={styles.lien}>Éditeur</Link><br />
                      <Link to={'/courses'} className={styles.lien}>Cours</Link><br />
                  </div> 
                }
                <div className='col-4'>
                    <h5>Contactez-nous</h5>
                    <div className={styles.contact}>Télé : +212765435096</div>
                    <div className={styles.contact}>Email : contact@codeditor.ma</div>
                    <div className={styles.contact}>Adresse : Av. Allal El Fassi, rabat, maroc</div>
                </div>
            </div>
        </div>
      </div>
      <p>© 2022 CodEditor | Tous les droits sont réservés</p>
    </footer>
  )
}

export default Footer
