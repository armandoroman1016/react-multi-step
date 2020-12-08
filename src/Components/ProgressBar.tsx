import * as React from "react";
import "./ProgressBar.scss";
import { useMultiStep } from "../utils/useMultiStep";

const ProgressBar = () => {
    const { stepForm, updateMultiStep } = useMultiStep();
    const {  stepNames, maxPosition, currentPosition} = stepForm;
    
    const goToStep = (selectedIdx: number) => {
        if(currentPosition > selectedIdx){
            updateMultiStep({...stepForm, currentPosition: selectedIdx})
        }
    }

    const getClass = (idx: number) => {
        let str = ""
        if(idx === 0) str += "first"
        if (currentPosition === idx) return str + " current";
        if (currentPosition > idx || currentPosition === maxPosition) return str + " completed";
        return str + "uncomplete";
    };

    return (
        <div className = 'progress-container'>
            {stepNames && stepNames.map((name, idx) => {
                return (
                    <div key = {idx} className='progress-step' style={{width: `${100 / (maxPosition + 1)}%`}}>
                        <div className="step-wrapper">
                            <div onClick={() => goToStep(idx)} className = {'step-idx ' + getClass(idx)}>{idx < currentPosition ? <span>&#10003;</span> : idx + 1}</div>
                            <div className = 'step-label'>{name}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default ProgressBar;
