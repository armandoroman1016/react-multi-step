import * as React from "react";
import { findByText, fireEvent, queryByText, render } from "../utils/test-utils";
import Controls from "../components/Controls";

import MultiStep from "../index";
import { Test, Test2, Test3, Test4 } from "../test_components/mock";
import { NonEmptyArray, Step } from "../utils/types";
import '@testing-library/jest-dom/extend-expect'
import userEvent from "@testing-library/user-event"
import { wait } from "@testing-library/react"

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
        const nextBtn = await findByText(/Next/);
        // assert
        expect(nextBtn).toBeVisible()
    });
    it("will not render previous button while on first step", async () => {
        const { queryByText } = render(<Controls />, { renderOptions: {wrapper: TestWrapper}})
        expect(queryByText(/Previous/)).toBeNull()
    })  
    it("will render prev button after moving past first step", async () => {
        const {queryByText, findByText} = render(<Controls/>, {renderOptions: {wrapper: TestWrapper}})
        const nextBtn = await findByText(/Next/);
        userEvent.click(nextBtn)
        expect(queryByText(/Previous/)).toBeVisible()
    })
    it("will not render next button on last step", async () => {
        const x = render(<Controls />, { renderOptions: {wrapper: TestWrapper}})
        const nextBtn = await x.findByText(/Next/)

        const MOVES = steps.length
        for(let i = 0; i < MOVES; i++){
            setTimeout(userEvent.click(nextBtn), 100)
        }
        
        await wait(() => expect(nextBtn).not.toBeInTheDocument())
    })
});
