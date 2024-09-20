import Mapbox, {Camera, LocationPuck, MapView, ShapeSource, SymbolLayer, Images} from "@rnmapbox/maps";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";
import {featureCollection, point } from '@turf/helpers';
import pin from '../assets/favicon.png';


Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_KEY || '');

export default function Map(){
    return (
    <MapView style = {{flex:1}} >
        <Camera followZoomLevel={10} followUserLocation />
        <LocationPuck puckBearingEnabled  puckBearing = 'heading' pulsing={{isEnabled : true}}/>
        <ShapeSource 
            id = "car" 
            shape = {featureCollection( [ point([42.729990, -73.677518]) ,  point([42.729940, -73.677534]) ] )}> 
            <SymbolLayer
                id="spots-icons"
                style={{
                    iconImage: '{pin}', // use the curly braces around the pin key to reference it properly
                    iconSize: 1.0,      // you can adjust this as needed
                }}
            />
            <Images images={{ pin: pin }} /> 
        
        </ShapeSource>

    </MapView>
    ); 
}