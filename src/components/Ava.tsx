import React from 'react';
import classes from './Ava.module.css'
import face from '../pic/face.png'



const Ava=()=> {
    return (
        <div className={classes.ava}>
            <img src={face} alt="myFace"/>
        </div>
    );
}

export default Ava;