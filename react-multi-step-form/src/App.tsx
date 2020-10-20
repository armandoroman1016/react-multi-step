import React from "react";
import "./App.css";
import FormContainer from "./Components/FormContainer";

function App() {
    return (
        <div className="App">
            <FormContainer
                heading={"This is my react multi-step form"}
                headingProps={{ className: "These are my custom classes", styles: { color: "red" } }}
            >
                <h1>Hello</h1>
                <h1>Hello #2</h1>
            </FormContainer>
        </div>
    );
}

export default App;
