import * as React from "react";
import { render } from "../utils/test-utils";
import FormStep from "../components/FormStep";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import { Test } from "../test_components/mock";

const currentPosition = 1;
const maxPosition = 4;
const providerProps = { currentPosition, maxPosition };

describe("FormStep", () => {
    it("it renders to the user", async () => {
        const x = render(<FormStep component={Test} stepIndex={1} />, { providerProps });
        expect(x).toMatchSnapshot();
    });
    it("will have 'active' className when active", () => {
        const { container } = render(<FormStep component={Test} stepIndex={1} />, { providerProps });
        const x = container.querySelector(".active");
        expect(x.textContent).toContain("Test Step One");
    });
    it("will not have 'active' className when not active", () => {
        const { container } = render(<FormStep component={Test} stepIndex={0} />, { providerProps });
        const x = container.querySelector(".active");
        expect(x).toBe(null);
    });
});
