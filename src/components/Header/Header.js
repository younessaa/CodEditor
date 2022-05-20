import React, {useState} from 'react';
import logo from '../../assets/images/codEditor-logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import * as actionType from '../../constants/actionTypes';

import styles from './Header.module.css';
import './Header.css';

const Header = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isStudent, setIsStudent] = useState(JSON.parse(localStorage.getItem('isStudent')));

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
    
        navigate('/auth');
    
        setUser(null);
        setIsStudent(null);
    };

    return (
    <div className={styles.Header}>
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link to={'/'} className="navbar-brand " >
                    <img className={styles.logo} src={logo} alt="CodEditor-logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    { user !== null && user !== undefined ? <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink to={'/'} className="nav-link">Accueil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/editor'} className="nav-link">Éditeur</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/course'} className="nav-link">Cours</NavLink>
                        </li>
                        <li >
                            <NavLink to={'/labs'} className="nav-link tps">TPs</NavLink>
                        </li>
            
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {user.result.name.toUpperCase()}
                            </button>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            {isStudent && <Link to={'/mylabs'} className="dropdown-item" >Mes TPs</Link>} 
                            <Link to={'/profil'} className="dropdown-item" >Profil</Link><hr/>
                            <button className="dropdown-item" onClick={logout} >Se déconnecter</button>
                            </div>
                        </li>
                    </ul> : 

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={'/auth'} className={styles.login}>S'identifier</Link>
                        </li>
                    </ul>
                    }
                        
                </div>
            </nav>
        </header>
    </div>
    )
}

export default Header