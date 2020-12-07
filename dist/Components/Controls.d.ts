import * as React from "react";
import * as CSS from "csstype";
interface ControlButtons {
    prev: typeof React.Component;
    next: typeof React.Component;
}
interface ControlProps {
    buttonStyles?: CSS.Properties;
    submitFunction?: React.MouseEventHandler<HTMLButtonElement>;
    controls?: ControlButtons;
    prevButtonText?: string;
    nextButtonText?: string;
}
declare const Controls: (props: ControlProps) => JSX.Element;
export default Controls;
