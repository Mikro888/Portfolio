import React from 'react';
import classes from './Content.module.css'

//использование тега form по умолчанию приводит к перерисовке компонента
const Contacts=()=> {
    return (
        <div className={classes.skills} id="contacts">
<h2>Contacts</h2>
            <div className={classes.formContainer}>


                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                <button type={"submit"} >Submit</button>

            </div>
        </div>
    );
}

export default Contacts;