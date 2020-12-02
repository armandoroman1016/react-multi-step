import * as React from "react";
import * as CSS from "csstype";

import {useMultiStep} from "../utils/useMultiStep"
interface ProgressBarProps {
    fillColor?: string;
    className?: string;
}

const { useEffect } = React
const ProgressBar = () => {

    const { stepForm } = useMultiStep()

    let steps = 0;

    console.log(stepForm)

    useEffect(() => {
        if(stepForm.maxPosition > 0)steps = stepForm.maxPosition + 1
    }, [stepForm.maxPosition])

    return( 
        <div>
            {stepForm.stepNames && stepForm.stepNames.map(step => {
                return <div>{step}</div>
            }) }
        </div>
    );
};

export default ProgressBar;
