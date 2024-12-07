import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react"; 
import * as Location from 'expo-location';
import { getDirections } from "~/services/directions";

const spotContext = createContext({});

export default function SpotProvider({children}: PropsWithChildren){
    const [selectedSpot, setSelectedSpot] = useState();
    const [direction, setDirection] = useState();

    useEffect(() => {
        const fetch =async () => {
            const myLocation = await Location.getCurrentPositionAsync();
            const newDirection = await getDirections([myLocation.coords.longitude, myLocation.coords.latitude],[selectedSpot.longitude,selectedSpot.latitude]);
            setDirection(newDirection);
        }
        if(selectedSpot){
            fetch();
        }
    })
    return <spotContext.Provider value =  {{
        selectedSpot, 
        setSelectedSpot, 
        direction, 
        routeData: direction?.routes?.[0]?.geometry.coordinates,
        routeTime: direction?.routes?.duration,
        routeDistance: direction?.routes?.distance
    }}> {children} </spotContext.Provider>;
}

export const useSpot = () => useContext(spotContext);