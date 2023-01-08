import { IRouterDom } from "../interfaces";
import { createContext } from "react";

export const ContextGlobal = createContext({});

export function Context({children}: IRouterDom){
    return (
        <ContextGlobal.Provider value={{ 
        }}>
            {children}
        </ContextGlobal.Provider>
    );
}