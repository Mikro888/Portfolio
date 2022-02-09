import React from 'react';
import classes from './Sidebar.module.css'
// import Nav from "./Nav";
import Ava from "./Ava";
import {headerPropsType} from "./Header";
import {Nav} from "./Nav";


const Sidebar = (props: any) => {

    return (
        <div className={classes.sideBar} style={props.mainColor}>
            <Ava/>

            <Nav state={props.state} activeClass={props.activeClass} setActiveClass={props.setActiveClass} activeProp={props.activeProp}/>
        </div>
    );
}

export default Sidebar;