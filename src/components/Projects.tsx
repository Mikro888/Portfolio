import React from 'react';
import classes from './Content.module.css'
import Project from './Project'
import socialImage from '../images/social.jpg'
import todoImage from '../images/ЕВ.jpeg'
import skillRealImage from '../images/UNADJUSTEDNONRAW_thumb_54d.jpg'
import rgbImage from '../images/rgb.jpg'
import snakeImage from '../images/istockphoto-1363586427-612x612.jpg'


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
    const guessImage = {
        backgroundImage: `url(${rgbImage})`
    }
    const snake = {
        backgroundImage: `url(${snakeImage})`
    }
    return (
        <div className={classes.skills} id={'projects'}>
            <h2>Projects</h2>
            <Project
                style={socialNetwork}
                name={'Social Network'}
                href={'https://mikro888.github.io/Social-Network/'}
                description={'Social network React + Redux + Typescript application with API'}
            />
            <Project
                style={todoList}
                name={'To Do List'}
                href={'https://mikro888.github.io/simpletodo/'}
                description={'Simple todolist React + Typescript application without API'}
            />
            <Project name={'SkillReal'}
                     style={skillReal}
                     href={'http://www.skillreal.ru/index.html'}
                     description={'My very first web site created with bootstrap'}
            />
            <Project name={'JS Game'}
                     style={guessImage}
                     href={'https://mikro888.github.io/guessRGB/'}
                     description={'Guess RGB color game'}
            />
            <Project name={'JS Snake'}
                     style={snake}
                     href={'https://mikro888.github.io/snake/'}
                     description={'Classic snake game'}/>
        </div>
    );
}

export default Projects;