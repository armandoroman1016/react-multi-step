import * as React from "react";
import * as CSS from "csstype";

import {formCtx} from '../Contexts/FormContext'

interface ProgressBarProps {
    fillColor?: string;
    className?: string;
}

const ProgressBar = () => {
    const [percentage, setPercentage] = React.useState(0);

    const { state, update } = React.useContext(formCtx)

    return <div>Hello World</div>;
};

export default ProgressBar;
