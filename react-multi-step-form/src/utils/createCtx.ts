import * as React from "react";

export function createCtx<A extends Record<string, unknown> | null>() {
    const ctx = React.createContext<A | undefined>(undefined);

    function useCtx() {
        const c = React.useContext(ctx);
        if (c === undefined) throw new Error("useCtx muse be inside a Provider with a value");
        return c;
    }

    return [useCtx, ctx.Provider] as const;
}
