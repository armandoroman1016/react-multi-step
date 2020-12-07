import * as React from "react";
import Controls from './Components/Controls';
import * as CSS from "csstype";
import { NonEmptyArray, Step } from "./utils/types";
import { useMultiStep } from './utils/useMultiStep';
interface MultiStepProps {
    heading?: string;
    progressBar?: boolean;
    styles?: CSS.Properties;
    children?: React.ReactNode;
    steps: NonEmptyArray<Step>;
}
declare const MultiStep: (props: MultiStepProps) => JSX.Element;
export { useMultiStep, Controls };
export default MultiStep;
