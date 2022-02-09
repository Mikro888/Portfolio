import React from 'react';
import classes from './Content.module.css'


const Contacts=()=> {
    return (
        <div className={classes.skills} id="contacts">
<h2>Contacts</h2>
            <div className={classes.formContainer}>
                <form action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                <button type={"submit"}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;