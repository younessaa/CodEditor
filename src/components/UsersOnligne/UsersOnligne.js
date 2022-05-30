import React from 'react';

import styles from "./UsersOnligne.module.css";
import avatar from '../../assets/images/profil-avatar.png';

const UsersOnligne = ({users}) => {

  return (
    <div className={styles.users}>
        <h5 className={'mb-2 ' + styles.title}>UTILISATEURS EN LIGNE</h5>
        <h6 className={'mb-3 ' + styles.title2}>{users.length} utilisateurs en ligne (5 dernières minutes)</h6>
      
        <div className='justify-content-md-center'>
        { users ? 
            users.map((user) => (
                    <div key={user.id} className='mb-2 ml-4'>
                        <img className={styles.avatar} src={avatar} alt='avatar'/>
                        <h6 className={styles.name}>{user.name.toUpperCase()}</h6>
                    </div>
                )
            ) : null
        }
        </div>
    </div>
  )
}

export default UsersOnligne
