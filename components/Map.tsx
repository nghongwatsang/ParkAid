import Mapbox, {Camera, LocationPuck, MapView} from "@rnmapbox/maps";
import { useSpot } from "~/provider/SpotProvider";
import LineRoute from "./lineRoute";
import CarMarker from "./CarMarker";

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_KEY || '');

export default function Map(){
    

    const {routeData} = useSpot();

    return (
    <MapView style = {{flex:1}} >
        <Camera followZoomLevel={10} followUserLocation />
        <LocationPuck puckBearingEnabled  puckBearing = 'heading' pulsing={{isEnabled : true}}/>
        
       <CarMarker/>

        {routeData &&  (
            <LineRoute coordinates={routeData} />
        )}

    </MapView>
    ); 
}