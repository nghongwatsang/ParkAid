import Mapbox, {Camera, LocationPuck, MapView, ShapeSource, SymbolLayer, Images, CircleLayer, LineLayer} from "@rnmapbox/maps";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";
import { OnPressEvent } from "@rnmapbox/maps/lib/typescript/src/types/OnPressEvent";
import { useSpot } from "~/provider/SpotProvider";
import LineRoute from "./lineRoute";

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_KEY || '');

export default function Map(){
    

    const {setSelectedSpot, routeData, routeTime} = useSpot();

    return (
    <MapView style = {{flex:1}} >
        <Camera followZoomLevel={10} followUserLocation />
        <LocationPuck puckBearingEnabled  puckBearing = 'heading' pulsing={{isEnabled : true}}/>
        
       

        {routeData &&  (
            <LineRoute coordinates={routeData} />
        )}

    </MapView>
    ); 
}