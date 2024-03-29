import React  from 'react';
import classes from './Content.module.css';


const Project = (props: any) => {
    return (<>
    <a href={props.href}>
        <div className={classes.skillCon + ' ' + classes.projectCon}>
            <div className={classes.image} style={props.style}></div>
            <div className={classes.skillName}>
               <h3>{props.name}</h3>
            </div>
            <div className={classes.skillDescription}>{props.description}
            </div>


        </div>
</a>

    </>);
}

export default Project;