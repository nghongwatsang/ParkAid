import { Stack, Link } from 'expo-router';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import Map from '~/components/Map'

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import bottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet';
import { BottomSheetView } from '@gorhom/bottom-sheet';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerShown:false }} />
      <Map/>
      <BottomSheet  index = {-1} snapPoints={[150, '45%']} enablePanDownToClose>
        <BottomSheetView style = {{styles.contentContainer}}>
          <Text> OVERLAY FEATURE</Text>
        </BottomSheetView>

      </BottomSheet>
    </>
  );
}
