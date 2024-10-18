import React from 'react';
import styles from './styles/Background.module.css';

function Background({ src, alt, className }) {
  return (
    <div 
        className={`${className} ${styles.background__wrapper}`}
        style={{ backgroundImage: `url(${src})` }} 
        aria-label={alt} 
    >
        <div
            className={styles.background}
        />
    </div>
  );
}

export default Background;
