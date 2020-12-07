/// <reference types="react" />
export declare type NonEmptyArray<T> = [T, ...T[]];
export interface Step {
    component: React.ComponentType;
    name: string;
}
