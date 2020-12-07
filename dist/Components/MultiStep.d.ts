import * as React from "react";
import * as CSS from "csstype";
import { NonEmptyArray, Step } from "../utils/types";
interface MultiStepProps {
    heading?: string;
    progressBar?: boolean;
    styles?: CSS.Properties;
    children?: React.ReactNode;
    steps: NonEmptyArray<Step>;
}
declare const MultiStep: (props: MultiStepProps) => JSX.Element;
export default MultiStep;
