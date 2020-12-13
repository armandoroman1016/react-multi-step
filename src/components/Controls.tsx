import * as React from "react";
import * as CSS from "csstype";
import { useMultiStep } from "../utils/useMultiStep";

import styled from "styled-components";

interface ControlButtons {
    prev: typeof React.Component;
    next: typeof React.Component;
}
interface ControlProps {
    buttonStyles?: CSS.Properties;
    controls?: ControlButtons;
    prevButtonText?: string;
    nextButtonText?: string;
}

const Button = styled.button<ControlProps>`
    border-radius: 4px;
    border: none;
    padding: 8px 10px;
    background: #5c8ef2;
    color: #fff;
    cursor: pointer;
    width: 150px;
    margin-bottom: 12px;
`;

const Container = styled.div<ControlProps>`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`;

const Controls = (props: ControlProps) => {
    const { buttonStyles, controls, prevButtonText, nextButtonText } = props;

    const { stepForm, updateMultiStep } = useMultiStep();
    const { currentPosition, maxPosition } = stepForm;

    const toggleSteps = (command: "increment" | "decrement") => {
        // increment step
        if (command === "increment") {
            if (currentPosition < maxPosition) updateMultiStep({ ...stepForm, currentPosition: currentPosition + 1 });
        }
        // decrement step
        else if (command === "decrement") {
            if (currentPosition > 0) updateMultiStep({ ...stepForm, currentPosition: (stepForm.currentPosition -= 1) });
        }
    };

    const useButton = (direction: "decrement" | "increment", buttonText?: string) => {
        // rendering users custom controls, passing a toggle steps fn that the user must call on for functionality
        let Prev;
        let Next;
        if (controls) {
            Prev = controls.prev;
            Next = controls.next;
        }
        if (Prev && direction === "decrement") return <Prev toggleSteps={() => toggleSteps(direction)} />;
        if (Next && direction === "increment") return <Next toggleSteps={() => toggleSteps(direction)} />;

        let errorStyles: CSS.Properties = {};

        if (stepForm.errors)
            errorStyles = {
                background: " #f73a60",
            };

        // default controls
        const defaultText = direction === "decrement" ? "Previous" : "Next";
        return (
            <Button
                disabled={stepForm.errors}
                style={stepForm.errors ? { ...buttonStyles, ...errorStyles } : buttonStyles}
                onClick={() => toggleSteps(direction)}
            >
                {buttonText || defaultText}
            </Button>
        );
    };

    return (
        <Container>
            {currentPosition > 0 && useButton("decrement", prevButtonText)}
            {currentPosition < maxPosition && useButton("increment", nextButtonText)}
        </Container>
    );
};

export default Controls;
