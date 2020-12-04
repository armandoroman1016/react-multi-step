import * as React from "react";
import * as CSS from "csstype";
import { useMultiStep } from "../utils/useMultiStep";

import styled from "styled-components";

interface ControlProps {
    buttonStyles?: CSS.Properties;
    submitFunction?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = styled.button<ControlProps>`
    border-radius: 4px;
    border: none;
    padding: 8px 10px;
    background: #5c8ef2;
    color: #fff;
    cursor: pointer;
`;

const Container = styled.div<ControlProps>`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const Controls = (props: ControlProps) => {
    const { buttonStyles } = props;
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

    return (
        <Container>
            {currentPosition > 0 && (
                <Button data-test style={buttonStyles} onClick={() => toggleSteps("decrement")}>
                    Back
                </Button>
            )}
            {currentPosition < maxPosition && (
                <Button style={buttonStyles} onClick={() => toggleSteps("increment")}>
                    Next
                </Button>
            )}
        </Container>
    );
};

export default Controls;
