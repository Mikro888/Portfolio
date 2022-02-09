import React from 'react';
import classes from './Content.module.css'
import { Switch} from "@mui/material";


const Main=(props:any)=> {

    return (
        <div className={classes.main} id={'main'}>
            <div className={classes.switchButton}>change colors
                <Switch onChange={props.handleChange} defaultChecked size={"small"} />
            </div>
<div className={classes.mainCon}>
            <div className={classes.description}>
                <div>Mikhail Romanov</div>
                <div>Front end developer</div>
            </div>
            <div className={classes.card}>card</div>
</div>
        </div>
    );
}

export default Main;