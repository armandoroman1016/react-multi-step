import * as React from "react";
import { render } from "../utils/test-utils";
import Controls from "../components/Controls";
import userEvent from "@testing-library/user-event";
import { wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const currentPosition = 0;
const maxPosition = 4;
const providerProps = { currentPosition, maxPosition };

describe("Controls", () => {
    it("it renders to the user", async () => {
        const x = render(<Controls />, { providerProps });
        expect(x).toMatchSnapshot();
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
