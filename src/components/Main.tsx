import React from 'react';
import classes from './Content.module.css'


const Main=()=> {
    return (
        <div className={classes.main} id={'main'}>
    <div className={classes.switchButton}></div>
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