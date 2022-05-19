import React from 'react';
import { Link} from 'react-router-dom';
import styles from './Footer.module.css';


import logo from '../../assets/images/codEditor-logo.png';

const Footer = () => {
  return (
    <footer className='text-center'>
      <div className={styles.Footer}>
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <Link to={'/'}>
                        <img className={styles.logo} src={logo} alt="CodEditor-logo" />
                    </Link>
                </div>
                <div className='col-4'>
                    <h5>Liens rapides</h5>
                    <Link to={'/editeur'} className={styles.lien}>Éditeur</Link><br />
                    <Link to={'/cours'} className={styles.lien}>Cours</Link><br />
                    <Link to={'/tps'} className={styles.lien}>TPs</Link>
                </div>
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
