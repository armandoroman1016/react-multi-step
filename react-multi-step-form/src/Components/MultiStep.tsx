import React from 'react'
import FormContainer from "./FormContainer";
import {FormProvider} from '../Contexts/FormContext'
import * as CSS from "csstype";


interface Step {
    component: React.ComponentType;
    name: string;
}

interface MultiStepProps {
    heading?: string;
    progressBar?: boolean;
    styles?: CSS.Properties;
    children?: React.ReactNode;
    steps: Step[];
}

export const MultiStep = (props: MultiStepProps) => {
    return (
        <React.Fragment>
            <FormProvider>
                <FormContainer steps={props.steps}/>
            </FormProvider>
        </React.Fragment>
    )
}
