import * as React from "react";
import FormContainer from "./Components/FormContainer";
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
    return (
        <React.Fragment>
            <FormProvider>
                <FormContainer steps={props.steps} />
            </FormProvider>
        </React.Fragment>
    );
};

export { useMultiStep }
export default MultiStep;
