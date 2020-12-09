import { createCtx } from "../utils/createCtx";

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

let ctx: FormContext = {
    inputFields: {},
    currentPosition: 0,
    maxPosition: 0,
    errors: false,
    completed: false,
    stepNames: [],
    addStepName(stepName) {
        this.stepNames.push(stepName);
    }
}

const [formCtx, FormProvider] = createCtx<FormContext>(ctx);

export { formCtx, FormProvider };
