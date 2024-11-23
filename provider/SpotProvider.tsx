import { PropsWithChildren, createContext, useContext, useState } from "react"; 

const spotContext = createContext({});

export default function SpotProvider({children}: PropsWithChildren){
    const [selectedSpot, setSelectedSpot] = useState();
    return <spotContext.Provider value =  {{selectedSpot, setSelectedSpot}}> {children} </spotContext.Provider>;
}

export const useSpot = () => useContext(spotContext);