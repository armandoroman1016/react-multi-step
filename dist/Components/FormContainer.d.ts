import * as React from "react";
import * as CSS from "csstype";
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
declare const FormContainer: ({ styles, steps, children }: FormContainerProps) => JSX.Element;
export default FormContainer;
