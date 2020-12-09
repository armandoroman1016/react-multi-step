import * as React from "react";
import { render, testCtx } from "../utils/test-utils";
import Controls from "../components/Controls";

import MultiStep from "../index";
import { Test, Test2, Test3, Test4 } from "../test_components/mock";
import { NonEmptyArray, Step } from "../utils/types";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { wait } from "@testing-library/react";
import { ctx } from "../contexts/FormContext";

const currentPosition = 0
const maxPosition = 4
const providerProps = { currentPosition, maxPosition };

describe("Controls", () => {
    it("it renders to the user", async () => {
        // arrange
        const x = render(<Controls />, { providerProps });
        expect(x).toMatchInlineSnapshot(`
            Object {
              "asFragment": [Function],
              "baseElement": <body>
                <div>
                  <div
                    class="Controls__Container-sc-7wzfxo-1 dmgsQe"
                  >
                    <button
                      class="Controls__Button-sc-7wzfxo-0 dqWwAs"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </body>,
              "container": <div>
                <div
                  class="Controls__Container-sc-7wzfxo-1 dmgsQe"
                >
                  <button
                    class="Controls__Button-sc-7wzfxo-0 dqWwAs"
                  >
                    Next
                  </button>
                </div>
              </div>,
              "debug": [Function],
              "findAllByAltText": [Function],
              "findAllByDisplayValue": [Function],
              "findAllByLabelText": [Function],
              "findAllByPlaceholderText": [Function],
              "findAllByRole": [Function],
              "findAllByTestId": [Function],
              "findAllByText": [Function],
              "findAllByTitle": [Function],
              "findByAltText": [Function],
              "findByDisplayValue": [Function],
              "findByLabelText": [Function],
              "findByPlaceholderText": [Function],
              "findByRole": [Function],
              "findByTestId": [Function],
              "findByText": [Function],
              "findByTitle": [Function],
              "getAllByAltText": [Function],
              "getAllByDisplayValue": [Function],
              "getAllByLabelText": [Function],
              "getAllByPlaceholderText": [Function],
              "getAllByRole": [Function],
              "getAllByTestId": [Function],
              "getAllByText": [Function],
              "getAllByTitle": [Function],
              "getByAltText": [Function],
              "getByDisplayValue": [Function],
              "getByLabelText": [Function],
              "getByPlaceholderText": [Function],
              "getByRole": [Function],
              "getByTestId": [Function],
              "getByText": [Function],
              "getByTitle": [Function],
              "queryAllByAltText": [Function],
              "queryAllByDisplayValue": [Function],
              "queryAllByLabelText": [Function],
              "queryAllByPlaceholderText": [Function],
              "queryAllByRole": [Function],
              "queryAllByTestId": [Function],
              "queryAllByText": [Function],
              "queryAllByTitle": [Function],
              "queryByAltText": [Function],
              "queryByDisplayValue": [Function],
              "queryByLabelText": [Function],
              "queryByPlaceholderText": [Function],
              "queryByRole": [Function],
              "queryByTestId": [Function],
              "queryByText": [Function],
              "queryByTitle": [Function],
              "rerender": [Function],
              "unmount": [Function],
            }
        `);
        // const nextBtn = await findByText(/Next/);
        // // assert
        // expect(nextBtn).toBeVisible()
    });
    it("will not render previous button while on first step", async () => {
        const { queryByText } = render(<Controls />, { providerProps });
        expect(queryByText(/Previous/)).toBeNull();
    });
    it("will render prev button after moving past first step", async () => {
        const { queryByText, findByText } = render(<Controls />, { providerProps });
        const nextBtn = await findByText(/Next/);
        userEvent.click(nextBtn);
        expect(queryByText(/Previous/)).toBeVisible();
    });
    it("will not render next button on last step", async () => {
        const x = render(<Controls />, { providerProps });
        const nextBtn = await x.findByText(/Next/);

        const MOVES = maxPosition;
        for (let i = 0; i < MOVES; i++) {
            setTimeout(userEvent.click(nextBtn), 100);
        }

        await wait(() => expect(nextBtn).not.toBeInTheDocument());
    });
});
