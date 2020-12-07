import * as React from "react";
import FormContainer from "./Components/FormContainer";
import Controls from './Components/Controls'
import { FormProvider } from "./Contexts/FormContext";
import * as CSS from "csstype";
import { NonEmptyArray, Step } from "./utils/types";

import { useMultiStep } from './utils/useMultiStep'
interface MultiStepProps {
    heading?: string;
    progressBar?: boolean;
    styles?: CSS.Properties;
    children?: React.ReactNode;
    steps: NonEmptyArray<Step>;
}

const MultiStep = (props: MultiStepProps) => {

    const {children} = props
    
    return (
        <React.Fragment>
            <FormProvider>
                <FormContainer steps={props.steps} children = {children}/>
            </FormProvider>
        </React.Fragment>
    );
};

export { useMultiStep, Controls }
export default MultiStep;
