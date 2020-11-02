import * as React from "react";
// import * as CSS from "csstype";

export interface FormStepProps {
    component: React.ComponentType;
}

const FormStep = ({ component: Component }: FormStepProps) => {
    return <Component />;
};

export default FormStep;
