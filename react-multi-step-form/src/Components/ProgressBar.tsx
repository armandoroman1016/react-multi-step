import * as React from "react";
import * as CSS from "csstype";
import "./ProgressBar.scss"
import {useMultiStep} from "../utils/useMultiStep"
interface ProgressBarProps {
    fillColor?: string;
    className?: string;
}

const { useEffect, useState } = React
const ProgressBar = () => {

    const { stepForm } = useMultiStep()

    let steps = 0;

    console.log(stepForm)

    useEffect(() => {
        if(stepForm.maxPosition > 0)steps = stepForm.maxPosition + 1
    }, [stepForm.maxPosition])
    
    return( 
        <div className="progress-bar-container">
            {stepForm.stepNames && stepForm.stepNames.map((step, idx) => {
                return (
                    <div className="progress-step" key = {idx}>
                        <div className = {stepForm.currentPosition <= idx ? 'index': "index completed"}>
                            <div className = "content">{idx + 1}</div>
                        </div>
                        <p className={"label"}>{step}</p>
                    </div>
                )
            }) }
        </div>
    );
};

export default ProgressBar;
