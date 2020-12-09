/// <reference types="react" />
export interface FormContext {
    inputFields: Record<string, unknown>;
    currentPosition: number;
    maxPosition: number;
    stepNames: string[];
    errors: boolean;
    completed: boolean;
    currentForm?: React.ComponentType;
    addStepName: (stepName: string) => void;
}
declare const formCtx: import("react").Context<{
    state: FormContext;
    update: import("react").Dispatch<import("react").SetStateAction<FormContext>>;
}>, FormProvider: (props: import("react").PropsWithChildren<Record<string, unknown>>) => JSX.Element;
export { formCtx, FormProvider };
