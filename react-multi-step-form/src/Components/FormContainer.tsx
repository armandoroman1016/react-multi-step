import * as React from "react";
import * as CSS from "csstype";
import "./FormContainer.scss"
import FormStep from "./FormStep"
import Controls from "./Controls";

import ProgressBar from "./ProgressBar";
import { useMultiStep } from '../utils/useMultiStep'
interface Step {
    component: React.ComponentType;
    name: string;
}

interface FormContainerProps {
    heading?: string;
    progressBar?: boolean;
    styles?: CSS.Properties;
    children?: React.ReactNode;
    steps: Step[];
}

const {useEffect, useRef} = React

const FormContainer = ({ heading, progressBar, styles, children, steps }: FormContainerProps) => {

    const {stepForm, updateMultiStep} = useMultiStep()

    useEffect(() => {
        if(steps){
            let maxPosition = steps.length - 1
            updateMultiStep({...stepForm, maxPosition})
            steps.forEach(step => stepForm.addStepName(step.name))
        }
    },[steps])

    return (
        <div style={styles || {}} className="multi-step-form-container">
            <ProgressBar />
            {steps &&
                steps.map(({ component: Step, name }, idx) => {
                    return <FormStep component={Step} stepIndex={idx} key={idx}/>;
                })}
            <Controls/>
        </div>
    );
};

export default FormContainer;
