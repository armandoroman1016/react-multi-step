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

    let customControls = false;
    let customProgress = false;

    const componentChildren = React.Children.toArray(children);

    componentChildren.forEach((child) => {
        if (child["type"].name === "ProgressBar") customProgress = true;
        else if (child["type"].name === "Controls") customControls = true;
    });

    componentChildren.splice(1, 0, true);

    useEffect(() => {
        if (steps) {
            const maxPosition = steps.length - 1;
            const stepNames = steps.map((step) => step.name);
            updateMultiStep({ ...stepForm, maxPosition, stepNames });
        }
    }, [steps]);

    return (
        <Container style={styles}>
            {!customProgress && !customControls ? (
                <>
                    <ProgressBar />
                    <FormCarousel steps={steps} transition={transition || ""} />
                    <Controls />
                </>
            ) : null}

            {customProgress && !customControls ? (
                <>
                    {children}
                    <FormCarousel steps={steps} transition={transition || ""} />
                    <Controls />
                </>
            ) : null}

            {!customProgress && customControls ? (
                <>
                    <ProgressBar />
                    <FormCarousel steps={steps} transition={transition || ""} />
                    {children}
                </>
            ) : null}

            {customProgress && customControls ? (
                <>
                    {componentChildren.map((child, idx) => {
                        if (idx !== 0 && idx !== 2)
                            return <FormCarousel steps={steps} transition={transition || ""} key={idx} />;
                        return child;
                    })}
                </>
            ) : null}
        </Container>
    );
};

export default FormContainer;
