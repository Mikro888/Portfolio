import React, {useState} from 'react';
import classes from './Content.module.css';
import {NavLink} from "react-router-dom";
import {buttonType} from "../App";
import {headerPropsType} from "./Header";
import Scroll, {Link} from 'react-scroll'



const Project = (props:any) => {

    return (<>
 <div className={classes.skillCon}>
     <div className={classes.skillName}>
         <a href={props.href}><h3>{props.name}</h3></a>
     </div>
     <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Incidunt non quam tempora. Assumenda consequuntur doloremque
       </div>

 </div>


    </> );
}

export default Project;