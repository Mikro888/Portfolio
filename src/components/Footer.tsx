import React from 'react';
import classes from './Footer.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faFacebookF,
    faInstagram,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

const Footer = (props: any) => {
    let today = new Date(); // Mon Nov 23 2020 15:23:46 GMT+0300 (Москва, стандартное время)
    let year = today.getFullYear();

    return (
        <div className={classes.footer} style={props.footerColor}>
            {/*<div className={classes.socialIcon}>*/}
            {/*    <div className={classes.socialIcon}><FontAwesomeIcon*/}
            {/*        icon={faFacebookF}/></div>*/}
            {/*    <div className={classes.socialIcon}><FontAwesomeIcon*/}
            {/*        icon={faInstagram}/></div>*/}
            {/*    <div className={classes.socialIcon}><FontAwesomeIcon*/}
            {/*        icon={faLinkedin}/></div>*/}

            {/*</div>*/}
            <div className={classes.signature}>
                <p> Mikhail Romanov &#169; {year} </p>

            </div>

        </div>
    );
}

export default Footer;