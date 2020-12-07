import * as React from "react";
import "./ProgressBar.scss";
import { useMultiStep } from "../utils/useMultiStep";

const ProgressBar = () => {
    const { stepForm } = useMultiStep();

    const { maxPosition, complete, currentPosition, stepNames } = stepForm;

    const getClass = (idx: number) => {
        if (idx === maxPosition && complete) return "index completed final";
        if (currentPosition === idx) return "index current";
        if (currentPosition > idx || currentPosition === maxPosition) return "index completed";
        return "index uncomplete";
    };

    const getContent = (idx: number) => {
        if (currentPosition > idx) return "✔";
        if (complete && currentPosition === maxPosition) return "✔";
        return idx + 1;
    };

    return (
        <div className="wrapper">
            <div className="progress-bar-container">
                {stepNames &&
                    stepNames.map((step, idx) => {
                        return (
                            <div className="progress-step" key={idx}>
                                <div className={getClass(idx)}>
                                    <div className="content">{getContent(idx)}</div>
                                </div>
                                <p className="label">{step}</p>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default ProgressBar;
