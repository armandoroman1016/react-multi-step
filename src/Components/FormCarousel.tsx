import * as React from "react";
import { useMultiStep } from "../utils/useMultiStep";
import FormStep from "./FormStep";

interface Props {
    nu?: number;
    steps: any[];
}

const { useEffect, useRef, useState } = React;

export const FormCarousel = (props: Props) => {
    const { steps } = props;
    const { stepForm } = useMultiStep();
    const { currentPosition } = stepForm;

    const stepRef = useRef<HTMLDivElement | null>(null);

    const [carouselWidth, setCarouselWidth] = useState<number>(0)

    // carousel
    useEffect(() => {
        if(carouselWidth === 0 && stepRef?.current){
            setCarouselWidth(stepRef.current.clientWidth) 
        }
        if (stepRef?.current) {
            const n = stepRef.current.children;
            if (n.length < 1) return;
            let carouselPosition = carouselWidth * stepForm.currentPosition
            stepRef.current.style.transform = `translateX(-${carouselPosition}px)`;
            stepRef.current.style.transition = "transform .6s cubic-bezier(.62,.23,.27,1.44)";
        }
    }, [stepRef, currentPosition, carouselWidth]);

    useEffect(() => {
        function moveCarousel(){
            if(stepRef.current) setCarouselWidth(stepRef.current.clientWidth) 
        }

        window.addEventListener("resize", moveCarousel)

        return () => {
            window.removeEventListener("resize", moveCarousel)
        }
    },[])

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
