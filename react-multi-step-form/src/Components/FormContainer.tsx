import * as React from "react";
import * as CSS from "csstype";

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

const FormContainer = ({ heading, progressBar, styles, headingProps, children }: FormContainerProps) => {
    return (
        <div style={styles || {}}>
            {heading && (
                <p className={headingProps?.className} style={headingProps?.styles}>
                    {heading}
                </p>
            )}
            {children}
        </div>
    );
};

export default FormContainer;
