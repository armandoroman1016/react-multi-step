import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
// import { ThemeProvider } from 'my-ui-lib'
// import { TranslationProvider } from 'my-i18n-lib'

import { FormProvider } from "../Contexts/FormContext";

interface Options {
    providerProps?: Record<any, unknown>;
    renderOptions?: RenderOptions;
}

function customRender(ui: ReactElement, options: Options) {
    return render(<FormProvider>{ui}</FormProvider>, options.renderOptions);
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
