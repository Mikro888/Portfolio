import React from 'react';
import classes from './Header.module.css'
import Nav from "./Nav";
import {stateType} from "../App";

export type headerPropsType = {
    state: stateType
    activeClass: stateType
    setActiveClass: (Array: stateType) => void
}

const Header = (props: headerPropsType) => {
    return (
        <div className={classes.header}>
            <div className={classes.hamburger}>
                <Nav state={props.state} activeClass={props.activeClass} setActiveClass={props.setActiveClass}/>
            </div>
        </div>
    );
}

export default Header;