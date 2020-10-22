import React from "react";
import "./App.css";
import FormContainer from "./Components/FormContainer";

const Test = () => {
    return <div>This is a test step</div>;
};

const steps = [{ component: Test }];

function App() {
    return (
        <div className="App">
            <FormContainer steps={steps} />
        </div>
    );
}

export default App;
