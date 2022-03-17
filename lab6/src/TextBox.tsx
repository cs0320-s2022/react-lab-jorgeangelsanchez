import React from 'react';
import './App.css';

function TextBox(props : any) {
    const myHandler = (event: any) => {props.change(event.target.value)}
    return (
        <form>
            <label>{props.label}
                <input type="text" onChange={myHandler}/>
            </label>
        </form>
    );
}

export default TextBox;