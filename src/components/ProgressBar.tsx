import * as React from "react";
import { useMultiStep } from "../utils/useMultiStep";

import styled from "styled-components";

interface ProgressBarProps {
    completedBackground?: string;
    completeFontColor?: string;
    activeBackground?: string;
    activeFontColor?: string;
    incompleteBackground?: string;
    incompleteFontColor?: string;
    errorBackground?: string;
    errorFontColor?: string;
    labelColor?: string;
    font?: string;
    completeLabelColor?: string;
    activeLabelColor?: string;
    errorLabelColor?: string;
    incompleteLabelColor?: string;
}

const ProgressContainer = styled.div`
    border-radius: 2px;
    margin: 10px auto;
    padding: 20px;
    width: 80%;
    display: flex;
    justify-content: space-between;
    position: relative;
`;

const StepItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const StepInfo = styled.div<ProgressBarProps>`
    margin: auto 0;
    border-radius: 80%;
    width: 20px;
    height: 20px;
    padding: 3px;
    text-align: center;
    margin-bottom: 12px;
    background: #fff;
    border: 1px solid #d3d3d3;
    color: #d3d3d3;
    font: ${({ font }) => font || ""};

    &::before {
        position: absolute;
        z-index: -1;
        top: 22%;
        left: -45%;
        content: "";
        width: 90%;
        height: 1px;
        background: #d3d3d3;
    }

    &.first {
        &::before {
            width: 0;
        }
    }

    &.completed {
        background-color: ${({ completedBackground }) => completedBackground || "#5c8ef2"};
        color: ${({ completeFontColor }) => completeFontColor || "#fff"};
        border: 2px solid #fff;
        &::before {
            height: 2px;
            background: ${({ completedBackground }) => completedBackground || "#5c8ef2"};
        }
    }

    &.current {
        background-color: ${({ activeBackground }) => activeBackground || "#5c8ef2"};
        color: ${(props) => {
            return props.activeFontColor || "#fff";
        }};
        border: 2px solid #fff;
        &::before {
            height: 2px;
            background: ${(props) => {
                return props.completedBackground || "#5c8ef2";
            }}};
        }
    }

    &.current.error {
        background-color: ${({ errorBackground }) => errorBackground || "#f73a60"};
        color: ${({ errorFontColor }) => errorFontColor || "#fff"};
    }

    &.completed {
        font-weight: bold;
        cursor: pointer;
    }
`;

const StepLabel = styled.div<ProgressBarProps>`
    font: ${({ font }) => font || ""};

    &.completed {
        color: ${({ completeLabelColor, labelColor }) => completeLabelColor || labelColor || "#5c8ef2"};
    }

    &.current {
        color: ${({ activeLabelColor, labelColor }) => activeLabelColor || labelColor || "#5c8ef2"};
    }

    &.current.error {
        color: ${({ errorLabelColor, errorFontColor }) => errorLabelColor || errorFontColor || "#f73a60"};
    }

    &.uncomplete {
        color: ${({ incompleteLabelColor }) => incompleteLabelColor || "#d3d3d3"};
    }
`;

const ProgressBar = (props: ProgressBarProps) => {
    const { stepForm, updateMultiStep } = useMultiStep();
    const { stepNames, maxPosition, currentPosition, errors } = stepForm;

    const goToStep = (selectedIdx: number) => {
        if (currentPosition > selectedIdx) {
            updateMultiStep({ ...stepForm, currentPosition: selectedIdx, completed: false });
        }
    };

    const getClass = (idx: number) => {
        let str = "";

        if (idx === 0) str += "first ";
        if (currentPosition === idx && errors) return str + "current error";
        if (currentPosition === idx) return str + "current";
        if (currentPosition > idx || currentPosition === maxPosition || stepForm.completed) return str + "completed";
        return str + "uncomplete";
    };

    const getContent = (idx: number) => {
        if (idx < currentPosition || stepForm.completed) return <span>&#10003;</span>;
        return idx + 1;
    };

    return (
        <ProgressContainer>
            {stepNames &&
                stepNames.map((name, idx) => {
                    return (
                        <div key={idx} className="progress-step" style={{ width: `${100 / (maxPosition + 1)}%` }}>
                            <StepItem className="step-wrapper">
                                <StepInfo
                                    activeBackground={props.activeBackground}
                                    activeFontColor={props.activeFontColor}
                                    completeFontColor={props.completeFontColor}
                                    completedBackground={props.completedBackground}
                                    errorBackground={props.errorBackground}
                                    errorFontColor={props.errorFontColor}
                                    incompleteBackground={props.incompleteBackground}
                                    incompleteFontColor={props.incompleteFontColor}
                                    font={props.font}
                                    onClick={() => goToStep(idx)}
                                    className={"step-idx " + getClass(idx)}
                                >
                                    {getContent(idx)}
                                </StepInfo>
                                <StepLabel
                                    className={"label " + getClass(idx)}
                                    font={props.font}
                                    labelColor={props.labelColor}
                                    completeLabelColor={props.completeLabelColor}
                                    activeLabelColor={props.activeLabelColor}
                                    errorLabelColor={props.errorLabelColor}
                                    incompleteLabelColor={props.incompleteLabelColor}
                                    errorFontColor={props.errorFontColor}
                                    activeBackground={props.activeBackground}
                                >
                                    {name}
                                </StepLabel>
                            </StepItem>
                        </div>
                    );
                })}
        </ProgressContainer>
    );
};

export default ProgressBar;
