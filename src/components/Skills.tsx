import React from 'react';
import classes from './Content.module.css'
import Skill from "./Skill";


const Skills = () => {
    return (
        <div className={classes.skills} id={'skills'}>
            <h2>My skills</h2>
            <Skill name={'HTML'}/>
            <Skill name={'CSS'}/>
            <Skill name={'JS'}/>
            <Skill name={'TypeScript'}/>
            <Skill name={'React'}/>
        </div>
    );
}

export default Skills;