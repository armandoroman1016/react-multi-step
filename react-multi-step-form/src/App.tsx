import React from "react";
import "./App.css";
import { MultiStep } from "./Components/MultiStep";
import {Test, Test2, Test3, Test4} from './TestComponents/test'


function App() {
    return (
        <div className="App">
            <MultiStep 
            steps={[
                {component: Test, name: "Hello"},
                {component: Test2, name: "Number two"},
                {component: Test3, name: "Number three"},
                {component: Test4, name: "Number four"},
            ]} />
        </div>
    );
}

export default App;
