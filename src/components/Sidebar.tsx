import React from 'react';
import classes from './Sidebar.module.css'
import Nav from "./Nav";
import Ava from "./Ava";
import {headerPropsType} from "./Header";


const Sidebar = (props: headerPropsType) => {
    return (
        <div className={classes.sideBar}>
            <Ava/>
            <Nav state={props.state} activeClass={props.activeClass} setActiveClass={props.setActiveClass}/>

        </div>
    );
}

export default Sidebar;