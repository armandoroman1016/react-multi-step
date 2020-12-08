import * as React from "react";
import "./ProgressBar.scss";
import { useMultiStep } from "../utils/useMultiStep";

const ProgressBar = () => {
    const { stepForm } = useMultiStep();

    
    const {  stepNames, maxPosition, currentPosition } = stepForm;


    const getClass = (idx: number) => {
        let str = ""
        if(idx === 0) str += "first"
        if (currentPosition === idx) return str + " current";
        if (currentPosition > idx || currentPosition === maxPosition) return str + " completed";
        return str + "uncomplete";
    };

    // const getContent = (idx: number) => {
    //     if (currentPosition > idx) return "✔";
    //     if (complete && currentPosition === maxPosition) return "✔";
    //     return idx + 1;
    // };

    return (
        <div className = 'progress-container'>
            {stepNames && stepNames.map((name, idx) => {
                return (
                    <div className='progress-step' style={{width: `${100 / (maxPosition + 1)}%`}}>
                        <div className="step-wrapper">
                            <div className = {'step-idx ' + getClass(idx)}>{idx < currentPosition ? <span>&#10003;</span> : idx + 1}</div>
                            <div className = 'step-label'>{name}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default ProgressBar;

        {/* <div className="wrapper">
            <div className="progress-bar-container">
                {stepNames &&
                    stepNames.map((step, idx) => {
                        return (
                            <div className="progress-step" key={idx}>
                                <div >
                                    <div className="content">{getContent(idx)}</div>
                                </div>
                                <p className="label">{step}</p>
                            </div>
                        );
                    })}
            </div>
        </div> */}