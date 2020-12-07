import * as React from "react";
import { RenderOptions } from "@testing-library/react";
interface Options {
    providerProps?: Record<any, unknown>;
    renderOptions?: RenderOptions;
}
declare function customRender(ui: React.ReactElement, options: Options): import("@testing-library/react").RenderResult<typeof import("@testing-library/dom/queries")>;
export * from "@testing-library/react";
export { customRender as render };
