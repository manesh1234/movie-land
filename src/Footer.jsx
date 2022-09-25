import React from "react"
import styles from './App.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <h1>Made with <img src="https://img.icons8.com/color/35/000000/filled-like.png" /> by <a href="https://www.linkedin.com/in/manesh-ram/" target={'_blank'}>Manesh Ram</a></h1>
        </div>
    )
}

export default Footer;

