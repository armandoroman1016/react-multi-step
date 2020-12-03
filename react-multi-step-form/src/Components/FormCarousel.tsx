import React from "react";
import { useMultiStep } from "../utils/useMultiStep";

import FormStep from "./FormStep";

interface Props {
    nu?: number;
    steps: any[];
}

const { useEffect, useRef } = React;

export const FormCarousel = (props: Props) => {
    const { steps } = props;
    const { stepForm } = useMultiStep();
    const { currentPosition } = stepForm;

    const stepRef = useRef<HTMLDivElement | null>(null);

    // carousel
    useEffect(() => {
        if (stepRef?.current) {
            const n = stepRef.current.children;
            const formWidth = n[0].clientWidth;
            const amountToMove = formWidth * currentPosition;
            stepRef.current.style.transform = `translateX(-${amountToMove}px)`;
            stepRef.current.style.transition = "transform .25s ease-in";
        }
    }, [stepRef, currentPosition]);

    return (
        <div className="steps-carousel">
            <div ref={stepRef} className="inner">
                {steps &&
                    steps.map(({ component: Step }, idx) => {
                        return <FormStep component={Step} stepIndex={idx} key={idx} />;
                    })}
            </div>
        </div>
    );
};
