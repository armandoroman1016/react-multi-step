import React, { useContext } from 'react'
import * as CSS from 'csstype'
import { useMultiStep } from "../utils/useMultiStep"

interface ControlProps {
    buttonStyles?: CSS.Properties;
    submitFunction?: React.MouseEventHandler<HTMLButtonElement>;
}

const Controls = (props: ControlProps) => {

    const { buttonStyles, submitFunction } = props

    const { stepForm, updateMultiStep } = useMultiStep()

    const toggleSteps = (command: "increment" | "decrement") => {
        let {currentPosition, maxPosition} = stepForm
        // increment step
        if(command === 'increment'){
            if(currentPosition < maxPosition) updateMultiStep({...stepForm, currentPosition: currentPosition + 1})
        }
        // decrement step
        else if(command === "decrement"){
            if(currentPosition > 0) updateMultiStep({...stepForm, currentPosition: currentPosition -= 1})
        }
    }
        
    return (
        <div>
            {stepForm.currentPosition > 0 && <button style={buttonStyles} onClick={() => toggleSteps("decrement")}>PREV</button>}
            {stepForm.currentPosition < stepForm.maxPosition && <button style={buttonStyles}  onClick={() => toggleSteps("increment")}>NEXT</button>}
        </div>
    )
}

export default Controls
