import { useContext } from "react";

export function updateFormCtx(ctx: Record<string, unknown>, fieldName: string, value: string) {
    try {
        ctx[fieldName] = value;
    } catch (e) {
        throw new Error("A context object must be supplied to this function");
    }

    return ctx;
}
