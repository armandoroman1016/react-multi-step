import React from "react";
import "./App.css";
import FormContainer from "./Components/FormContainer";
import { createCtx } from "./utils/createCtx";
import { updateFormCtx } from "./utils/updateCtx";

const [useFormContext, CurrentFormProvider] = createCtx<Record<string, unknown>>();

const Test = () => {
    const [val, setVal] = React.useState("");

    const ctx = useFormContext();

    const handleChangle = (e: React.BaseSyntheticEvent) => {
        setVal(e.target.value);
        updateFormCtx(ctx, e.target.name, e.target.value);
        console.log(ctx);
    };

    return (
        <div>
            This is a test step
            <input type="text" value={val} name="hello" onChange={handleChangle} />
        </div>
    );
};

const steps = [{ component: Test }];

function App() {
    return (
        <div className="App">
            <CurrentFormProvider value={{}}>
                <FormContainer steps={steps} />
            </CurrentFormProvider>
        </div>
    );
}

export default App;
