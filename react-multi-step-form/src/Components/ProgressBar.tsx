import * as React from "react";
import * as CSS from "csstype";

interface ProgressBarProps {
    stepAmount: number;
    startingStep?: number;
    fillColor?: string;
    className?: string;
}

const ProgressBar = () => {
    const [percentage, setPercentage] = React.useState(0);

    return <div>Hello World</div>;
};

export default ProgressBar;
