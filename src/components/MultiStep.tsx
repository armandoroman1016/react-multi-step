import * as React from "react";
import FormContainer from "./FormContainer";
import { FormProvider } from "../contexts/FormContext";
import * as CSS from "csstype";
import { NonEmptyArray, Step } from "../utils/types";

interface MultiStepProps {
    heading?: string;
    progressBar?: boolean;
    styles?: CSS.Properties;
    children?: React.ReactNode;
    steps: NonEmptyArray<Step>;
    formTransition?: string;
}

const MultiStep = (props: MultiStepProps) => {
    return (
        <React.Fragment>
            <FormProvider>
                <FormContainer steps={props.steps} transition={props.formTransition || ""} />
            </FormProvider>
        </React.Fragment>
    );
};

export default MultiStep;
