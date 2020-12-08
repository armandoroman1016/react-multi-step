import { createCtx } from "../utils/createCtx";

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

let ctx: FormContext = {
    inputFields: {},
    currentPosition: 0,
    maxPosition: 0,
    allowNext: true,
    allowSubmission: true,
    errors: false,
    complete: false,
    onNext(continueWithoutFieldFufillment = true) {
        this.allowNext = continueWithoutFieldFufillment;
    },
    onComplete() {
        this.complete = true;
        return this.inputFields;
    },
    updateFormValues(fieldName, fieldValue) {
        this.inputFields = { ...this.inputFields, [fieldName]: fieldValue };
    },
    stepNames: [],
    addStepName(stepName) {
        this.stepNames.push(stepName);
    }
}

const [formCtx, FormProvider] = createCtx<FormContext>(ctx);

export { formCtx, FormProvider };
