import React from 'react';
import classes from './Content.module.css'
import { Switch} from "@mui/material";
import faceImage from '../images/mainImage.png'






const Main=(props:any)=> {

    return (
        <div className={classes.main} id={'main'}>
            <div className={classes.switchButton}>change colors
                <Switch onChange={props.handleChange} defaultChecked size={"small"} />
            </div>

<div className={classes.mainCon}>
            <div className={classes.description}>
              <p>Привет!
                  Я Михаил Романов, начинающий фронтенд разработчик, увлеченный <span>JavaScript</span>.
                Мой основной стек - связка <span>React-Redux</span>, позволяющая создавать быстрые интерактивные web-приложения.
                  Если вы ищете разработчика, готового компенсировать недостаток опыта усердием,
                  трудолюбием и живым интересом - буду рад присоединиться к вашей команде! </p>
                <a href={'https://hh.ru/resume/fdc2b1b0ff0833659f0039ed1f566559775146'}><button>Мое резюме</button></a>
            </div>
            <div className={classes.card}>
                <img src={faceImage} alt="my smiling face"/>
            </div>

</div>


        </div>
    );
}

export default Main;