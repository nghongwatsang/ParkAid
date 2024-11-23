import { PropsWithChildren, createContext, useContext } from "react"; 

const spotContext = createContext({});

export default function SpotProvider({children}: PropsWithChildren){
    return <spotContext.Provider value =  {{}}> {children} </spotContext.Provider>;
}

export const useSpot = () => useContext(spotContext);