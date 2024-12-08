import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Text } from "react-native-reanimated/lib/typescript/Animated";
export default function SelectedSpot (){
    return(
        <BottomSheet  index = {-1} snapPoints={[150, '45%']} enablePanDownToClose>
        <BottomSheetView style = {{}}>
          <Text> OVERLAY FEATURE</Text>
        </BottomSheetView>

      </BottomSheet>
    )
}