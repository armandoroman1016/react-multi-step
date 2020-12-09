import * as React from "react";
import { render } from "../utils/test-utils";
import ProgressBar from "../components/ProgressBar";
import "@testing-library/jest-dom/extend-expect";

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
});
