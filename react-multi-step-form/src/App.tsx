import React from "react";
import "./App.css";
import FormContainer from "./Components/FormContainer";
import { createCtx } from "./utils/createCtx";
// import { updateFormCtx } from "./utils/updateCtx";

const [formCtx, FormProvider] = createCtx({});

const Test = () => {
    const [val, setVal] = React.useState("");

    const { state, update } = React.useContext(formCtx);
    console.log("state", state);

    const handleChangle = (e: React.BaseSyntheticEvent) => {
        setVal(e.target.value);
        update(e.target.value);
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
            <FormProvider>
                <FormContainer steps={steps} />
            </FormProvider>
        </div>
    );
}

export default App;
