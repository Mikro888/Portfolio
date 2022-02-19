import React, {useState} from 'react';

import './App.css';
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter} from "react-router-dom";
import classes from "./components/Nav.module.css";

export type stateType = Array<buttonType>

export type buttonType = {
    id: number,
    name: string,
    isActive: boolean
}

function App() {

    const state = [
        {id: 1, name: 'Main', isActive: true},
        {id: 2, name: 'Skills', isActive: false},
        {id: 3, name: 'Projects', isActive: false},
        {id: 4, name: 'Contacts', isActive: false},
    ]
    const colorState = {
        sideBarColor: {},
        mainColor: {},
        bodyColor: 'warmBodyColor',
        activeProp: classes.activeCold,
        headerColor: {}
    }
    const warmState = {
        sideBarColor: {backgroundColor: '#f4a261'},
        mainColor: {backgroundColor: '#e9c46a', color: '#3E0606'},
        bodyColor: 'coldBodyColor',
        activeProp: classes.activeWarm,
        headerColor: {backgroundColor: '#e76f51'}
    }
    const coldState = {
        sideBarColor: {},
        mainColor: {},
        bodyColor: 'warmBodyColor',
        activeProp: classes.activeCold,
        headerColor: {}
    }
    const [colorConst, setColorConst] = useState(false)
    const [initialColor, setColorState] = useState(colorState)
    const handleChange = () => {
        if (!colorConst) {
            setColorState(warmState);
            setColorConst(true)
        } else {
            setColorState(coldState)
            setColorConst(false)
        }
    }

    const [activeClass, setActiveClass] = useState(state)
    return (
        <BrowserRouter>

            <div className={initialColor.bodyColor}>
                <div className={'mainContainer'}>
                    <Header state={state} activeClass={activeClass}
                            setActiveClass={setActiveClass}
                            headerColor={initialColor.headerColor}
                    mainColor={warmState.mainColor.backgroundColor}
                    />
                    {/*headerColor={initialColor.bodyColor}/>*/}
                    <div className={'App'}>
                        <Sidebar state={state} activeClass={activeClass}
                                 setActiveClass={setActiveClass}
                                 mainColor={initialColor.sideBarColor}
                                 activeProp={initialColor.activeProp}
                        />
                        <Content handleChange={handleChange}
                                 contentColor={initialColor.mainColor}/>
                    </div>
                    <Footer footerColor={initialColor.sideBarColor}/>
                </div>
            </div>

        </BrowserRouter>
    );
}

export default App;
