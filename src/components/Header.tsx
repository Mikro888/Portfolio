import React from 'react';
import classes from './Header.module.css'

import {stateType} from "../App";
import {Nav} from "./Nav";

export type headerPropsType = {
    state: stateType
    activeClass: stateType
    setActiveClass: (Array: stateType) => void
}

const Header = (props: any) => {
    return (
        <div className={classes.header} style={props.headerColor}>
            <div className={classes.hamburger}>
                <Nav state={props.state} activeClass={props.activeClass} setActiveClass={props.setActiveClass} mainColor={props.mainColor}/>
            </div>
        </div>
    );
}

export default Header;