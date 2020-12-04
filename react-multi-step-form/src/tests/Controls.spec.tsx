import React from "react";
import { render } from "../utils/test-utils";
import Controls from "../Components/Controls";

import { MultiStep } from "../Components/MultiStep";
import { Test, Test2, Test3, Test4 } from "../TestComponents/test";

const steps = [
    { component: Test, name: "Foo" },
    { component: Test2, name: "Bar" },
    { component: Test3, name: "Baz" },
    { component: Test4, name: "Bay" },
];

const TestWrapper = () => {
    return (
        <>
            <MultiStep steps={steps} />
        </>
    );
};

test("it renders to the user", async () => {
    // arrange
    const x = render(<Controls />, { renderOptions: { wrapper: TestWrapper } });
    const nextButton = await x.findByText(/Next/);
    expect(nextButton).toBeTruthy();
});
