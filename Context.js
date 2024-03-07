import { createContext } from "react";

export const Context = createContext({
    logged: null,
    error: false,
    user: {},
    location: {}
})