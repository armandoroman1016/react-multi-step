import { createCtx } from "../utils/createCtx";

interface FormContext {
    inputFields: Object
    allowSubmission?: boolean
    currentPosition: number
    maxPosition: number
    currentForm?: React.ComponentType
}

const [formCtx, FormProvider] = createCtx<FormContext>({
    inputFields: {},
    allowSubmission: true,
    currentPosition: 0,
    maxPosition: 0
})

export {formCtx, FormProvider}
