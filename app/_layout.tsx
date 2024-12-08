import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SpotProvider from '~/provider/SpotProvider';

export default function Layout() {
  return (
    <GestureHandlerRootView style = {{flex: 1}}> 
      <SpotProvider>

      <Stack />
      
      </SpotProvider>
      </GestureHandlerRootView>
  );
}
