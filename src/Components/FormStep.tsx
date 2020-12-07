import * as React from "react";
import { useMultiStep } from "../utils/useMultiStep";
import "./FormStep.scss";

export interface FormStepProps {
    component: React.ComponentType;
    stepIndex: number;
}

const FormStep = (props: FormStepProps) => {
    const { component: Component, stepIndex } = props;

    const { stepForm, updateMultiStep } = useMultiStep();
    const { currentPosition, maxPosition } = stepForm;

    const checkForEnter = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            if (currentPosition < maxPosition) updateMultiStep({ ...stepForm, currentPosition: currentPosition + 1 });
        }
    };

    return (
        <div className={currentPosition === stepIndex ? "form-step active" : "form-step"} onKeyDown={checkForEnter}>
            <Component />
        </div>
    );
};

export default FormStep;
