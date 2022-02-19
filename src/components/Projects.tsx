import React from 'react';
import classes from './Content.module.css'
import Project from './Project'
import socialImage from '../images/social.jpg'
import todoImage
    from '../images/ЕВ.jpeg'
import skillRealImage from '../images/UNADJUSTEDNONRAW_thumb_54d.jpg'



const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${socialImage})`
    }

    const todoList = {
        backgroundImage: `url(${todoImage})`
    }
    const skillReal = {
        backgroundImage: `url(${skillRealImage})`
    }

    return (
        <div className={classes.skills} id={'projects'}>
            <h2>Projects</h2>
            <Project
                style={socialNetwork}
                name={'Social Network'}
                href={'https://mikro888.github.io/Social-Network/'}/>
            <Project
                style={todoList}
                name={'To Do List'}/>
            <Project name={'SkillReal'}
                     style={skillReal}
                     href={'http://www.skillreal.ru/index.html'}/>
            <Project name={'JS Game'}
                     style={skillReal}
                     href={'https://mikro888.github.io/guessRGB/'}/>
        </div>
    );
}

export default Projects;