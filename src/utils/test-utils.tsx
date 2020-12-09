import * as React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { FormProvider } from "../contexts/FormContext";
import {createCtx} from './createCtx'
import { ctx } from '../contexts/FormContext'

export let testCtx: any; 
interface Options {
    providerProps?: Record<string, unknown>;
    renderOptions?: RenderOptions;
}

function customRender(ui: React.ReactElement, options: Options) {

    let c = {...ctx, ...options?.providerProps}
    let [formCtx, Provider] = createCtx(c)
    testCtx = formCtx

    return render(<Provider>{ui}</Provider>, options.renderOptions);
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
