import * as React from "react";
import { render } from "../utils/test-utils";
import ProgressBar from "../components/ProgressBar";
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);
const stepNames = ["one", "two", "three", "four"];
const maxPosition = 4;
const currentPosition = 0;
const providerProps = { stepNames, currentPosition, maxPosition };

describe("ProgressBar", () => {
    it("renders to the user", async () => {
        const x = render(<ProgressBar />, { providerProps });
        expect(x).toMatchSnapshot();
    });
    it("displays all of the steps", async () => {
        const { queryByText } = render(<ProgressBar />, { providerProps });
        const first = await queryByText(/one/);
        const second = await queryByText(/two/);
        const third = await queryByText(/three/);
        const fourth = await queryByText(/four/);

        expect(first).toBeInTheDocument();
        expect(second).toBeInTheDocument();
        expect(third).toBeInTheDocument();
        expect(fourth).toBeInTheDocument();
    });
    it("displays '✓' on completed steps", async () => {
        const { container } = render(<ProgressBar />, { providerProps: { ...providerProps, currentPosition: 1 } });
        const x = container.querySelector(".step-idx.completed");
        expect(x.textContent).toBe("✓");
    });
});
