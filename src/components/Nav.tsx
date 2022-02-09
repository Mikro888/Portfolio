import React from 'react';
import classes from './Nav.module.css';
import {buttonType} from "../App";
import  {Link} from 'react-scroll'


export const Nav = (props: any) => {
        const selectLink = (id: number) => {
            props.setActiveClass(props.activeClass.map((el: buttonType) => el.id === id ? {
                ...el,
                isActive: true,
            } : {
                ...el,
                isActive: false,
            }))
        }

        return (<>
            <div className={classes.nav}>
                <div className={classes.navContainer}>
                    {props.activeClass.map((el: buttonType) => {

                        return (
                            <Link
                                className={el.isActive ? props.activeProp : ''}
                                to={el.name.toLowerCase()}
                                onClick={() => {
                                    selectLink(el.id);
                                }} spy={true}
                                smooth={true}>{el.name}
                            </Link>)
                    })}
                </div>
            </div>
        </>);
    }

