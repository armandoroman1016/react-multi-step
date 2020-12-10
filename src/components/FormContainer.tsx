import * as React from "react";
import * as CSS from "csstype";
import styled from "styled-components";

import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

import { useMultiStep } from "../utils/useMultiStep";
import { FormCarousel } from "./FormCarousel";

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
    transition?: string;
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const FormContainer = ({ styles, steps, children, transition }: FormContainerProps) => {
    const { stepForm, updateMultiStep } = useMultiStep();

    useEffect(() => {
        if (steps) {
            const maxPosition = steps.length - 1;
            const stepNames = steps.map((step) => step.name);
            updateMultiStep({ ...stepForm, maxPosition, stepNames });
        }
    }, [steps]);

    return (
        <Container style={styles}>
            <ProgressBar />
            <FormCarousel steps={steps} transition={transition || ""} />
            {!React.Children.count(children) && <Controls />}
            {children}
        </Container>
    );
};

export default FormContainer;
