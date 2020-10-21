import * as React from "react";
import * as CSS from "csstype";
import FormStep from "./FormStep";

import { FormStepProps } from "./FormStep";
interface FormContainerProps {
    heading?: string;
    progressBar?: boolean;
    styles?: CSS.Properties;
    headingProps?: HeadingProps;
    children: React.ReactNode;
}

interface HeadingProps {
    className?: string;
    styles?: CSS.Properties;
}
const formStepFiller: FormStepProps = {
    fields: [
        {
            label: "This is my text",
            id: "1",
            type: "text",
        },
        {
            label: "Filler",
            id: "2",
            type: "text",
        },
        {
            label: "Lorem Ipsum",
            id: "3",
            type: "password",
        },
        {
            label: "This is my text",
            id: "4",
            type: "url",
        },
    ],
};

const FormContainer = ({ heading, progressBar, styles, headingProps, children }: FormContainerProps) => {
    return (
        <div style={styles || {}}>
            {heading && (
                <p className={headingProps?.className} style={headingProps?.styles}>
                    {heading}
                </p>
            )}
            {children}
            <FormStep fields={formStepFiller.fields} />
        </div>
    );
};

export default FormContainer;
