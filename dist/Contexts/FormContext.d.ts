/// <reference types="react" />
export interface FormContext {
    inputFields: Record<string, unknown>;
    currentPosition: number;
    maxPosition: number;
    currentForm?: React.ComponentType;
    allowNext: boolean;
    allowSubmission: boolean;
    onNext: () => void;
    onComplete: () => Record<string, unknown>;
    updateFormValues: (fieldName: string, fieldValue: string) => void;
    errors: boolean;
    stepNames: string[];
    addStepName: (stepName: string) => void;
    complete: boolean;
}
declare const formCtx: import("react").Context<{
    state: FormContext;
    update: import("react").Dispatch<import("react").SetStateAction<FormContext>>;
}>, FormProvider: (props: import("react").PropsWithChildren<Record<string, unknown>>) => JSX.Element;
export { formCtx, FormProvider };
