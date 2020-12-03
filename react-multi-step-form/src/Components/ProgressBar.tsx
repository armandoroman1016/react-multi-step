import * as React from "react";
import "./ProgressBar.scss";
import { useMultiStep } from "../utils/useMultiStep";

const ProgressBar = () => {
    const { stepForm } = useMultiStep();

    const calculateClass = (idx: number) => {
        if (stepForm.complete) return "index completed";
        if (stepForm.currentPosition === idx) return "index current";
        if (stepForm.currentPosition > idx || stepForm.currentPosition === stepForm.maxPosition)
            return "index completed";
        return "index uncomplete";
    };

    return (
        <div className="wrapper">
            <div className="progress-bar-container">
                {stepForm.stepNames &&
                    stepForm.stepNames.map((step, idx) => {
                        return (
                            <div className="progress-step" key={idx}>
                                <div className={calculateClass(idx)}>
                                    <div className="content">{stepForm.currentPosition > idx ? "✔" : idx + 1}</div>
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
