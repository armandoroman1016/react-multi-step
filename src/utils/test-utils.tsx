import * as React from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { createCtx } from "./createCtx";
import { formCtx, ctx } from "../contexts/FormContext";

export let testCtx: typeof formCtx;
interface Options {
    providerProps?: Record<string, unknown>;
    renderOptions?: RenderOptions;
}

function customRender(ui: React.ReactElement, options: Options): RenderResult {
    const c = { ...ctx, ...options?.providerProps };
    const [formCtx, Provider] = createCtx(c);
    testCtx = formCtx;

    return render(<Provider>{ui}</Provider>, options.renderOptions);
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
