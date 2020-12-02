import { createCtx } from "../utils/createCtx";

interface FormContext {
    inputFields: Object
    currentPosition: number
    maxPosition: number
    currentForm?: React.ComponentType
    allowNext: boolean
    allowSubmission: boolean
    onNext: () => void,
    onComplete: () => Object,
    updateFormValues: (fieldName: string, fieldValue: string) => void,
    errors: boolean,
    stepNames: string[],
    addStepName: (stepName: string) => void
}

const [formCtx, FormProvider] = createCtx<FormContext>({
    inputFields: {},
    currentPosition: 0,
    maxPosition: 0,
    allowNext: true,
    allowSubmission: true,
    errors: false,
    onNext: function(continueWithoutFieldFufillment: boolean = true){
        this.allowNext = continueWithoutFieldFufillment
    },
    onComplete: function(){
        return this.inputFields
    },
    updateFormValues: function(fieldName, fieldValue){
        this.inputFields = {...this.inputFields, [fieldName]: fieldValue}
    },
    stepNames: [],
    addStepName: function(stepName){
        this.stepNames.push(stepName)
    }
})

export {formCtx, FormProvider}
