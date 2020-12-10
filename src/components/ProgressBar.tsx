import * as React from "react";
import "./ProgressBar.scss";
import { useMultiStep } from "../utils/useMultiStep";

const ProgressBar = () => {
    const { stepForm, updateMultiStep } = useMultiStep();
    const { stepNames, maxPosition, currentPosition, errors } = stepForm;

    const goToStep = (selectedIdx: number) => {
        if (currentPosition > selectedIdx) {
            updateMultiStep({ ...stepForm, currentPosition: selectedIdx, completed: false });
        }
    };

    const getClass = (idx: number) => {
        let str = "";

        if (idx === 0) str += "first ";
        if (currentPosition === idx && errors) return str + "current error";
        if (currentPosition === idx) return str + "current";
        if (currentPosition > idx || currentPosition === maxPosition || stepForm.completed) return str + "completed";
        return str + "uncomplete";
    };

    const getContent = (idx: number) => {
        if (idx < currentPosition || stepForm.completed) return <span>&#10003;</span>;
        return idx + 1;
    };

    return (
        <div className="progress-container">
            {stepNames &&
                stepNames.map((name, idx) => {
                    return (
                        <div key={idx} className="progress-step" style={{ width: `${100 / (maxPosition + 1)}%` }}>
                            <div className="step-wrapper">
                                <div onClick={() => goToStep(idx)} className={"step-idx " + getClass(idx)}>
                                    {getContent(idx)}
                                </div>
                                <div className="step-label">{name}</div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default ProgressBar;
