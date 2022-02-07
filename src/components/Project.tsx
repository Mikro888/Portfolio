import React, {useState} from 'react';
import classes from './Content.module.css';
import {NavLink} from "react-router-dom";
import {buttonType} from "../App";
import {headerPropsType} from "./Header";
import Scroll, {Link} from 'react-scroll'


const Project = (props: any) => {

    return (<>
    <a href={props.href}>
        <div className={classes.skillCon + ' ' + classes.projectCon}>
            <div className={classes.image} style={props.style}></div>
            <div className={classes.skillName}>
               <h3>{props.name}</h3>
            </div>
            <div className={classes.skillDescription}>Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
                Incidunt non quam tempora. Assumenda consequuntur doloremque
            </div>


        </div>
</a>

    </>);
}

export default Project;