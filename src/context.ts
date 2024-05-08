/* tslint:disable */
import { useContext } from "react";

/* import context elements */
import { someElement } from "../useContext";

export function useFakeContext() {
    const fake = useContext(someElement);

    return useContext(someElement);
}