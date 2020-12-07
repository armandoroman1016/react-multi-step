import * as React from "react";
export declare function createCtx<T>(defaultValue: T): readonly [React.Context<{
    state: T;
    update: React.Dispatch<React.SetStateAction<T>>;
}>, (props: React.PropsWithChildren<Record<string, unknown>>) => JSX.Element];
