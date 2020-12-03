import * as React from "react";
import * as CSS from "csstype";
import styled from "styled-components";

import FormStep from "./FormStep";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

import { useMultiStep } from "../utils/useMultiStep";

const { useEffect } = React;
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

const Container = styled.div`
    width: 100%';
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border:2px solid red;
`;

const FormContainer = ({ heading, progressBar, styles, children, steps }: FormContainerProps) => {
    const { stepForm, updateMultiStep } = useMultiStep();

    useEffect(() => {
        if (steps) {
            const maxPosition = steps.length - 1;
            updateMultiStep({ ...stepForm, maxPosition });
            steps.forEach((step) => stepForm.addStepName(step.name));
        }
    }, [steps, updateMultiStep]);

    return (
        <Container style={styles}>
            <ProgressBar />
            <div className="steps-carousel">
                {steps &&
                    steps.map(({ component: Step }, idx) => {
                        return <FormStep component={Step} stepIndex={idx} key={idx} />;
                    })}
            </div>
            <Controls />
        </Container>
    );
};

export default FormContainer;
