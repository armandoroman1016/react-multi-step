import React from "react";
import "./App.css";
import FormContainer from "./Components/FormContainer";
// import { updateFormCtx } from "./utils/updateCtx";
import {FormProvider} from './Contexts/FormContext'
import {Test, Test2, Test3, Test4} from './TestComponents/test'

function App() {
    return (
        <div className="App">
            <FormProvider>
                <FormContainer 
                steps={[
                    {component: Test, name: "Number one"},
                    {component: Test2, name: "Number two"},
                    {component: Test3, name: "Number three"},
                    {component: Test4, name: "Number four"},
                ]} 
                />
            </FormProvider>
        </div>
    );
}

export default App;
