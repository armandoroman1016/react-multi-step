/// <reference types="react" />
export declare const useMultiStep: () => {
    stepForm: import("../contexts/FormContext").FormContext;
    updateMultiStep: import("react").Dispatch<import("react").SetStateAction<import("../contexts/FormContext").FormContext>>;
    complete: () => Record<string, unknown>;
    updateVals: (fieldName: string, fieldValue: string) => void;
    setError: (b: boolean) => void;
};
