import React, {useState} from 'react';

import './App.css';
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter} from "react-router-dom";

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
        {id: 4, name: 'Contact', isActive: false},
        ]
    const [activeClass, setActiveClass] = useState(state)
    return (
        <BrowserRouter>
            <div className={'mainContainer'}>
                <Header state={state} activeClass={activeClass} setActiveClass={setActiveClass}/>
                <div className={'App'}>
                    <Sidebar state={state} activeClass={activeClass} setActiveClass={setActiveClass}/>
                    <Content/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
