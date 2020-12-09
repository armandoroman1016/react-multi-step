import * as React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { FormProvider } from "../contexts/FormContext";

interface Options {
    providerProps?: Record<any, unknown>;
    renderOptions?: RenderOptions;
}

function customRender(ui: React.ReactElement, options: Options) {
    return render(<FormProvider>{ui}</FormProvider>, options.renderOptions);
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
