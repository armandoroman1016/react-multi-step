import { useContext } from "react";
import { formCtx } from "../contexts/FormContext";

export const useMultiStep = () => {
    const { state, update } = useContext(formCtx);

    function complete(){
        if(!state.errors){
            update({...state, completed: true})
        }
        return state.inputFields
    }

    function updateVals(fieldName: string, fieldValue: string){
        update({ ...state, inputFields: {...state.inputFields, [fieldName]: fieldValue}});
    }

    function setError(b: boolean){
        update({...state, errors: b})
    }

    return { stepForm: state, updateMultiStep: update, complete, updateVals, setError };
};
