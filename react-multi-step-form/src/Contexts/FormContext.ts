import { createCtx } from "../utils/createCtx";

interface FormContext {
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

const [formCtx, FormProvider] = createCtx<FormContext>({
    inputFields: {},
    currentPosition: 0,
    maxPosition: 0,
    allowNext: true,
    allowSubmission: true,
    errors: false,
    complete: false,
    onNext: function (continueWithoutFieldFufillment = true) {
        this.allowNext = continueWithoutFieldFufillment;
    },
    onComplete: function () {
        this.complete = true;
        return this.inputFields;
    },
    updateFormValues: function (fieldName, fieldValue) {
        this.inputFields = { ...this.inputFields, [fieldName]: fieldValue };
    },
    stepNames: [],
    addStepName: function (stepName) {
        this.stepNames.push(stepName);
    },
});

export { formCtx, FormProvider };
