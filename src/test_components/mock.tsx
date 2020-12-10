/* 
This file is for development purposes only.
*/

import * as React from "react";
import { useMultiStep } from "../utils/useMultiStep";

const Test = () => {
    const [val, setVal] = React.useState("");

    const { updateVals } = useMultiStep();

    const handleChange = (e: React.BaseSyntheticEvent) => {
        setVal(e.target.value);
        updateVals(e.target.name, e.target.value);
    };

    const handleSubmit = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>Test Step One</p>
            <label>Hello</label>
            <input type="text" value={val} name="hello" onChange={handleChange} />
        </form>
    );
};

const Test2 = () => {
    const [val, setVal] = React.useState("");

    const { updateVals } = useMultiStep();

    const handleChange = (e: React.BaseSyntheticEvent) => {
        setVal(e.target.value);
        updateVals(e.target.name, e.target.value);
    };
    const handleSubmit = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>Test Step Two</p>
            <label>World</label>
            <input type="text" value={val} name="world" onChange={handleChange} />
        </form>
    );
};

const Test3 = () => {
    const [val, setVal] = React.useState("");

    const { updateVals, setError } = useMultiStep();

    const handleChange = (e: React.BaseSyntheticEvent) => {
        setVal(e.target.value);
        updateVals(e.target.name, e.target.value);
    };

    const handleSubmit = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>Test Step Three</p>
            <label>Foo</label>
            <input type="text" value={val} name="foo" onChange={handleChange} />
        </form>
    );
};

const Test4 = () => {
    const [val, setVal] = React.useState("");

    const { complete, updateVals } = useMultiStep();

    const handleChange = (e: React.BaseSyntheticEvent) => {
        setVal(e.target.value);
        updateVals(e.target.name, e.target.value);
    };

    const help = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        const packet = complete();
        return packet;
    };

    const handleSubmit = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>Test Step Four</p>
            <label>Bar</label>
            <input type="text" value={val} name="null" onChange={handleChange} />
            <button type="submit" onClick={help}>
                SUBMIT
            </button>
        </form>
    );
};

export { Test, Test2, Test3, Test4 };
