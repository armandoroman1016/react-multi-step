import React, { useContext } from 'react'
import * as CSS from 'csstype'
import {formCtx} from '../Contexts/FormContext'

interface ControlProps {
    currentIndex: number
    maxIndex: number
    buttonStyles?: CSS.Properties;
    submitFunction?: React.MouseEventHandler<HTMLButtonElement>;
}

const Controls = (props: ControlProps) => {

    const { currentIndex,  buttonStyles, submitFunction} = props

    const { state, update } = useContext(formCtx);

    const toggleSteps = (command: "increment" | "decrement") => {
        let {currentPosition, maxPosition} = state
        // increment step
        if(command === 'increment'){
            if(currentPosition < maxPosition) update({...state, currentPosition: currentPosition + 1})
        }
        // decrement step
        else if(command === "decrement"){
            if(currentPosition > 0) update({...state, currentPosition: currentPosition -= 1})
        }
        console.log(state)
    }

    return (
        <div>
            {currentIndex > 0 && <button style={buttonStyles} onClick={() => toggleSteps("decrement")}>PREV</button>}
            {currentIndex < state.maxPosition && <button style={buttonStyles}  onClick={() => toggleSteps("increment")}>NEXT</button>}
            {currentIndex === state.maxPosition && <button style={buttonStyles} onClick={() => toggleSteps}>SUBMIT</button>}
        </div>
    )
}

export default Controls
