import * as React from "react";
import * as CSS from "csstype";
import "./FormContainer.scss"
import FormStep from "./FormStep"
import Controls from "./Controls";

import {formCtx} from '../Contexts/FormContext'

interface Step {
    component: React.ComponentType;
    name?: string;
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

    const { state, update } = React.useContext(formCtx);

    useEffect(() => {
        if(steps){
            let maxPosition = steps.length - 1
            update({...state, maxPosition})
        }
    },[steps])

    const activeForm = useRef(null)


    return (
        <div style={styles || {}} className="multi-step-form-container">
            {steps &&
                steps.map(({ component: Step, name }, idx) => {
                    return <FormStep component={Step} stepIndex={idx} key={idx}/>;
                })}
            <Controls currentIndex={state.currentPosition} maxIndex={(steps && steps.length) || 0} />
        </div>
    );
};

export default FormContainer;
