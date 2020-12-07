import * as React from "react";
import "./FormStep.scss";
export interface FormStepProps {
    component: React.ComponentType;
    stepIndex: number;
}
declare const FormStep: (props: FormStepProps) => JSX.Element;
export default FormStep;
