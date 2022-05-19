import React from 'react';
import styles from './ImageHeaderLite.module.css';

const ImageHeaderLite = (props) => (
  <div className={styles.ImageHeaderLite} style = {{backgroundImage: `url(${props.image})`}}>
    <div className="container-md">
      <div className={styles.divImage}></div>
      <h4>{props.title}</h4>
    </div> 
  </div>
);




export default ImageHeaderLite;