import React from 'react';
import classes from './Content.module.css'
import { Switch} from "@mui/material";
import faceImage from '../images/mainImage.png'






const Main=(props:any)=> {

    return (
        <div className={classes.main} id={'main'}>
            <div className={classes.switchButton}>change colors
                <Switch onChange={props.handleChange} defaultChecked size={"small"} />
            </div>

<div className={classes.mainCon}>
            <div className={classes.description}>
              <p>Hi! My name is Mikhail Romanov, I am a frontend developer who is passionate about JavaScript. 
                  My main tech stack is <span>React-Redux</span> combination which allows to build fast interactive web applications.</p>
                <a href={'https://hh.ru/resume/fdc2b1b0ff0833659f0039ed1f566559775146'}><button>My CV</button></a>
            </div>
            <div className={classes.card}>
                <img src={faceImage} alt="my smiling face"/>
            </div>

</div>


        </div>
    );
}

export default Main;
