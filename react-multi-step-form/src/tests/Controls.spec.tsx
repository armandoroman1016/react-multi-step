import * as React from "react";
import { render } from "../utils/test-utils";
import Controls from "../Components/Controls";

import MultiStep from "../App";
import { Test, Test2, Test3, Test4 } from "../TestComponents/test";
import { NonEmptyArray, Step } from "../utils/types";

const steps: NonEmptyArray<Step> = [
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

describe("Controls", () => {
    it("it renders to the user", async () => {
        // arrange
        const { findByText } = render(<Controls />, { renderOptions: { wrapper: TestWrapper } });
        const nextButton = await findByText(/Next/);
        expect(nextButton).toBeTruthy();
    });
});
