import React from 'react';
import classes from './Content.module.css'
import Main from "./Main";
import Skills from "./Skills";
import Projects from "./Projects";
import Contacts from "./Contacts";


const Content = () => {
    return (
        <div className={classes.content}>

            <Main />
            <Skills/>
            <Projects/>
            <Contacts />
        </div>
    );
}

export default Content;