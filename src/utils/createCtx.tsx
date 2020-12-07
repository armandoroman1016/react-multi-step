import * as React from "react";

export function createCtx<T>(defaultValue: T) {
    type UpdateType = React.Dispatch<React.SetStateAction<typeof defaultValue>>;

    const defaultUpdate: UpdateType = () => defaultValue;

    const ctx = React.createContext({
        state: defaultValue,
        update: defaultUpdate,
    });

    function Provider(props: React.PropsWithChildren<Record<string, unknown>>) {
        const [state, update] = React.useState(defaultValue);

        return <ctx.Provider value={{ state, update }} {...props} />;
    }

    return [ctx, Provider] as const;
}
