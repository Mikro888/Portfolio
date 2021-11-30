import React from 'react';
import classes from './Content.module.css'
import Project from "./Project";


const Projects = () => {
    return (
        <div className={classes.skills} id={'projects'}>
            <h2>Projects</h2>
            <Project name={'Social Network'}/>
            <Project name={'To Do List'}/>
            <Project name={'SkillReal'}/>
        </div>
    );
}

export default Projects;