import React from 'react';
import { Link } from 'react-router';
import styles from "../pages/NotFound.module.css";

function NotFound() {
    return (
        <div className ={styles.notFoundPage}>
            <p className ={styles.notFoundParagraph}>Page not found. Please try again.</p>
            <Link to="/" className={styles.notFoundLink}>
            Return To The Homepage
            </Link>
        </div>
    );
}
export default NotFound;
