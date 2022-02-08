import React, {useState} from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";
import {buttonType} from "../App";
import {headerPropsType} from "./Header";
import Scroll, {Link} from 'react-scroll'


const Nav = (props: headerPropsType) => {


    const selectLink = (id: number) => {
        props.setActiveClass(props.activeClass.map((el: buttonType) => el.id === id ? {
            ...el,
            isActive: true
        } : {
            ...el,
            isActive: false
        }))
    }

    return (<>
        <div className={classes.nav}>
            <div className={classes.navContainer}>
            {props.activeClass.map((el: buttonType) => {
                return (
                    <Link className={el.isActive ? classes.active : ''}
                          to={el.name.toLowerCase()}
                          onClick={() => selectLink(el.id)} spy={true}
                          smooth={true}>{el.name} </Link>)
            })}
            </div>
        </div>


    </>);
}

export default Nav;