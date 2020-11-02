import * as React from "react";
import * as CSS from "csstype";

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

const FormContainer = ({ heading, progressBar, styles, children, steps }: FormContainerProps) => {
    return (
        <div style={styles || {}}>
            {steps &&
                steps.map(({ component: Step, name }, idx) => {
                    return <Step key={idx} />;
                })}
        </div>
    );
};

export default FormContainer;
