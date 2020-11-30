import * as React from "react";
// import * as CSS from "csstype";
import "./FormStep.scss"
import {formCtx} from '../Contexts/FormContext'

export interface FormStepProps{
    component: React.ComponentType;
    stepIndex: number

}

const FormStep = (props: FormStepProps) => {

    const { component: Component, stepIndex } = props

    const { state, update } = React.useContext(formCtx);

    const checkForEnter = (e: React.KeyboardEvent) => {
        if(e.key === "Enter"){
            if(state.currentPosition < state.maxPosition) update({...state, currentPosition: state.currentPosition + 1})
        }
    }

    return (
        <div className = {state.currentPosition === stepIndex ?  "form-step active" : 'form-step'} onKeyDown={checkForEnter}>
            <Component />
        </div>
    );
};

export default FormStep;
