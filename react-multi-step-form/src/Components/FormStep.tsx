import * as React from "react";
import * as CSS from "csstype";

interface FieldProps {
    children?: React.ReactChild;
    className?: string;
    id: string;
    label?: string;
    name?: string;
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    style?: CSS.Properties;
    type:
        | "button"
        | "checkbox"
        | "color"
        | "date"
        | "datetime-local"
        | "email"
        | "file"
        | "hidden"
        | "image"
        | "month"
        | "number"
        | "password"
        | "radio"
        | "range"
        | "reset"
        | "search"
        | "submit"
        | "tel"
        | "text"
        | "time"
        | "url"
        | "week";
    value?: string;
}

export interface FormStepProps {
    fields: FieldProps[];
}

const FormField = (props: FieldProps) => {
    return <div>123</div>;
};

const FormStep = ({ fields }: FormStepProps) => {
    return (
        <>
            {fields.map((field: FieldProps) => {
                return <div key={field.id}>{field.label && <label>{field.label}</label>}</div>;
            })}
        </>
    );
};

export default FormStep;
