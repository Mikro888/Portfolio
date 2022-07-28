import React from 'react';
import classes from './Content.module.css'

//использование тега form по умолчанию приводит к перерисовке компонента
const Contacts=()=> {
    return (
        <div className={classes.contacts} id="contacts">
<h2>Contacts</h2>
            <div className={classes.contacts}>
                <p>w38@bk.ru</p>
                <p>916-333-55-65</p>
            </div>

        </div>
    );
}

export default Contacts;