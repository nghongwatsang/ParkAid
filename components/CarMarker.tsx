import { CircleLayer, Images, ShapeSource, SymbolLayer } from "@rnmapbox/maps";
import { OnPressEvent } from "@rnmapbox/maps/lib/typescript/src/types/OnPressEvent";
import pin from '../assets/car_green.png';
import cars from '../data/spots.json';
import {featureCollection, point } from '@turf/helpers';
import { useSpot } from "~/provider/SpotProvider";


export default function CarMarker(){
    const spots = cars.map((cars) => point([cars.latitude,cars.longitude], {cars}))
    const {setSelectedSpot} = useSpot();
    
    const onPointPress = async(event: OnPressEvent) => {
        if (event.features[0].properties?.cars){
            setSelectedSpot(event.features[0].properties.cars);
        }
        

    };

    return (
        <ShapeSource id = "car" cluster shape = {featureCollection(spots)}  onPress={onPointPress}>
            
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
    )
}