import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useEffect, useRef } from "react";
import { Text } from "react-native-reanimated/lib/typescript/Animated";
import { useSpot } from "~/provider/SpotProvider";
export default function SelectedSpot (){

    const { selectedSpot} = useSpot();
    const bottomSheet = useRef<BottomSheet>(null);

    useEffect(() => {
      if ( selectedSpot){
           bottomSheet.current?.expand();
      }
    }, [selectedSpot]);

    return(
        <BottomSheet  
        index = {-1} 
        snapPoints={[150, '45%']} 
        enableDynamicSizing
        enablePanDownToClose>
        <BottomSheetView style = {{}}>
          <Text> OVERLAY FEATURE</Text>
        </BottomSheetView>

      </BottomSheet>
    )
}