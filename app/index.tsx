import { Stack, Link } from 'expo-router';
import Map from '~/components/Map'
import SelectedSpot from '~/components/SelectedSpot';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerShown:false }} />
      <Map/>
      <SelectedSpot/>
    </>
  );
}
