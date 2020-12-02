import React from "react";
import "./App.css";
import { MultiStep } from "./Components/MultiStep";
import {Test, Test2, Test3, Test4} from './TestComponents/test'


function App() {
    return (
        <div className="App">
            <MultiStep 
            steps={[
                {component: Test, name: "Foo"},
                {component: Test2, name: "Bar"},
                {component: Test3, name: "Baz"},
                {component: Test4, name: "Bay"},
            ]} />
        </div>
    );
}

export default App;
