import Mapbox, {Camera, LocationPuck, MapView, ShapeSource, SymbolLayer, Images, CircleLayer, LineLayer} from "@rnmapbox/maps";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";
import {featureCollection, point } from '@turf/helpers';
import pin from '../assets/car_green.png';
import cars from '../data/spots.json'
import routeResponse from '../data/routes.json'

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_KEY || '');

export default function Map(){
    const spots = cars.map((cars) => point([cars.latitude,cars.longitude]))
    const routeData = routeResponse.routes[0].geometry.coordinates;
    return (
    <MapView style = {{flex:1}} >
        <Camera followZoomLevel={10} followUserLocation />
        <LocationPuck puckBearingEnabled  puckBearing = 'heading' pulsing={{isEnabled : true}}/>
        
        <ShapeSource id = "car" cluster shape = {featureCollection(spots)}  onPress={(e) => console.log(JSON.stringify(e, null, 2))}>
            
            {/* Number Denoting how many are in a cluster */}
            <SymbolLayer
                id = "clusters_count"
                style={{
                    textField: ['get', 'point_count'],
                    textColor: '#000080',
                    textSize: 16,
                    textPitchAlignment: 'map',
                    textFont: ['Arial Unicode MS Bold']
  
                }}
            />
            {/* the cicle that appears when spot icons are clustered*/}
            <CircleLayer
                id = 'cluster'
                belowLayerID="clusters_count"
                filter = {['has', 'point_count']}
                style = {{
                    circleColor: '#FF7F50',
                    circlePitchAlignment: 'map',
                    circleRadius: 15,
                    circleOpacity: 0.7,
                    circleStrokeWidth: 2,
                    circleStrokeColor: 'white',
                }}
            />
            {/* Symbol denoting a open spot */}
            <SymbolLayer
                id= "spots-icons"
                filter = {['!', ['has', 'point_count']]}
                style= {{
                    iconImage: 'pin',
                    iconAllowOverlap: true,
                    iconAnchor: 'bottom'

                }}
            />
            <Images images={{ pin: pin }} /> 
        </ShapeSource>

        {routeData &&  (
            <ShapeSource
                id = 'routeSource'
                lineMetrics
                shape ={{
                    properties: {},
                    type: 'Feature',
                    geometry: {
                        type: 'LineString',
                        coordinates: routeData
                    },
                }}>
                <LineLayer
                    id = 'lineLayer'
                    style={{
                        lineColor: '#33ccff',
                        lineCap: 'round',
                        lineJoin: 'round',
                        lineWidth: 7, 
                    }}
                />

            </ShapeSource>



        )}

    </MapView>
    ); 
}