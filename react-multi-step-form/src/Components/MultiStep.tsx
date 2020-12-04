import React from "react";
import FormContainer from "./FormContainer";
import { FormProvider } from "../Contexts/FormContext";
import * as CSS from "csstype";
import { NonEmptyArray, Step } from "../utils/types";

interface MultiStepProps {
    heading?: string;
    progressBar?: boolean;
    styles?: CSS.Properties;
    children?: React.ReactNode;
    steps: NonEmptyArray<Step>;
}

export const MultiStep = (props: MultiStepProps) => {
    return (
        <React.Fragment>
            <FormProvider>
                <FormContainer steps={props.steps} />
            </FormProvider>
        </React.Fragment>
    );
};
