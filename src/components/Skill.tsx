import React, {useState} from 'react';
import classes from './Content.module.css';
import {
    buildStyles,
    CircularProgressbarWithChildren
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Skill = (props: any) => {

    return (<>
        {/*<div className={classes.skillCon}>*/}
        {/*    <div className={classes.skillName}><h3>{props.name}</h3></div>*/}
        {/*    <div className={classes.skillImage}>*/}
        {/*        <img src={props.src}/>*/}
        {/*    </div>*/}
        {/*    <div className={classes.skillDescription}>Lorem ipsum dolor sit*/}
        {/*        amet, consectetur adipisicing elit.*/}
        {/*        Incidunt non quam tempora. Assumenda consequuntur doloremque*/}
        {/*    </div>*/}
        <div style={{width: '130px', borderRadius: '50%', margin: '10px'}}>
            <CircularProgressbarWithChildren value={props.value} background
                                             backgroundPadding={3}
                                             styles={buildStyles({
                                                 // pathColor: "#3FD2C7",
                                                 // trailColor: "wheat"
                                                 backgroundColor: "#3e98c7",
                                                 pathColor: "hsla(100, 100%, 100%, 0.85)",
                                                 trailColor: "transparent"
                                             })}>
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <img
                    style={{width: 30, marginTop: 5, border: '2px solid white'}}
                    src={props.src}
                />
                <div style={{fontSize: 14, marginTop: -5, color: "white"}}>
                    <h3>{props.name}</h3>
                </div>
            </CircularProgressbarWithChildren>
        </div>

        {/*</div>*/}


    </>);
}

export default Skill;