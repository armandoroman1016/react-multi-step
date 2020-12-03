import { useContext } from "react";
import { formCtx } from "../Contexts/FormContext";

export const useMultiStep = () => {
    const { state, update } = useContext(formCtx);
    return { stepForm: state, updateMultiStep: update };
};
