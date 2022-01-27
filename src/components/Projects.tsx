import React from 'react';
import classes from './Content.module.css'
import Project from "./Project";


const Projects = () => {
    return (
        <div className={classes.skills} id={'projects'}>
            <h2>Projects</h2>
            <Project name={'Social Network'} href={'https://mikro888.github.io/Social-Network/'}/>
            <Project name={'To Do List'}/>
            <Project name={'SkillReal'} href={'http://www.skillreal.ru/index.html'}/>
        </div>
    );
}

export default Projects;