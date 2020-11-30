/* 
This file is for development purposes only.
*/

import React from "react";
import {formCtx} from '../Contexts/FormContext'


const Test = () => {
    const [val, setVal] = React.useState("");

    const { state, update } = React.useContext(formCtx);

    const handleChange = (e: React.BaseSyntheticEvent) => {
        setVal(e.target.value);
        let { inputFields } = state 
        inputFields = {...inputFields, [e.target.name]: e.target.value}

        // updates the ctx object with the field name and values as key value pairs
        update({...state, inputFields});

    };

    return (
        <div>
            <p>Test Step One</p>
            <input type="text" value={val} name="hello" onChange={handleChange} />
        </div>
    );
};

const Test2 = () => {
    const [val, setVal] = React.useState("");

    const { state, update } = React.useContext(formCtx);
    

    const handleChange = (e: React.BaseSyntheticEvent) => {
        setVal(e.target.value);
        let { inputFields } = state 
        inputFields = {...inputFields, [e.target.name]: e.target.value}

        // updates the ctx object with the field name and values as key value pairs
        update({...state, inputFields});
    };

    return (
        <div>
            <p>Test Step Two</p>
            <input type="text" value={val} name="world" onChange={handleChange} />
        </div>
    );
};

const Test3 = () => {
    const [val, setVal] = React.useState("");

    const { state, update } = React.useContext(formCtx);

    const handleChange = (e: React.BaseSyntheticEvent) => {
        setVal(e.target.value);

        let { inputFields } = state 
        inputFields = {...inputFields, [e.target.name]: e.target.value}

        // updates the ctx object with the field name and values as key value pairs
        update({...state, inputFields});
    };

    return (
        <div>
            <p>Test Step Three</p>
            <input type="text" value={val} name="foo" onChange={handleChange} />
        </div>
    );
};

const Test4 = () => {
    const [val, setVal] = React.useState("");

    const { state, update } = React.useContext(formCtx);

    const handleChange = (e: React.BaseSyntheticEvent) => {
        setVal(e.target.value);

        let { inputFields } = state 
        inputFields = {...inputFields, [e.target.name]: e.target.value}

        // updates the ctx object with the field name and values as key value pairs
        update({...state, inputFields});
        
    };

    return (
        <div>
            <p>Test Step Four</p>
            <input type="text" value={val} name="null" onChange={handleChange} />
        </div>
    );
};

export { Test, Test2, Test3, Test4 }