import React from "react";
import { MultiStep } from "./Components/MultiStep";
import { Test, Test2, Test3, Test4 } from "./TestComponents/test";

import styled from "styled-components";

const Container = styled.div`
    width: 50vw;
    margin: 0 auto;
`;

const App = () => {
    return (
        <Container>
            <MultiStep
                steps={[
                    { component: Test, name: "Foo" },
                    { component: Test2, name: "Bar" },
                    { component: Test3, name: "Baz" },
                    { component: Test4, name: "Bay" },
                ]}
            />
        </Container>
    );
};

export default App;
