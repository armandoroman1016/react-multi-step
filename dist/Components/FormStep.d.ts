import * as React from "react";
export interface FormStepProps {
    component: React.ComponentType;
    stepIndex: number;
}
declare const FormStep: (props: FormStepProps) => JSX.Element;
export default FormStep;
