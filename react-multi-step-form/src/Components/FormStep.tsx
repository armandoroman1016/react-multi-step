import * as React from "react";
// import * as CSS from "csstype";
import "./FormStep.scss"

export interface FormStepProps{
    component: React.ComponentType;
    stepIndex: number

}

const FormStep = (props: FormStepProps) => {

    const { component: Component, stepIndex } = props

    console.log(props)
    return (
        <div className = {stepIndex === stepIndex ?  "form-step active" : 'form-step'}>
            <Component />
        </div>
    );
};

export default FormStep;
